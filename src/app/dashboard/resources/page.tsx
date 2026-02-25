"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ResourceCard } from "@/components/resource-card";
import { resources, categories, contributors } from "@/data/resources";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ResourcesPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedContributor, setSelectedContributor] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    if (selectedCategory !== "all" && r.category !== selectedCategory) return false;
    if (selectedContributor !== "all" && r.contributor !== selectedContributor) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">All Resources</h1>
        <p className="text-sm text-zinc-500 mt-1">
          Browse and search through all available materials
        </p>
      </div>

      {/* Search and filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-premium pl-10 pr-10"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
              selectedCategory === "all"
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            )}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1",
                selectedCategory === cat.id
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              )}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Contributor pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedContributor("all")}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
              selectedContributor === "all"
                ? "bg-indigo-500 text-white"
                : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
            )}
          >
            All Sections
          </button>
          {contributors.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedContributor(c.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1",
                selectedContributor === c.id
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              )}
            >
              <span>{c.icon}</span>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <p className="text-sm text-zinc-500 mb-4">
          {filtered.length} resource{filtered.length !== 1 ? "s" : ""} found
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-400">
              No resources match your filters. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
