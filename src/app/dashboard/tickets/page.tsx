"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Plus, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface Ticket {
  id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  priority: string;
  createdAt: string;
}

const statusConfig: Record<string, { icon: typeof Clock; class: string; label: string }> = {
  open: { icon: AlertCircle, class: "badge-blue", label: "Open" },
  in_progress: { icon: Clock, class: "badge-yellow", label: "In Progress" },
  resolved: { icon: CheckCircle, class: "badge-green", label: "Resolved" },
  closed: { icon: CheckCircle, class: "badge-gray", label: "Closed" },
};

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/tickets")
      .then((r) => r.json())
      .then(setTickets)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Tickets</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Track your copy review and tech support requests
          </p>
        </div>
        <Link href="/dashboard/tickets/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Ticket
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-zinc-400" />
        </div>
      ) : tickets.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-zinc-200/60">
          <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-xl">🎫</span>
          </div>
          <p className="text-zinc-500 mb-4">No tickets yet</p>
          <Link href="/dashboard/tickets/new" className="btn-secondary inline-flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create your first ticket
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => {
            const status = statusConfig[ticket.status] || statusConfig.open;
            const StatusIcon = status.icon;
            return (
              <div
                key={ticket.id}
                className="bg-white rounded-xl border border-zinc-200/60 p-5 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-zinc-900">{ticket.title}</h3>
                    <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
                      {ticket.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className={cn("badge", status.class)}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {status.label}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {ticket.type === "copy_review" ? "Copy Review" : "Tech Support"}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {new Date(ticket.createdAt).toLocaleDateString()}
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
