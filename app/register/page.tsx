"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react"; 

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      const accessToken = res.data.accessToken;
      sessionStorage.setItem("accessToken", accessToken);

      toast.success("Account created successfully", { duration: 3000 });
      router.push("/");
    } catch (err: any) {
      const msg = err?.response?.data?.error || "Registration failed";
      toast.error(msg, { duration: 4000 });
    } finally {
      setLoading(false);
    }
  };

  // ← UPDATED: Now uses NextAuth signIn
  const handleGoogleRegister = () => {
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
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Create your account
            </h1>
            <p className="text-sm text-slate-300">
              Join Vindhya Soft and start managing your business with clarity.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-600/70 bg-slate-900/40 px-3 py-2.5 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/60"
                placeholder="Enter your full name"
              />
            </div>

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
                <span className="text-[11px] text-slate-400">
                  Min 8 characters
                </span>
              </div>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-600/70 bg-slate-900/40 px-3 py-2.5 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/60"
                placeholder="Create a strong password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="h-px flex-1 bg-slate-600/60" />
            <span>or</span>
            <div className="h-px flex-1 bg-slate-600/60" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Google register - NOW WORKS! */}
            <button
              type="button"
              onClick={handleGoogleRegister}
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
                <span className="text-[13px]">Sign up with Google</span>
              </span>
            </button>

            {/* Login card‑style button */}
            <div className="w-full rounded-2xl border border-slate-600/70 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-100 shadow-sm flex items-center justify-center text-center transition hover:border-blue-400/80 hover:bg-slate-900/80">
              <p className="text-xs sm:text-[13px] text-slate-300">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  Log in
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
