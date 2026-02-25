export type ResourceType =
  | "loom_video"
  | "external_link"
  | "document"
  | "download"
  | "ticket_system"
  | "submission_form"
  | "course";

export type Contributor = "andres" | "rene" | "virgile" | "backend";

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
  // Type-specific fields
  url?: string; // For external_link, download
  loomUrl?: string; // For loom_video
  loomUrls?: { title: string; url: string }[]; // For course (multiple videos)
  content?: string; // For document (markdown content)
  ticketType?: string; // For ticket_system
  formType?: string; // For submission_form
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
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
  {
    id: "rene",
    name: "Rene",
    role: "Outreach & Lead Gen",
    icon: "📡",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    id: "virgile",
    name: "Virgile",
    role: "Copywriting",
    icon: "✍️",
    color: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    id: "backend",
    name: "Tech & Backend",
    role: "Systems & Automation",
    icon: "⚙️",
    color: "bg-green-50 border-green-200 text-green-700",
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
    url: "#", // Replace with actual calendar link
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
    content:
      "# Custom Roadmap\n\nThis roadmap will be customized for your specific needs. Content coming soon.",
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
    loomUrl: "#", // Replace with actual Loom URL
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
    loomUrl: "#", // Replace with actual Loom URL
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
    loomUrl: "#", // Replace with actual Loom URL
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
    url: "#", // Replace with actual booking link
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
    url: "#", // Replace with Airtable/Google Sheet link
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
    url: "#", // Replace with Airtable link
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
    loomUrl: "#", // Replace with actual Loom URL
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
    description: "Submit your copy for expert review and feedback",
    type: "ticket_system",
    contributor: "virgile",
    category: "copywriting",
    icon: "🎫",
    color: "purple",
    status: "active",
    ticketType: "copy_review",
  },
  {
    id: "virgile-copywriting-course",
    title: "Full Copywriting Course",
    description: "Complete copywriting course with Loom video lessons",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "🎓",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Module 1: Copywriting Fundamentals", url: "#" },
      { title: "Module 2: Headlines & Hooks", url: "#" },
      { title: "Module 3: Sales Pages", url: "#" },
      { title: "Module 4: Email Sequences", url: "#" },
      { title: "Module 5: Ad Copy", url: "#" },
    ],
  },
  {
    id: "virgile-ai-library",
    title: "AI Copper & Library",
    description: "Downloadable AI copywriting tools and prompt library",
    type: "download",
    contributor: "virgile",
    category: "copywriting",
    icon: "🤖",
    color: "purple",
    status: "active",
    url: "#", // Replace with download link
  },

  // ── Backend/Tech Resources ───────────────────────────────────────
  {
    id: "backend-booking",
    title: "Biweekly One-on-One Call",
    description: "Book your biweekly technical call",
    type: "external_link",
    contributor: "backend",
    category: "backend",
    icon: "📅",
    color: "green",
    status: "active",
    url: "#", // Replace with actual booking link
  },
  {
    id: "backend-tech-support",
    title: "Ongoing Tech Support",
    description: "Submit technical support requests and track progress",
    type: "ticket_system",
    contributor: "backend",
    category: "backend",
    icon: "🎫",
    color: "green",
    status: "active",
    ticketType: "tech_support",
  },
  {
    id: "backend-sip-architect",
    title: "SIP Architect Bot Hiring & Delegation",
    description: "Playbook template for hiring and delegating with SIP architect bots",
    type: "document",
    contributor: "backend",
    category: "hiring",
    icon: "🏗️",
    color: "green",
    status: "active",
    content: "# SIP Architect Bot Hiring & Delegation\n\nPlaybook template. Content to be added.",
  },
  {
    id: "backend-data-tracking",
    title: "Full Data Tracking System",
    description: "Complete backend data tracking system course with Loom videos",
    type: "course",
    contributor: "backend",
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
    id: "backend-automations",
    title: "Automations Tracking Training",
    description: "Training on setting up and monitoring automation workflows",
    type: "loom_video",
    contributor: "backend",
    category: "backend",
    icon: "⚡",
    color: "green",
    status: "active",
    loomUrl: "#", // Replace with actual Loom URL
  },
  {
    id: "backend-client-success",
    title: "Client Success Builds & Backend Upselling",
    description: "Strategies for client success builds and backend upselling",
    type: "document",
    contributor: "backend",
    category: "backend",
    icon: "🚀",
    color: "green",
    status: "active",
    content: "# Client Success Builds & Backend Upselling\n\nStrategies and playbooks. Content to be added.",
  },
  {
    id: "backend-tech-walkthroughs",
    title: "Full Tech Walkthroughs & Trainings",
    description: "Comprehensive technical walkthroughs and training sessions",
    type: "course",
    contributor: "backend",
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
    id: "backend-lovable-prompts",
    title: "Lovable Prompts & Support Module",
    description: "Prompts library and support resources for Lovable",
    type: "document",
    contributor: "backend",
    category: "tools",
    icon: "💡",
    color: "green",
    status: "active",
    content: "# Lovable Prompts & Support Module\n\nPrompt library and support resources. Content to be added.",
  },
  {
    id: "backend-microsoft",
    title: "Microsoft Usage in Business Operations",
    description: "Guide to leveraging Microsoft tools for business operations",
    type: "document",
    contributor: "backend",
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
