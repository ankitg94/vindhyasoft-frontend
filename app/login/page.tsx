"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      const accessToken = res.data.accessToken;
      sessionStorage.setItem("accessToken", accessToken);

      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
      signIn("google", { 
          callbackUrl: "/" 
        });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl px-8 py-10 space-y-8">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

          {/* Header */}
       

          {/* Error */}
          {error && (
            <p className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300 text-center">
              {error}
            </p>
          )}

        

          

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-600/70 bg-slate-900/40 px-3 py-2.5 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/60"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-200">
                  Password
                </label>
              <Link
  href="/forgot-password"
  className="text-[11px] text-blue-300 hover:text-blue-200 underline underline-offset-2"
>
  Forgot password?
</Link>

              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-600/70 bg-slate-900/40 px-3 py-2.5 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/60"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full inline-flex items-center justify-center rounded-2xl
                         bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500
                         px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30
                         transition-transform duration-200 hover:scale-[1.01]
                         disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="h-px flex-1 bg-slate-600/60" />
            <span>or continue with email</span>
            <div className="h-px flex-1 bg-slate-600/60" />
          </div>
            {/* Google + Register link buttons row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Google login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl
                         border border-slate-500/70 bg-slate-900/60 px-4 py-2.5
                         text-sm font-medium text-slate-100 shadow-sm
                         transition hover:border-slate-300 hover:bg-slate-900/90"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
                <span className="text-[18px] font-semibold leading-none text-slate-900">
                  G
                </span>
              </span>
              <span className="flex flex-col text-center">
                <span className="text-[13px]">Sign in with Google</span>
                
              </span>
            </button>

            {/* Go to register */}
            <div
              className="w-full rounded-2xl border border-slate-600/70 bg-slate-900/50
                         px-4 py-2.5 text-sm font-medium text-slate-100 shadow-sm
                         flex items-center justify-center text-center
                         transition hover:border-blue-400/80 hover:bg-slate-900/80"
            >
              <p className="text-xs sm:text-[13px] text-slate-300">
                New here?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          {/* Legal */}
          <p className="text-[11px] text-center text-slate-400">
            By continuing, you agree to our{" "}
            <span className="underline underline-offset-2 decoration-slate-500 hover:decoration-blue-400 cursor-pointer">
              Terms
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-2 decoration-slate-500 hover:decoration-blue-400 cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
