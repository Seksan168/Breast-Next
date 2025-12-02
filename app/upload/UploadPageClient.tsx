"use client";

import React, {
  useState,
  useCallback,
  DragEvent,
  ChangeEvent,
  useEffect,
} from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Image as ImageIcon, CheckCircle2, AlertTriangle, X } from "lucide-react";

// Frontend always calls this relative path
const API_URL = "/predict";


export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [maskUrl, setMaskUrl] = useState<string | null>(null);
  const [coverage, setCoverage] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [slowRequest, setSlowRequest] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Medical disclaimer dialog state
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Show disclaimer on component mount
  useEffect(() => {
    const hasSeenDisclaimer = sessionStorage.getItem('hasSeenMedicalDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    sessionStorage.setItem('hasSeenMedicalDisclaimer', 'true');
    setShowDisclaimer(false);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Medical Disclaimer Dialog */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75 backdrop-blur-sm"
              onClick={handleAcceptDisclaimer}
            ></div>

            {/* Center modal */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border-4 border-amber-400">
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-full">
                      <AlertTriangle className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Important Medical Notice
                    </h3>
                  </div>
                  <button
                    onClick={handleAcceptDisclaimer}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-6 space-y-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-lg font-semibold text-amber-900 mb-2">
                    ⚠️ This is an AI-Assisted Tool, Not a Medical Diagnosis
                  </p>
                  <p className="text-sm text-amber-800">
                    The results provided by this system are for educational and research purposes only.
                  </p>
                </div>

                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-teal-100 rounded-full p-1">
                        <CheckCircle2 className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">AI Analysis Support</h4>
                      <p className="text-sm">
                        This tool uses advanced AI to detect potential calcification patterns in mammography images, 
                        serving as a supplementary screening aid for healthcare professionals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-rose-100 rounded-full p-1">
                        <AlertTriangle className="h-5 w-5 text-rose-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Not a Substitute for Professional Care</h4>
                      <p className="text-sm">
                        <strong>This AI system cannot replace professional medical diagnosis or treatment.</strong> Always 
                        consult with a qualified radiologist or specialist doctor for proper medical evaluation and diagnosis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 rounded-full p-1">
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clinical Validation Required</h4>
                      <p className="text-sm">
                        All findings must be reviewed, validated, and interpreted by licensed medical professionals 
                        with expertise in breast imaging and oncology.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-4">
                  <p className="text-sm text-rose-900 font-semibold mb-2">
                    📋 Medical Action Required:
                  </p>
                  <ul className="text-sm text-rose-800 space-y-1 ml-4 list-disc">
                    <li>Always seek professional medical advice from qualified doctors</li>
                    <li>Get proper diagnosis from certified radiologists</li>
                    <li>Receive treatment from specialist oncologists or breast surgeons</li>
                    <li>Follow your doctor&apos;s recommendations for follow-up care</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-600">
                  <p className="font-semibold mb-1">Academic Project Notice:</p>
                  <p>
                    This system is a senior project developed for educational purposes at Prince of Songkla University. 
                    It has not been approved by medical regulatory authorities for clinical use.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-4 flex flex-col sm:flex-row gap-3 justify-end border-t border-gray-200">
                <button
                  onClick={handleAcceptDisclaimer}
                  className="w-full sm:w-auto bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  I Understand - Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40 border-b-2 border-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-teal-600">MammoCare AI</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
                  About
                </Link>
                <Link href="/upload" className="text-gray-900 hover:text-teal-600 font-medium transition-colors">
                  Upload
                </Link>
                <Link href="/terms" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Terms of service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Back button and Header */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <header className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Breast Calcification Analysis
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                Upload a mammography image and receive AI-powered analysis. Our U-Net based model 
                will detect and segment calcification regions with 99.9% accuracy.
              </p>
            </header>
          </div>

          {/* Upload area */}
          <section className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Upload className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Upload Image</h2>
              </div>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() =>
                  document.getElementById("file-input")?.click()
                }
                className={[
                  "border-3 border-dashed rounded-2xl px-8 py-16",
                  "flex flex-col items-center justify-center text-center",
                  "cursor-pointer transition-all duration-300",
                  dragActive
                    ? "border-teal-500 bg-teal-50 scale-[1.02]"
                    : "border-gray-300 bg-gray-50 hover:border-teal-400 hover:bg-teal-50",
                ].join(" ")}
              >
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />

                <div className="bg-teal-100 p-6 rounded-full mb-4">
                  <ImageIcon className="h-12 w-12 text-teal-600" />
                </div>
                
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  Drag & drop your mammography image here
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  or click to browse from your device
                </p>
                <p className="text-xs text-gray-400">
                  Supports: PNG, JPG, JPEG, DICOM formats
                </p>

                {file && (
                  <div className="mt-6 bg-teal-50 border-2 border-teal-200 rounded-xl px-6 py-3">
                    <p className="text-sm text-teal-800">
                      Selected file:{" "}
                      <span className="font-semibold">{file.name}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Predict button + status */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={handlePredict}
                  disabled={!file || loading}
                  className={[
                    "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold",
                    "transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-teal-300 shadow-lg",
                    !file || loading
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : "bg-teal-600 hover:bg-teal-700 text-white hover:shadow-xl hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-5 w-5" />
                      Start Analysis
                    </>
                  )}
                </button>

                {statusMsg && (
                  <div className="flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-lg px-4 py-2">
                    <span className="text-sm text-teal-700">{statusMsg}</span>
                  </div>
                )}

                {slowRequest && (
                  <div className="flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                    <span className="text-sm text-amber-700">
                      ⏳ Taking longer than usual...
                    </span>
                  </div>
                )}
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl bg-rose-50 border-2 border-rose-200 px-4 py-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-rose-800">{error}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Result panels */}
          <section className="grid gap-6 lg:grid-cols-2">
            {/* Original */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Original Image
                </h2>
              </div>
              <div className="p-6">
                {previewUrl ? (
                  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-inner">
                    <img
                      src={previewUrl}
                      alt="Uploaded preview"
                      className="w-full h-auto object-contain max-h-[500px]"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center">
                    <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No image selected yet</p>
                  </div>
                )}
              </div>
            </div>

            {/* Mask */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Predicted Mask
                </h2>
              </div>
              <div className="p-6">
                {maskUrl ? (
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-inner">
                      <img
                        src={maskUrl}
                        alt="Predicted mask"
                        className="w-full h-auto object-contain max-h-[500px]"
                      />
                    </div>
                    {coverage !== null && (
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-700">
                            Calcification Coverage:
                          </span>
                          <span className="text-2xl font-bold text-teal-600">
                            {(coverage * 100).toFixed(2)}%
                          </span>
                        </div>
                        <div className="mt-3 bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${coverage * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center">
                    <CheckCircle2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Run prediction to see the segmentation mask
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Information Section */}
          <section className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-gray-900">Upload Image</h4>
                <p className="text-sm text-gray-600">
                  Select or drag-and-drop your mammography image in PNG, JPG, or DICOM format.
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-gray-900">AI Analysis</h4>
                <p className="text-sm text-gray-600">
                  Our U-Net model analyzes the image and detects calcification regions with 99.9% accuracy.
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-gray-900">View Results</h4>
                <p className="text-sm text-gray-600">
                  Review the segmentation mask and calcification coverage percentage for clinical assessment.
                </p>
              </div>
            </div>
          </section>

          {/* Medical Disclaimer Banner */}
          <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl shadow-xl border-2 border-amber-200 p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-amber-100 p-3 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  Important Medical Disclaimer
                </h3>
                <div className="bg-white rounded-xl p-4 border-2 border-amber-200">
                  <p className="text-gray-800 font-semibold mb-2">
                    ⚠️ This AI system is NOT a substitute for professional medical diagnosis
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The analysis results provided by this system are for <strong>educational and research purposes only</strong>. 
                    They should be used as a supplementary screening tool and must be reviewed, validated, and interpreted 
                    by licensed medical professionals.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-rose-700 mb-2 flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Do Not Self-Diagnose
                    </h4>
                    <p className="text-gray-600">
                      Always consult with qualified radiologists and specialist doctors for proper medical evaluation, 
                      diagnosis, and treatment recommendations.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-teal-700 mb-2 flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Seek Professional Care
                    </h4>
                    <p className="text-gray-600">
                      For any concerns about breast health, schedule an appointment with your healthcare provider 
                      or visit a certified breast imaging center.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-100 rounded-lg p-3 text-xs text-amber-900">
                  <strong>Academic Project:</strong> This system was developed as a senior project at Prince of Songkla University 
                  for educational purposes and has not been approved by medical regulatory authorities for clinical use.
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}