export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Segmentation App</h1>
      <p className="text-lg text-center max-w-2xl">
        This application allows you to upload images and perform segmentation tasks using our advanced AI models.
        Get started by uploading an image on the main page!
      </p>
    </div>
  );
}