"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Loader2, Info } from "lucide-react";
import Link from "next/link";

const copyReviewGuidelines = {
  title: "How to submit a copy review",
  rules: [
    "You have watched the copywriting modules specific to the piece of copy you have written",
    "You have completed your client's copywriting foundations checklist (check \"Do This Before Writing ANY Copy\" module for more context)",
    "You have fully drafted out a piece of copy",
  ],
  steps: [
    "Give your review a clear title (e.g. \"VSL Script — [Client Name]\")",
    "Describe what you've written and what you'd like feedback on specifically",
    "Record a quick 2–5 min Loom going through what it is you've written and what you'd like feedback on",
    "Provide your copywriting foundations checklist doc for that specific client",
    "Provide the doc you wrote the copy on (Google Doc, Notion, etc.)",
  ],
};

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

  const isCopyReview = type === "copy_review";

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
        <h1 className="text-2xl font-bold text-white">
          {isCopyReview ? "Copy Review" : "New Ticket"}
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          {isCopyReview
            ? "Submit a piece of copy you'd like Virgile to review"
            : "Submit a request for tech support"}
        </p>
      </div>

      {/* Copy Review Guidelines */}
      {isCopyReview && (
        <div className="bg-purple-950/20 rounded-xl border border-purple-900/40 p-5 space-y-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Info className="w-4 h-4" />
            <h3 className="text-sm font-semibold">Before submitting</h3>
          </div>
          <p className="text-sm text-zinc-400">Only submit a copy review when:</p>
          <ul className="space-y-2">
            {copyReviewGuidelines.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-purple-400 mt-0.5">✓</span>
                {rule}
              </li>
            ))}
          </ul>
          <div className="border-t border-purple-900/40 pt-3 mt-3">
            <p className="text-sm text-zinc-400 mb-2">How to submit:</p>
            <ol className="space-y-1.5">
              {copyReviewGuidelines.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-purple-400 font-semibold text-xs mt-0.5 w-4 shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

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
            Title <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={isCopyReview ? 'e.g. "VSL Script — Client Name"' : "Brief summary of your request"}
            required
            className="input-premium"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Description <span className="text-red-400">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={isCopyReview
              ? "What have you written? What would you like feedback on specifically?"
              : "Provide details about your request..."}
            required
            className="textarea-premium"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Loom URL {isCopyReview
              ? <span className="text-zinc-500 font-normal">(2–5 min walkthrough)</span>
              : <span className="text-zinc-600 font-normal">(optional)</span>}
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
            Document / Copy Link {isCopyReview
              ? <span className="text-zinc-500 font-normal">(the doc you wrote the copy on)</span>
              : <span className="text-zinc-600 font-normal">(optional)</span>}
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
          {loading ? "Submitting..." : isCopyReview ? "Submit for Review" : "Submit Ticket"}
        </button>
      </form>
    </div>
  );
}
