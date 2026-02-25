import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Video,
  ExternalLink,
  FileText,
  Download,
  Ticket,
  ClipboardList,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import type { Resource } from "@/data/resources";

const typeIcons: Record<string, typeof Video> = {
  loom_video: Video,
  external_link: ExternalLink,
  document: FileText,
  download: Download,
  ticket_system: Ticket,
  submission_form: ClipboardList,
  course: GraduationCap,
};

const typeLabels: Record<string, string> = {
  loom_video: "Video",
  external_link: "Link",
  document: "Document",
  download: "Download",
  ticket_system: "Tickets",
  submission_form: "Form",
  course: "Course",
};

const colorGradients: Record<string, string> = {
  orange: "from-orange-400 to-amber-500",
  blue: "from-blue-400 to-cyan-500",
  purple: "from-purple-400 to-violet-500",
  green: "from-emerald-400 to-teal-500",
};

const colorAccents: Record<string, string> = {
  orange: "bg-orange-950/50 text-orange-400 ring-orange-800",
  blue: "bg-blue-950/50 text-blue-400 ring-blue-800",
  purple: "bg-purple-950/50 text-purple-400 ring-purple-800",
  green: "bg-emerald-950/50 text-emerald-400 ring-emerald-800",
};

function getHref(resource: Resource): string {
  if (resource.type === "external_link" && resource.url && resource.url !== "#") {
    return resource.url;
  }
  if (resource.type === "ticket_system") {
    return `/dashboard/tickets/new?type=${resource.ticketType}`;
  }
  if (resource.type === "submission_form") {
    return `/dashboard/submissions/new?type=${resource.formType}`;
  }
  return `/dashboard/resource/${resource.id}`;
}

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = typeIcons[resource.type] || FileText;
  const href = getHref(resource);
  const isExternal = resource.type === "external_link" && resource.url !== "#";

  const card = (
    <div className="card-premium overflow-hidden h-full flex flex-col group">
      {/* Gradient header strip */}
      <div
        className={cn(
          "h-1.5 bg-gradient-to-r",
          colorGradients[resource.color] || colorGradients.blue
        )}
      />

      <div className="p-5 flex-1 flex flex-col">
        {/* Icon and type badge */}
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">{resource.icon}</span>
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full ring-1",
              colorAccents[resource.color] || colorAccents.blue
            )}
          >
            <Icon className="w-3 h-3" />
            {typeLabels[resource.type]}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-white mb-1.5 group-hover:text-indigo-400 transition-colors">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-500 leading-relaxed flex-1">
          {resource.description}
        </p>

        {/* Status badge */}
        {resource.status !== "active" && (
          <div className="mt-3">
            <span
              className={cn(
                "badge",
                resource.status === "coming_soon"
                  ? "badge-blue"
                  : "badge-yellow"
              )}
            >
              {resource.status === "coming_soon"
                ? "Coming Soon"
                : "In Progress"}
            </span>
          </div>
        )}

        {/* Hover arrow */}
        <div className="mt-4 flex items-center text-sm font-medium text-zinc-500 group-hover:text-indigo-400 transition-colors">
          <span>
            {resource.type === "external_link"
              ? "Open"
              : resource.type === "ticket_system"
              ? "Submit Request"
              : resource.type === "submission_form"
              ? "Fill Out Form"
              : "View"}
          </span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return <Link href={href}>{card}</Link>;
}
