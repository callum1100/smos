"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewSubmissionPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedType = searchParams.get("type") || "";

  const [type, setType] = useState(preselectedType || "weekly_call");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Weekly call fields
  const [callDate, setCallDate] = useState("");
  const [callNotes, setCallNotes] = useState("");
  const [callOutcome, setCallOutcome] = useState("");

  // Rep hiring fields
  const [repName, setRepName] = useState("");
  const [repEmail, setRepEmail] = useState("");
  const [repExperience, setRepExperience] = useState("");
  const [repNotes, setRepNotes] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data =
      type === "weekly_call"
        ? { date: callDate, notes: callNotes, outcome: callOutcome }
        : {
            name: repName,
            email: repEmail,
            experience: repExperience,
            notes: repNotes,
          };

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, data }),
      });

      if (res.ok) {
        router.push("/dashboard/submissions");
        router.refresh();
      } else {
        const resData = await res.json();
        setError(resData.error || "Failed to submit");
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
        href="/dashboard/submissions"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Submissions
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-white">New Submission</h1>
        <p className="text-sm text-zinc-500 mt-1">
          Fill out the form below to submit your information
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">
            Submission Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="input-premium"
          >
            <option value="weekly_call">Weekly Call Notes</option>
            <option value="rep_hiring">Rep Hiring Application</option>
          </select>
        </div>

        {type === "weekly_call" && (
          <>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Call Date
              </label>
              <input
                type="date"
                value={callDate}
                onChange={(e) => setCallDate(e.target.value)}
                required
                className="input-premium"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Call Notes
              </label>
              <textarea
                value={callNotes}
                onChange={(e) => setCallNotes(e.target.value)}
                placeholder="Key discussion points and takeaways..."
                required
                className="textarea-premium"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Outcome / Next Steps
              </label>
              <textarea
                value={callOutcome}
                onChange={(e) => setCallOutcome(e.target.value)}
                placeholder="Action items and follow-ups..."
                required
                className="textarea-premium min-h-[100px]"
              />
            </div>
          </>
        )}

        {type === "rep_hiring" && (
          <>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Candidate Name
              </label>
              <input
                type="text"
                value={repName}
                onChange={(e) => setRepName(e.target.value)}
                placeholder="Full name"
                required
                className="input-premium"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Candidate Email
              </label>
              <input
                type="email"
                value={repEmail}
                onChange={(e) => setRepEmail(e.target.value)}
                placeholder="email@example.com"
                required
                className="input-premium"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Experience
              </label>
              <textarea
                value={repExperience}
                onChange={(e) => setRepExperience(e.target.value)}
                placeholder="Relevant sales experience..."
                required
                className="textarea-premium"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                Additional Notes
              </label>
              <textarea
                value={repNotes}
                onChange={(e) => setRepNotes(e.target.value)}
                placeholder="Any other relevant information..."
                className="textarea-premium min-h-[100px]"
              />
            </div>
          </>
        )}

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
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
