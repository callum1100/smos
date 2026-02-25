"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewTicketPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedType = searchParams.get("type") || "";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(preselectedType || "copy_review");
  const [loomUrl, setLoomUrl] = useState("");
  const [docUrl, setDocUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, type, loomUrl: loomUrl || undefined, docUrl: docUrl || undefined }),
      });

      if (res.ok) {
        router.push("/dashboard/tickets");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Failed to create ticket");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <Link
        href="/dashboard/tickets"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tickets
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-white">New Ticket</h1>
        <p className="text-sm text-zinc-500 mt-1">
          Submit a request for copy review or tech support
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="input-premium"
          >
            <option value="copy_review">Copy Review</option>
            <option value="tech_support">Tech Support</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Brief summary of your request"
            required
            className="input-premium"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide details about your request..."
            required
            className="textarea-premium"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Loom URL <span className="text-zinc-600 font-normal">(optional)</span>
          </label>
          <input
            type="url"
            value={loomUrl}
            onChange={(e) => setLoomUrl(e.target.value)}
            placeholder="https://www.loom.com/share/..."
            className="input-premium"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Document / Copy Link <span className="text-zinc-600 font-normal">(optional)</span>
          </label>
          <input
            type="url"
            value={docUrl}
            onChange={(e) => setDocUrl(e.target.value)}
            placeholder="Google Doc, Notion page, or any link to your copy"
            className="input-premium"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-950/50 rounded-lg px-4 py-2 border border-red-900/50">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? "Submitting..." : "Submit Ticket"}
        </button>
      </form>
    </div>
  );
}
