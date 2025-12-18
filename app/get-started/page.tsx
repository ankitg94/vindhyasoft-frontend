import Link from "next/link";

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center space-y-8">

        <h1 className="text-4xl font-bold text-white">
          Get Started with Vindhya Soft
        </h1>

        <p className="text-gray-400">
          Choose how you'd like to continue
        </p>

        <div className="grid gap-4 mt-8">
          {/* New User */}
          <Link
            href="/register"
            className="block px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            🚀 I’m New — Create an Account
          </Link>

          {/* Existing User */}
          <Link
            href="/login"
            className="block px-6 py-4 rounded-xl border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-300 transition"
          >
            🔐 I’m Already a Customer — Login
          </Link>
        </div>

      </div>
    </main>
  );
}
