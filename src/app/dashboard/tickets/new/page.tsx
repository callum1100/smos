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
  const [priority, setPriority] = useState("normal");
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
        body: JSON.stringify({ title, description, type, priority }),
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
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tickets
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-zinc-900">New Ticket</h1>
        <p className="text-sm text-zinc-500 mt-1">
          Submit a request for copy review or tech support
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl border border-zinc-200/60 p-6 space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">
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
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">
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
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">
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
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="input-premium"
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">
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
