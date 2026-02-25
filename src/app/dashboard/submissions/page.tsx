"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Plus, Loader2 } from "lucide-react";

interface Submission {
  id: string;
  type: string;
  data: string;
  status: string;
  createdAt: string;
}

const statusLabels: Record<string, { class: string; label: string }> = {
  pending: { class: "badge-yellow", label: "Pending Review" },
  reviewed: { class: "badge-blue", label: "Reviewed" },
  approved: { class: "badge-green", label: "Approved" },
  rejected: { class: "badge-red", label: "Rejected" },
};

const typeLabels: Record<string, string> = {
  weekly_call: "Weekly Call Submission",
  rep_hiring: "Rep Hiring Application",
};

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/submissions")
      .then((r) => r.json())
      .then(setSubmissions)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Submissions</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Track your form submissions and their review status
          </p>
        </div>
        <Link
          href="/dashboard/submissions/new"
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Submission
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-zinc-400" />
        </div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-zinc-200/60">
          <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">📝</span>
          </div>
          <p className="text-zinc-500 mb-4">No submissions yet</p>
          <Link
            href="/dashboard/submissions/new"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create your first submission
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {submissions.map((sub) => {
            const status = statusLabels[sub.status] || statusLabels.pending;
            let parsedData: Record<string, string> = {};
            try {
              parsedData = JSON.parse(sub.data);
            } catch {
              /* noop */
            }
            return (
              <div
                key={sub.id}
                className="bg-white rounded-xl border border-zinc-200/60 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-zinc-900">
                      {typeLabels[sub.type] || sub.type}
                    </h3>
                    {parsedData.notes && (
                      <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
                        {parsedData.notes}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-3">
                      <span className={cn("badge", status.class)}>
                        {status.label}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {new Date(sub.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
