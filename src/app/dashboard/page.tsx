import { requireAuth } from "@/lib/auth";
import { ResourceCard } from "@/components/resource-card";
import { resources, contributors, categories } from "@/data/resources";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function DashboardPage() {
  const session = await requireAuth();
  const firstName = session.email.split("@")[0];

  return (
    <div className="space-y-12">
      {/* Welcome header */}
      <div className="animate-fade-in">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950 p-8 lg:p-10 border border-zinc-800/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4" />

          <div className="relative">
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Welcome back, {firstName}
            </h1>
            <p className="text-zinc-400 text-sm lg:text-base max-w-xl">
              Access your resources, SOPs, training materials, and tools all in
              one place. Everything you need to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Quick access: Contributor sections */}
      <div className="animate-fade-in animate-fade-in-delay-1">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-white">Sections</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contributors.map((c) => (
            <Link
              key={c.id}
              href={`/dashboard/section/${c.id}`}
              className="card-premium p-5 group"
            >
              <span className="text-3xl mb-3 block">{c.icon}</span>
              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                {c.name}
              </h3>
              <p className="text-sm text-zinc-500 mt-0.5">{c.role}</p>
              <div className="mt-3 flex items-center text-sm text-zinc-500 group-hover:text-indigo-400 transition-colors">
                <span>
                  {resources.filter((r) => r.contributor === c.id).length}{" "}
                  resources
                </span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Browse by category */}
      <div className="animate-fade-in animate-fade-in-delay-2">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-white">
            Browse by Category
          </h2>
          <Link
            href="/dashboard/resources"
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((cat) => {
            const count = resources.filter(
              (r) => r.category === cat.id
            ).length;
            if (count === 0) return null;
            return (
              <Link
                key={cat.id}
                href={`/dashboard/resources?category=${cat.id}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group"
              >
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">
                    {cat.label}
                  </p>
                  <p className="text-xs text-zinc-500">{count} items</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent / Featured resources */}
      <div className="animate-fade-in animate-fade-in-delay-3">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-white">
            Featured Resources
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.slice(0, 6).map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
