// app/reset-password/ResetPasswordClient.tsx
"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function ResetPasswordClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlToken = searchParams.get("token");

    if (!urlToken && !token) {
      return;
    }

    if (token) return;

    if (!urlToken) {
      setError("Invalid or missing reset token");
      return;
    }

    setToken(urlToken);
    router.replace(pathname);
  }, [searchParams, pathname, router, token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Invalid or missing reset token");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      await api.post("/auth/reset-password", {
        token,
        password,
      });
      router.push("/login?reset=success");
    } catch (err: any) {
      setError(err.response?.data?.error || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/5 border border-white/10 p-8 space-y-6">
        <h1 className="text-xl font-semibold text-slate-100 text-center">
          Reset Password
        </h1>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            required
            minLength={6}
            placeholder="New password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100"
          />

          <input
            type="password"
            required
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100"
          />

          <button
            type="submit"
            disabled={loading || !token}
            className="w-full rounded-xl bg-blue-600 py-2 text-sm font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </main>
  );
}
