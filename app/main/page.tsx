"use client";

import React, {
  useState,
  useCallback,
  DragEvent,
  ChangeEvent,
} from "react";

// Frontend always calls this relative path
const API_URL = "/predict";

export default function SegmentationPage() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [maskUrl, setMaskUrl] = useState<string | null>(null);
  const [coverage, setCoverage] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [slowRequest, setSlowRequest] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle new file (from drop or file input)
  const handleNewFile = useCallback(
    (f: File) => {
      setFile(f);
      setMaskUrl(null);
      setCoverage(null);
      setError(null);
      setSlowRequest(false);
      setStatusMsg(null);

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      const url = URL.createObjectURL(f);
      setPreviewUrl(url);
    },
    [previewUrl]
  );

  // Drag events
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      handleNewFile(droppedFile);
    }
  };

  // Change from file input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetFile = e.target.files?.[0];
    if (targetFile) {
      handleNewFile(targetFile);
    }
  };

  // Call backend via /predict (Next.js will rewrite this)
  const handlePredict = async () => {
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    setError(null);
    setMaskUrl(null);
    setCoverage(null);
    setSlowRequest(false);
    setStatusMsg("Sending image to model…");

    const controller = new AbortController();
    const { signal } = controller;

    const slowTimer = window.setTimeout(() => {
      setSlowRequest(true);
      setStatusMsg(
        "Model is taking longer than usual. This can happen if the server is cold-starting or the image is large."
      );
    }, 8000);

    const hardTimeout = window.setTimeout(() => {
      controller.abort();
    }, 30000);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
        signal,
      });

      window.clearTimeout(slowTimer);
      window.clearTimeout(hardTimeout);

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(
          text
            ? `Server error (${res.status}): ${text}`
            : `Server error (${res.status}).`
        );
      }

      const data = await res.json();

      if (!data.mask_base64) {
        throw new Error("Response does not contain mask_base64.");
      }

      const maskSrc = `data:image/png;base64,${data.mask_base64}`;
      setMaskUrl(maskSrc);

      if (typeof data.mask_coverage === "number") {
        setCoverage(data.mask_coverage);
      }

      setStatusMsg("Prediction complete ✅");
      setSlowRequest(false);
    } catch (err: any) {
      console.error(err);
      window.clearTimeout(slowTimer);
      window.clearTimeout(hardTimeout);

      if (err.name === "AbortError") {
        setError(
          "The request took too long and was cancelled. The server may be busy or sleeping. Please try again."
        );
      } else {
        setError(
          err.message || "Something went wrong while calling the API."
        );
      }
      setStatusMsg(null);
      setSlowRequest(false);
    } finally {
      window.clearTimeout(slowTimer);
      window.clearTimeout(hardTimeout);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl space-y-6">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Breast Calcification Segmentation Demo
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl">
            Upload a mammogram image and send it to your FastAPI + Keras
            segmentation model. The predicted mask and lesion coverage
            will be visualized on the right.
          </p>
        </header>

        {/* Upload area */}
        <section className="space-y-4">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() =>
              document.getElementById("file-input")?.click()
            }
            className={[
              "border-2 border-dashed rounded-xl px-6 py-10 md:px-10 md:py-12",
              "bg-slate-900/70 flex flex-col items-center justify-center text-center",
              "cursor-pointer transition-colors",
              dragActive
                ? "border-sky-400 bg-slate-900"
                : "border-slate-700 hover:border-sky-500",
            ].join(" ")}
          >
            <input
              id="file-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />

            <div className="text-5xl mb-2">📂</div>
            <p className="font-semibold">
              Drag &amp; drop your image here
            </p>
            <p className="text-xs md:text-sm text-slate-400">
              or click to browse from your device
            </p>

            {file && (
              <p className="mt-3 text-xs md:text-sm text-indigo-300">
                Selected file:{" "}
                <span className="font-semibold">{file.name}</span>
              </p>
            )}
          </div>

          {/* Predict button + status */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePredict}
              disabled={!file || loading}
              className={[
                "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold",
                "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 focus:ring-offset-slate-950",
                !file || loading
                  ? "bg-slate-600 cursor-not-allowed text-slate-200"
                  : "bg-emerald-500 hover:bg-emerald-400 text-slate-950",
              ].join(" ")}
            >
              {loading ? "Predicting…" : "Predict"}
            </button>

            {statusMsg && (
              <span className="text-xs md:text-sm text-slate-300">
                {statusMsg}
              </span>
            )}

            {slowRequest && (
              <span className="text-xs text-amber-400 flex items-center gap-1">
                ⏳ Taking longer than usual...
              </span>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="mt-2 rounded-lg bg-rose-900/60 border border-rose-700 px-3 py-2 text-sm text-rose-100">
              <span className="mr-1">⚠️</span>
              {error}
            </div>
          )}
        </section>

        {/* Result panels */}
        <section className="grid gap-4 md:grid-cols-2">
          {/* Original */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
            <h2 className="text-sm font-semibold">Original Image</h2>
            {previewUrl ? (
              <div className="bg-black rounded-lg overflow-hidden flex items-center justify-center max-h-96">
                <img
                  src={previewUrl}
                  alt="Uploaded preview"
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <p className="text-xs md:text-sm text-slate-500">
                No image selected yet.
              </p>
            )}
          </div>

          {/* Mask */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
            <h2 className="text-sm font-semibold">Predicted Mask</h2>
            {maskUrl ? (
              <>
                <div className="bg-black rounded-lg overflow-hidden flex items-center justify-center max-h-96">
                  <img
                    src={maskUrl}
                    alt="Predicted mask"
                    className="w-full h-full object-contain"
                  />
                </div>
                {coverage !== null && (
                  <p className="text-xs md:text-sm text-indigo-300 mt-2">
                    Mask coverage:{" "}
                    <span className="font-semibold">
                      {(coverage * 100).toFixed(2)}%
                    </span>
                  </p>
                )}
              </>
            ) : (
              <p className="text-xs md:text-sm text-slate-500">
                Run prediction to see the mask here.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
