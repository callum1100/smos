"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Ticket,
  FileText,
  ChevronDown,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { contributors } from "@/data/resources";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "All Resources", href: "/dashboard/resources", icon: BookOpen },
  { name: "Tickets", href: "/dashboard/tickets", icon: Ticket },
  { name: "Submissions", href: "/dashboard/submissions", icon: FileText },
];

export function Sidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(true);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
          <span className="text-white text-sm font-bold">S</span>
        </div>
        <span className="text-white font-semibold text-lg tracking-tight">SMOS</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto sidebar">
        {navigation.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.name}
            </Link>
          );
        })}

        {/* Sections */}
        <div className="pt-4">
          <button
            onClick={() => setSectionsOpen(!sectionsOpen)}
            className="flex items-center gap-2 px-3 py-2 w-full text-xs font-semibold text-zinc-500 uppercase tracking-wider hover:text-zinc-400 transition-colors"
          >
            <ChevronDown
              className={cn(
                "w-3 h-3 transition-transform",
                !sectionsOpen && "-rotate-90"
              )}
            />
            Sections
          </button>
          {sectionsOpen &&
            contributors.map((c) => {
              const href = `/dashboard/section/${c.id}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={c.id}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ml-2",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span className="text-base">{c.icon}</span>
                  {c.name}
                </Link>
              );
            })}
        </div>
      </nav>

      {/* User info & Logout */}
      <div className="px-3 py-4 border-t border-zinc-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">
              {email[0].toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-zinc-500 hover:text-white transition-colors p-1"
            title="Sign out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center shadow-lg"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-zinc-950 border-r border-zinc-800/50 flex flex-col shrink-0 transition-transform duration-300 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
