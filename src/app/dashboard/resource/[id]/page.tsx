import { notFound } from "next/navigation";
import { getResourceById, contributors } from "@/data/resources";
import { ArrowLeft, ExternalLink, Download, AlertCircle } from "lucide-react";
import Link from "next/link";

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resource = getResourceById(id);
  if (!resource) notFound();

  const contributor = contributors.find((c) => c.id === resource.contributor);

  return (
    <div className="max-w-4xl space-y-6">
      {/* Breadcrumb */}
      <Link
        href={`/dashboard/section/${resource.contributor}`}
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to {contributor?.name}&apos;s Resources
      </Link>

      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="text-4xl">{resource.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">{resource.title}</h1>
          <p className="text-zinc-500 mt-1">{resource.description}</p>
          {resource.status !== "active" && (
            <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
              <AlertCircle className="w-3 h-3" />
              {resource.status === "coming_soon" ? "Coming Soon" : "In Progress"}
            </span>
          )}
        </div>
      </div>

      {/* Content based on type */}
      <div className="bg-white rounded-xl border border-zinc-200/60 overflow-hidden">
        {/* Loom Video */}
        {resource.type === "loom_video" && resource.loomUrl && (
          <div className="protected-content">
            {resource.loomUrl === "#" ? (
              <div className="flex items-center justify-center h-64 bg-zinc-50 text-zinc-400">
                <p>Video URL not yet configured</p>
              </div>
            ) : (
              <div
                className="video-protected"
                onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
              >
                <div className="aspect-video">
                  <iframe
                    src={resource.loomUrl.replace("/share/", "/embed/")}
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay; fullscreen"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Course (multiple videos) */}
        {resource.type === "course" && resource.loomUrls && (
          <div className="protected-content p-6 space-y-4">
            <h2 className="font-semibold text-zinc-900">Course Modules</h2>
            <div className="space-y-3">
              {resource.loomUrls.map((video, i) => (
                <div
                  key={i}
                  className="border border-zinc-200 rounded-lg overflow-hidden"
                >
                  <div className="px-4 py-3 bg-zinc-50 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="font-medium text-sm text-zinc-900">
                      {video.title}
                    </span>
                  </div>
                  {video.url !== "#" ? (
                    <div className="video-protected aspect-video">
                      <iframe
                        src={video.url.replace("/share/", "/embed/")}
                        className="w-full h-full"
                        allowFullScreen
                        allow="autoplay; fullscreen"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-48 bg-zinc-50 text-zinc-400 text-sm">
                      Video URL not yet configured
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Document */}
        {resource.type === "document" && (
          <div className="protected-content p-6 lg:p-8 prose prose-zinc prose-sm max-w-none">
            {resource.content?.split("\n").map((line, i) => {
              if (line.startsWith("# "))
                return (
                  <h1 key={i} className="text-xl font-bold mb-4">
                    {line.slice(2)}
                  </h1>
                );
              if (line.startsWith("## "))
                return (
                  <h2 key={i} className="text-lg font-semibold mb-3">
                    {line.slice(3)}
                  </h2>
                );
              if (line === "") return <br key={i} />;
              return (
                <p key={i} className="text-zinc-600 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>
        )}

        {/* Download */}
        {resource.type === "download" && (
          <div className="p-6 flex flex-col items-center justify-center text-center space-y-4 py-12">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Download className="w-8 h-8 text-indigo-500" />
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900 mb-1">
                {resource.title}
              </h2>
              <p className="text-sm text-zinc-500">{resource.description}</p>
            </div>
            {resource.url && resource.url !== "#" ? (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resource
              </a>
            ) : (
              <p className="text-sm text-zinc-400">
                Download link not yet configured
              </p>
            )}
          </div>
        )}

        {/* External Link */}
        {resource.type === "external_link" && (
          <div className="p-6 flex flex-col items-center justify-center text-center space-y-4 py-12">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-indigo-500" />
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900 mb-1">
                {resource.title}
              </h2>
              <p className="text-sm text-zinc-500">{resource.description}</p>
            </div>
            {resource.url && resource.url !== "#" ? (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Open Link
              </a>
            ) : (
              <p className="text-sm text-zinc-400">Link not yet configured</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
