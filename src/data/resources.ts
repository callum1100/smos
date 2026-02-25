export type ResourceType =
  | "loom_video"
  | "external_link"
  | "document"
  | "download"
  | "ticket_system"
  | "submission_form"
  | "course";

export type Contributor = "andres" | "rene" | "virgile" | "callum";

export type Category =
  | "sales"
  | "outreach"
  | "copywriting"
  | "backend"
  | "funnels"
  | "hiring"
  | "training"
  | "tools";

export type ResourceStatus = "active" | "coming_soon" | "in_progress";

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  contributor: Contributor;
  category: Category;
  icon: string;
  color: string;
  status: ResourceStatus;
  url?: string;
  loomUrl?: string;
  loomUrls?: { title: string; url: string; section?: string }[];
  content?: string;
  ticketType?: string;
  formType?: string;
}

export interface ContributorInfo {
  id: Contributor;
  name: string;
  role: string;
  icon: string;
  color: string;
}

export const contributors: ContributorInfo[] = [
  {
    id: "andres",
    name: "Andres",
    role: "Sales & Funnels",
    icon: "🎯",
    color: "bg-orange-950/50 border-orange-800 text-orange-400",
  },
  {
    id: "rene",
    name: "Rene",
    role: "Outreach & Lead Gen",
    icon: "📡",
    color: "bg-blue-950/50 border-blue-800 text-blue-400",
  },
  {
    id: "virgile",
    name: "Virgile",
    role: "Copywriting",
    icon: "✍️",
    color: "bg-purple-950/50 border-purple-800 text-purple-400",
  },
  {
    id: "callum",
    name: "Callum",
    role: "Tech & Backend",
    icon: "⚙️",
    color: "bg-green-950/50 border-green-800 text-green-400",
  },
];

export const resources: Resource[] = [
  // ── Andres's Resources ───────────────────────────────────────────
  {
    id: "andres-calendar",
    title: "Weekly Calendar",
    description: "Book your weekly call with Andres",
    type: "external_link",
    contributor: "andres",
    category: "sales",
    icon: "📅",
    color: "orange",
    status: "active",
    url: "#",
  },
  {
    id: "andres-roadmap",
    title: "Custom Roadmap",
    description: "Your personalized growth and sales roadmap",
    type: "document",
    contributor: "andres",
    category: "sales",
    icon: "🗺️",
    color: "orange",
    status: "active",
    content: "# Custom Roadmap\n\nThis roadmap will be customized for your specific needs. Content coming soon.",
  },
  {
    id: "andres-funnels-walkthrough",
    title: "Cool Funnels & Assets Walkthrough",
    description: "Complete walkthrough of our best-performing funnels and creative assets",
    type: "loom_video",
    contributor: "andres",
    category: "funnels",
    icon: "🎬",
    color: "orange",
    status: "active",
    loomUrl: "#",
  },
  {
    id: "andres-webinar-funnels",
    title: "Webinar & Challenge Funnels",
    description: "Deep dive into webinar and challenge funnel structures and assets",
    type: "loom_video",
    contributor: "andres",
    category: "funnels",
    icon: "🎪",
    color: "orange",
    status: "active",
    loomUrl: "#",
  },
  {
    id: "andres-funnels-directory",
    title: "Funnels & Events Directory",
    description: "Complete document with all funnels and events for reference",
    type: "document",
    contributor: "andres",
    category: "funnels",
    icon: "📋",
    color: "orange",
    status: "active",
    content: "# Funnels & Events Directory\n\nMaster list of all funnels and events. Content to be migrated.",
  },
  {
    id: "andres-sales-sop",
    title: "Sales Management SOP",
    description: "Standard operating procedure for managing the sales process end-to-end",
    type: "document",
    contributor: "andres",
    category: "sales",
    icon: "📖",
    color: "orange",
    status: "active",
    content: "# Sales Management SOP\n\nDetailed sales management procedures. Content to be migrated from Notion.",
  },
  {
    id: "andres-weekly-calls",
    title: "Weekly Calls Submission",
    description: "Submit your weekly call notes and updates",
    type: "submission_form",
    contributor: "andres",
    category: "sales",
    icon: "📝",
    color: "orange",
    status: "active",
    formType: "weekly_call",
  },
  {
    id: "andres-call-review",
    title: "Call Review",
    description: "Recorded call reviews and feedback via Loom",
    type: "loom_video",
    contributor: "andres",
    category: "sales",
    icon: "🎥",
    color: "orange",
    status: "active",
    loomUrl: "#",
  },
  {
    id: "andres-content-sop",
    title: "Content SOP for Clients",
    description: "Standard operating procedure for client content creation",
    type: "document",
    contributor: "andres",
    category: "sales",
    icon: "📄",
    color: "orange",
    status: "active",
    content: "# Content SOP for Clients\n\nContent creation guidelines. To be migrated.",
  },
  {
    id: "andres-rep-submission",
    title: "Rep Submission Form",
    description: "Submit applications for hiring sales representatives",
    type: "submission_form",
    contributor: "andres",
    category: "hiring",
    icon: "👥",
    color: "orange",
    status: "active",
    formType: "rep_hiring",
  },

  // ── Rene's Resources ─────────────────────────────────────────────
  {
    id: "rene-outreach-sop",
    title: "Outreach SOP",
    description: "Complete standard operating procedure for outreach campaigns",
    type: "document",
    contributor: "rene",
    category: "outreach",
    icon: "📡",
    color: "blue",
    status: "active",
    content: "# Outreach SOP\n\nOutreach procedures and best practices. Content to be migrated.",
  },
  {
    id: "rene-booking",
    title: "One-to-One Call Booking",
    description: "Book a personal call with Rene",
    type: "external_link",
    contributor: "rene",
    category: "outreach",
    icon: "📞",
    color: "blue",
    status: "active",
    url: "#",
  },
  {
    id: "rene-crm",
    title: "CRM for Outreach",
    description: "Downloadable CRM template for managing outreach contacts",
    type: "download",
    contributor: "rene",
    category: "outreach",
    icon: "📊",
    color: "blue",
    status: "active",
    url: "#",
  },
  {
    id: "rene-lead-scraper",
    title: "Lead Scraper",
    description: "Automated lead scraping tool (Airtable document)",
    type: "download",
    contributor: "rene",
    category: "outreach",
    icon: "🔍",
    color: "blue",
    status: "in_progress",
    url: "#",
  },
  {
    id: "rene-dm-playbook",
    title: "DM Setting Playbook",
    description: "Complete playbook for setting up and managing DM outreach with video walkthrough",
    type: "loom_video",
    contributor: "rene",
    category: "outreach",
    icon: "💬",
    color: "blue",
    status: "active",
    loomUrl: "#",
  },
  {
    id: "rene-voice-note",
    title: "Voice Note Liquidation System",
    description: "Complete playbook for the voice note liquidation system with Loom walkthroughs",
    type: "course",
    contributor: "rene",
    category: "outreach",
    icon: "🎙️",
    color: "blue",
    status: "active",
    loomUrls: [
      { title: "Part 1: System Overview", url: "#" },
      { title: "Part 2: Setup & Configuration", url: "#" },
      { title: "Part 3: Execution & Optimization", url: "#" },
    ],
  },

  // ── Virgile's Resources ──────────────────────────────────────────
  {
    id: "virgile-copy-reviews",
    title: "Copy Reviews on Demand",
    description: "Submit your copy for expert review and feedback from Virgile",
    type: "ticket_system",
    contributor: "virgile",
    category: "copywriting",
    icon: "🎫",
    color: "purple",
    status: "active",
    ticketType: "copy_review",
  },
  {
    id: "virgile-ai-library",
    title: "AI Prompts & Library",
    description: "Downloadable AI copywriting tools and prompt library",
    type: "download",
    contributor: "virgile",
    category: "copywriting",
    icon: "🤖",
    color: "purple",
    status: "active",
    url: "#",
  },
  {
    id: "virgile-copywriting-course",
    title: "Full Copywriting Course",
    description: "Complete copywriting course — from fundamentals to advanced frameworks",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "🎓",
    color: "purple",
    status: "active",
    loomUrls: [
      // Start Here
      { title: "Start Here", url: "https://www.loom.com/share/0dddfd9ddc9d495393b37cea5edd7d3c", section: "Start Here" },
      // Fundamentals
      { title: "Do This Before Writing ANY Copy", url: "#", section: "Fundamentals" },
      { title: "Brand Sheets", url: "#", section: "Fundamentals" },
      { title: "Setting up the AI Project (Claude.ai)", url: "#", section: "Fundamentals" },
      // VSL Funnels
      { title: "Ideating VSL's", url: "#", section: "VSL Funnels" },
      { title: "Scripting VSL's", url: "#", section: "VSL Funnels" },
      { title: "Iterating VSL's", url: "#", section: "VSL Funnels" },
      { title: "Typeform Questions", url: "#", section: "VSL Funnels" },
      { title: "Post Call Page", url: "#", section: "VSL Funnels" },
      // Email Sequences
      { title: "Welcome Sequence", url: "#", section: "Email Sequences" },
      { title: "Pre Call Emails", url: "#", section: "Email Sequences" },
      { title: "No Show + No Close", url: "#", section: "Email Sequences" },
      { title: "Bonuses", url: "#", section: "Email Sequences" },
      { title: "Nurture Campaign", url: "#", section: "Email Sequences" },
      { title: "Partial Submissions (Typeform)", url: "#", section: "Email Sequences" },
      { title: "Iterating Emails", url: "#", section: "Email Sequences" },
      // Webinars
      { title: "Jason Fladlien Webinar Framework (Strategy)", url: "#", section: "Webinars" },
      { title: "Scripting Webinars", url: "#", section: "Webinars" },
      { title: "Iterating Webinar Scripts", url: "#", section: "Webinars" },
      // IG Story Sequences
      { title: "LIVE: Writing An IG Story Sequence", url: "#", section: "IG Story Sequences" },
      { title: "4 Most Important Story Sequences (for coaching offers)", url: "#", section: "IG Story Sequences" },
    ],
  },
  {
    id: "virgile-coaching-calls",
    title: "Coaching Calls",
    description: "Live coaching calls covering the most important persuasion principles for high-converting copy",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "📞",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Understanding The New Opportunity — 28 Dec 2025", url: "https://www.loom.com/share/4efd831b2657495bae275d37ad1e4a85" },
      { title: "Marketing Angles — 1 Jan 2026", url: "https://www.loom.com/share/d392b11cbe85490b82a355c32762c215" },
      { title: "The Belief Chain — 8 Jan 2026", url: "#" },
      { title: "Writing Scroll Stopping Hooks — 15 Jan 2026", url: "https://www.loom.com/share/60bfd5155379427793467fa7c93034c9" },
      { title: "The Art of Storyselling — 22 Jan 2026", url: "https://www.loom.com/share/34621a1d6bb04809adc6897db5e10345" },
      { title: "Becoming a Master of Pain — 2 Apr 2026", url: "https://www.loom.com/share/44838ad719624712a5e8136c59bab21a" },
      { title: "Copywriting First Principles — 12 Feb 2026", url: "https://www.loom.com/share/faeccbb677364bab8e2e12393859a84d" },
    ],
  },

  // ── Callum's Resources (Tech & Backend) ────────────────────────
  {
    id: "callum-booking",
    title: "Biweekly One-on-One Call",
    description: "Book your biweekly technical call",
    type: "external_link",
    contributor: "callum",
    category: "backend",
    icon: "📅",
    color: "green",
    status: "active",
    url: "#",
  },
  {
    id: "callum-tech-support",
    title: "Ongoing Tech Support",
    description: "Submit technical support requests and track progress",
    type: "ticket_system",
    contributor: "callum",
    category: "backend",
    icon: "🎫",
    color: "green",
    status: "active",
    ticketType: "tech_support",
  },
  {
    id: "callum-sip-architect",
    title: "SIP Architect Bot Hiring & Delegation",
    description: "Playbook template for hiring and delegating with SIP architect bots",
    type: "document",
    contributor: "callum",
    category: "hiring",
    icon: "🏗️",
    color: "green",
    status: "active",
    content: "# SIP Architect Bot Hiring & Delegation\n\nPlaybook template. Content to be added.",
  },
  {
    id: "callum-data-tracking",
    title: "Full Data Tracking System",
    description: "Complete backend data tracking system course with Loom videos",
    type: "course",
    contributor: "callum",
    category: "backend",
    icon: "📈",
    color: "green",
    status: "active",
    loomUrls: [
      { title: "Part 1: Tracking Architecture", url: "#" },
      { title: "Part 2: Implementation", url: "#" },
      { title: "Part 3: Reporting & Dashboards", url: "#" },
    ],
  },
  {
    id: "callum-automations",
    title: "Automations Tracking Training",
    description: "Training on setting up and monitoring automation workflows",
    type: "loom_video",
    contributor: "callum",
    category: "backend",
    icon: "⚡",
    color: "green",
    status: "active",
    loomUrl: "#",
  },
  {
    id: "callum-client-success",
    title: "Client Success Builds & Backend Upselling",
    description: "Strategies for client success builds and backend upselling",
    type: "document",
    contributor: "callum",
    category: "backend",
    icon: "🚀",
    color: "green",
    status: "active",
    content: "# Client Success Builds & Backend Upselling\n\nStrategies and playbooks. Content to be added.",
  },
  {
    id: "callum-tech-walkthroughs",
    title: "Full Tech Walkthroughs & Trainings",
    description: "Comprehensive technical walkthroughs and training sessions",
    type: "course",
    contributor: "callum",
    category: "training",
    icon: "🖥️",
    color: "green",
    status: "active",
    loomUrls: [
      { title: "Getting Started", url: "#" },
      { title: "Advanced Configuration", url: "#" },
      { title: "Troubleshooting Guide", url: "#" },
    ],
  },
  {
    id: "callum-lovable-prompts",
    title: "Lovable Prompts & Support Module",
    description: "Prompts library and support resources for Lovable",
    type: "document",
    contributor: "callum",
    category: "tools",
    icon: "💡",
    color: "green",
    status: "active",
    content: "# Lovable Prompts & Support Module\n\nPrompt library and support resources. Content to be added.",
  },
  {
    id: "callum-microsoft",
    title: "Microsoft Usage in Business Operations",
    description: "Guide to leveraging Microsoft tools for business operations",
    type: "document",
    contributor: "callum",
    category: "tools",
    icon: "🪟",
    color: "green",
    status: "active",
    content: "# Microsoft Usage in Business Operations\n\nGuide and training materials. Content to be added.",
  },
];

// Helper functions
export function getResourcesByContributor(contributor: Contributor): Resource[] {
  return resources.filter((r) => r.contributor === contributor);
}

export function getResourcesByCategory(category: Category): Resource[] {
  return resources.filter((r) => r.category === category);
}

export function getResourceById(id: string): Resource | undefined {
  return resources.find((r) => r.id === id);
}

export const categories: { id: Category; label: string; icon: string }[] = [
  { id: "sales", label: "Sales Management", icon: "💰" },
  { id: "outreach", label: "Outreach & Lead Gen", icon: "📡" },
  { id: "copywriting", label: "Copywriting", icon: "✍️" },
  { id: "backend", label: "Backend & Tech", icon: "⚙️" },
  { id: "funnels", label: "Funnels & Webinars", icon: "🎯" },
  { id: "hiring", label: "Hiring & Delegation", icon: "👥" },
  { id: "training", label: "Training & Courses", icon: "🎓" },
  { id: "tools", label: "Tools & Systems", icon: "🛠️" },
];
