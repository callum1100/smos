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
    title: "Copy Reviews",
    description: "Submit your written copy for expert review and feedback from Virgile",
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
    description: "Virgile's copywriting AI prompt library — templates and frameworks for every copy type",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "🤖",
    color: "purple",
    status: "active",
    loomUrls: [
      // Prompts will be added by Virgile — placeholder gallery items
      { title: "Prompt library coming soon — Virgile is compiling", url: "#" },
    ],
  },

  // Copywriting Course — broken into gallery sections
  {
    id: "virgile-start-here",
    title: "Start Here",
    description: "Watch this first — your introduction to the copywriting course",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "🚀",
    color: "purple",
    status: "active",
    loomUrl: "https://www.loom.com/share/0dddfd9ddc9d495393b37cea5edd7d3c",
  },
  {
    id: "virgile-before-writing",
    title: "Do This Before Writing ANY Copy",
    description: "The copywriting foundations checklist — fill this out for every client before writing a single word",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "📋",
    color: "purple",
    status: "active",
    loomUrl: "https://www.loom.com/share/1cdfe225fa93428b80cb86747f19e8c7",
    content: `# Do This Before Writing Any Piece Of Copy
(for your clients)

## 1. Fill out: The Latent Conditions Deck

### What is the awareness level of the person reading this?

### What is the sophistication level of your niche/market?

**X-axis:** Time, amount of competition, quality of buying experiences
**Y-axis:** Level of market sophistication (prospect skepticism)
**Core idea:** As competition increases over time, prospect skepticism rises with it

**Level 1: Birth of Market**
Any claim works. Market is fresh, no competition, no burned prospects.
Example: "Sign 2-3 copywriting clients in 90 days" — Simple claim. No proof needed.

**Level 2: Bigger Claims**
Skepticism has increased slightly. Must make claim BIGGER than competition.
Example: "Sign 5-10 clients in 60 days" — You're competing on size of promise now.

**Level 3: Introduce a Mechanism**
More time passed, more competition, higher skepticism. Now need a LOGICAL REASON why your claim is achievable. Add the "how" — a mechanism.
Example: "Sign 5-10 clients using my two-step outreach method in 60 days"

**Level 4: Better/Upgraded Mechanism**
Must create superior version of existing mechanisms. Use Hormozi's Value Equation to upgrade:
- Increase tangibility of the desired outcome
- Increase perceived likelihood of achievement
- Decrease time delay
- Decrease effort and sacrifice
Example: "Sign 5-10 clients using my automated AI outreach system in 60 days"

**Level 5: Maximum Skepticism**
Final level — skepticism at peak. Prospects no longer believe ANY mechanism. They've been burned too many times.
**Solution: Introduce a Problem Mechanism.** Reveal a NEW, deeper root cause of their problem. Show why all other mechanisms/solutions fail. Position your solution as the ONLY one that addresses this root cause.

## 2. Fill out your "Big Belief" Statement

If I can make people believe that **(my new opportunity)** is key to **(what they desire most)** and is only attainable through **(my specific vehicle)**, then all objections become irrelevant and they will invest.

Watch for more context: Understanding The New Opportunity coaching call

## 3. What is the chain of beliefs you need to take them through?

Watch call recording for more context: The Belief Chain coaching call

## 4. List your niche's trigger words

($10,000/month, financial freedom, etc.)
Watch for more context: Marketing Angles coaching call

## 5. Fill out: VSL Foundations Template`,
  },
  {
    id: "virgile-brand-sheets",
    title: "Brand Sheets",
    description: "ICP, New Opportunity, and Offer Breakdown brand sheet templates",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "📄",
    color: "purple",
    status: "active",
    loomUrl: "https://www.loom.com/share/547f409baf5f4035b9fc1680ac71869b",
    content: `# ICP Brand Sheet

## ICP Breakdown
**Important: Go into detail**
These are your fans, which is what your brand is going to attract — they have the same characteristics, goals, values and resonate with you.

### Dream Follower
- Who are they, what's their story, what do they look like?
- What are they passionate about?
- What are their goals, dreams, and desires?
- What are their deepest fears?
- What are their struggles?

*Within your fanbase these are the people that you are selling to and that you want to buy.*

### ICP (Ideal Customer Profile)
- How much are they making?
- What business/service are they providing?
- Current situation
- Desired outcome
- Perceived problems
- What makes a customer a bad fit?
- What limiting beliefs does your ICP have?

---

# New Opportunity Brand Sheet

## New Opportunity Breakdown
**Have Client Fill Out (onboarding call / questionnaire):**

**Important: Go into detail**

- Describe one shocking or highly emotional moment on your journey (date, place, who was present).
- Paint a picture of your daily life before chasing today's result (job, income, routine).
- State the external goal you were pursuing and the internal fears you felt then.
- What specific obstacle — or "wall" — proved your old approach was broken?
- How did that failure impact your finances, relationships, or self-worth? (Give concrete examples.)
- Where were you when the breakthrough occurred, and who or what triggered it?
- In one sentence, describe the New Opportunity you saw.
- List the first three actions you took immediately after that aha moment.
- What major conflicts did you face after committing to the new path?
- What measurable result did you finally achieve? (Numbers, time saved, etc.)
- What internal transformation did you experience (identity shift, confidence boost, outlook)?
- Skills you've mastered (rank your top three).
- Do you already use frameworks, checklists?
- In one sentence, what future do you want your audience to experience? (The Goal)
- Why does that matter to you personally?
- Five years from now, describe the movement you hope to lead in a tweet-length sentence.
- What old way(s) of doing things frustrate you most in your niche?
- List 3 common myths holding people back.
- What tools / programs / gurus are folks currently using that leave them stuck?
- From your perspective, why do those vehicles fail?
- Single biggest outcome you want your students/clients to achieve (make it concrete: money, time, health, etc.)
- Time horizon you believe is realistic for that outcome (days, weeks, months).
- Key milestones between day 1 and the outcome (bullet them).
- Non-negotiables your program would require from clients (daily actions, tools, mindset).

---

# Offer Breakdown Brand Sheet

## Offer Breakdown
- Who does your business sell to?
- Dream Followers / Students
- What is your offer?
- How much do you make MRR?
- What case-studies do you have?
- What do you promise your customers?

---

# Voice Kit (EXTRA)

Collect these transcripts to build your brand voice:
- Onboarding call transcripts
- Long-form content transcripts
- Short-form content transcripts

---

# Experience Vault (EXTRA)

Use this page to build your personal bank of content ideas pulled from your unique knowledge and story — not trends.

## Why This Matters
You're not here to copy. You're here to clarify. This is how you:
- Build trust with real substance
- Teach from conviction, not theory
- Turn what's in your head into scalable, value-packed content

## Category 1: Experience
These are the defining moments that shaped you.
**Prompt:** "I remember when I…" → What changed?

## Category 2: Lessons
Failures and wins that taught you something important.
**Prompt:** "I used to do ___ — now I do ___."

## Category 3: Frameworks
Repeatable systems or methods you use that work.
**Prompt:** "Here's my 3-step system for ___."

## Category 4: Principles
The rules you live and build by — what never changes.
**Prompt:** "If x is what you want then one thing I always live by as a [title] is…"

## Category 5: Beliefs
What you believe about your industry, your clients, and your mission.
**Prompt:** "Most people think ___ — I believe ___."`,
  },
  {
    id: "virgile-ai-setup",
    title: "Setting up the AI Project (Claude.ai)",
    description: "How to set up your AI copywriting assistant in Claude",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "🤖",
    color: "purple",
    status: "active",
    loomUrl: "#",
  },
  {
    id: "virgile-vsl-funnels",
    title: "VSL Funnels",
    description: "Ideating, scripting, and iterating VSLs plus Typeform and post-call pages",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "🎬",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Ideating VSL's", url: "#" },
      { title: "Scripting VSL's", url: "#" },
      { title: "Iterating VSL's", url: "#" },
      { title: "Typeform Questions", url: "#" },
      { title: "Post Call Page", url: "#" },
    ],
  },
  {
    id: "virgile-email-sequences",
    title: "Email Sequences",
    description: "Welcome sequences, pre-call emails, no-shows, nurture campaigns, and more",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "📧",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Welcome Sequence", url: "#" },
      { title: "Pre Call Emails", url: "#" },
      { title: "No Show + No Close", url: "#" },
      { title: "Bonuses", url: "#" },
      { title: "Nurture Campaign", url: "#" },
      { title: "Partial Submissions (Typeform)", url: "#" },
      { title: "Iterating Emails", url: "#" },
    ],
  },
  {
    id: "virgile-webinars",
    title: "Webinars",
    description: "Jason Fladlien framework, scripting webinars, and iteration strategies",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "🎤",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Jason Fladlien Webinar Framework (Strategy)", url: "#" },
      { title: "Scripting Webinars", url: "#" },
      { title: "Iterating Webinar Scripts", url: "#" },
    ],
  },
  {
    id: "virgile-ig-stories",
    title: "IG Story Sequences",
    description: "Writing and structuring IG story sequences for coaching offers",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "📱",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "LIVE: Writing An IG Story Sequence", url: "#" },
      { title: "4 Most Important Story Sequences (for coaching offers)", url: "#" },
    ],
  },
  {
    id: "virgile-coaching-calls",
    title: "Coaching Calls",
    description: "Live coaching calls on the most important persuasion principles for high-converting copy",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "📞",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Understanding The New Opportunity", url: "https://www.loom.com/share/4efd831b2657495bae275d37ad1e4a85" },
      { title: "Marketing Angles", url: "https://www.loom.com/share/d392b11cbe85490b82a355c32762c215" },
      { title: "The Belief Chain", url: "#" },
      { title: "Writing Scroll Stopping Hooks", url: "https://www.loom.com/share/60bfd5155379427793467fa7c93034c9" },
      { title: "The Art of Storyselling", url: "https://www.loom.com/share/34621a1d6bb04809adc6897db5e10345" },
      { title: "Becoming a Master of Pain", url: "https://www.loom.com/share/44838ad719624712a5e8136c59bab21a" },
      { title: "Copywriting First Principles", url: "https://www.loom.com/share/faeccbb677364bab8e2e12393859a84d" },
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
