import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between bg-black">
      
      {/* LOGO / BRAND */}
      <Link
        href="/"
        className="text-xl font-semibold text-white hover:text-blue-400 transition"
      >
        Vindhya Soft
      </Link>

      {/* NAVIGATION */}
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/product"
          className="text-gray-300 hover:text-white transition"
        >
          Product
        </Link>

        <Link
          href="/get-started"
          className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium text-white"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
