import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zigron-light px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-zigron-red mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-zigron-black mb-4">
          Page not found
        </h2>
        <p className="text-zigron-gray mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-zigron-red hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-zigron-black text-zigron-black hover:bg-zigron-black hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
