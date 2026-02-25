import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/resource-card";
import {
  resources,
  contributors,
  type Contributor,
} from "@/data/resources";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function SectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const contributor = contributors.find((c) => c.id === id);
  if (!contributor) notFound();

  const sectionResources = resources.filter(
    (r) => r.contributor === (id as Contributor)
  );

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-4xl">{contributor.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {contributor.name}&apos;s Resources
            </h1>
            <p className="text-zinc-500 text-sm">{contributor.role}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sectionResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      {sectionResources.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-500">No resources in this section yet.</p>
        </div>
      )}
    </div>
  );
}
