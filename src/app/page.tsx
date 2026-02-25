"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/send-magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-lg shadow-indigo-500/25">
            <span className="text-2xl">S</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to SMOS</h1>
          <p className="text-zinc-400 text-sm">
            Your centralized resource hub. Sign in to access all materials.
          </p>
        </div>

        <div className="bg-zinc-900/50 glass border border-zinc-800 rounded-2xl p-8 shadow-2xl">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700
                             text-white placeholder:text-zinc-500
                             focus:outline-none focus:ring-2 focus:ring-indigo-500/40
                             focus:border-indigo-500 transition-all duration-200"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-sm
                           bg-gradient-to-r from-indigo-500 to-purple-500 text-white
                           hover:from-indigo-600 hover:to-purple-600
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-200 shadow-lg shadow-indigo-500/20
                           flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : "Send Magic Link"}
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">
                Check your email
              </h2>
              <p className="text-sm text-zinc-400 mb-6">
                We sent a sign-in link to{" "}
                <span className="text-white font-medium">{email}</span>.
                <br />
                The link expires in 15 minutes.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setEmail("");
                }}
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Use a different email
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-zinc-600 mt-8">
          Access is by invitation only. Contact your admin if you need access.
        </p>
      </div>
    </div>
  );
}
