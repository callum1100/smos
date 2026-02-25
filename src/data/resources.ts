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
  // Structure mirrors the Notion "AI Copywriting Library" page exactly
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

  // ── Full Course: AI Copywriting Library ────────────────────────
  // Section: Start Here
  {
    id: "virgile-start-here",
    title: "Start Here",
    description: "Watch this first — your introduction to the AI Copywriting Library",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "🚀",
    color: "purple",
    status: "active",
    loomUrl: "https://www.loom.com/share/0dddfd9ddc9d495393b37cea5edd7d3c",
  },

  // Section: Fundamentals
  {
    id: "virgile-before-writing",
    title: "Do This Before Writing ANY Copy",
    description: "The copywriting foundations checklist — fill this out for every client before writing a single word",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "⚠️",
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
    description: "Non-negotiable brand sheet templates: ICP, New Opportunity, Offer Breakdown + extras (Voice Kit, Experience Vault)",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "™️",
    color: "purple",
    status: "active",
    loomUrl: "https://www.loom.com/share/547f409baf5f4035b9fc1680ac71869b",
    content: `# Brand Sheets

## Non-Negotiables:

---

# ICP Breakdown

**Important: Go into detail**
These are your fans, which is what your brand is going to attract — they have the same characteristics, goals, values and resonate with you.

### Dream Follower
- **Who are they, what's their story, what do they look like?**
- **What are they passionate about?**
- **What are their goals, dreams, and desires?**
- **What are their deepest fears?**
- **What are their struggles?**

*Within your fanbase these are the people that you are selling to and that you want to buy.*

### ICP (Ideal Customer Profile)
- **How much are they making?**
- **What business/service are they providing?**
- **Current situation**
- **Desired outcome**
- **Perceived problems**
- **What makes a customer a bad fit?**
- **What limiting beliefs does your ICP have?**

---

# New Opportunity Breakdown

**Have Client Fill Out (onboarding call / questionnaire):**

**Important: Go into detail**

- **Describe one shocking or highly emotional moment on your journey** (date, place, who was present).
- **Paint a picture of your daily life before chasing today's result** (job, income, routine).
- **State the external goal you were pursuing and the internal fears you felt then.**
- **What specific obstacle — or "wall" — proved your old approach was broken?**
- **How did that failure impact your finances, relationships, or self-worth?** (Give concrete examples.)
- **Where were you when the breakthrough occurred, and who or what triggered it?**
- **In one sentence, describe the New Opportunity you saw.**
- **List the first three actions you took immediately after that aha moment.**
- **What major conflicts did you face after committing to the new path?**
- **What measurable result did you finally achieve?** (Numbers, time saved, etc.)
- **What internal transformation did you experience** (identity shift, confidence boost, outlook)?
- **Skills you've mastered** (rank your top three).
- **Do you already use frameworks, checklists?**
- **In one sentence, what future do you want your audience to experience?** (The Goal)
- **Why does that matter to you personally?**
- **Five years from now, describe the movement you hope to lead in a tweet-length sentence.**
- **What old way(s) of doing things frustrate you most in your niche?**
- **List 3 common myths holding people back.**
- **What tools / programs / gurus are folks currently using that leave them stuck?**
- **From your perspective, why do those vehicles fail?**
- **Single biggest outcome you want your students/clients to achieve** (make it concrete: money, time, health, etc.)
- **Time horizon you believe is realistic for that outcome** (days, weeks, months).
- **Key milestones between day 1 and the outcome** (bullet them).
- **Non-negotiables your program would require from clients** (daily actions, tools, mindset).

---

# Offer Breakdown

- **Who does your business sell to?**
- **Dream Followers / Students**
- **What is your offer?**
- **How much do you make MRR?**
- **What case-studies do you have?**
- **What do you promise your customers?**

---

## Highly-Recommended Extras:

---

# Voice Kit

**Important: Go into detail**

- **Is there anything else that makes your Brand unique?**
- **Biggest win your clients get after working with you?**
- **Which competitor's marketing annoys you and why?**
- **Any brand docs we should know about?** (mission, values, USP)
- **Upload a sales call, webinar excerpt, or podcast clip** (audio/video)
- **Upload a raw loom selfie video (2-3 min) sharing a rant about your market** (Something You Hate)
- **Upload a raw loom selfie video (2-3 min) telling a recent win** (Client Win)
- **Drop links to 3-5 posts or videos that best represent you?**
- **Any words or phrases you never want to use?**
- **List any phrases you say all the time** ("catch-phrases")

### Fill in the blank:
- **Finish the line:** "Everyone in my industry believes ___, but they're wrong because ___."
- **Most gurus will tell you ___, yet the truth is ___.**
- **People think the fastest way to succeed is ___; in reality, it's ___.**
- **The biggest myth about ___ is ___, and here's what actually works: ___.**
- **If you ask my competitors, they'll say ___, but I've proven ___.**
- **Common advice says avoid ___; I do the opposite and ___ because ___.**
- **Everyone obsesses over ___, while the metric that matters is ___.**
- **They claim you need ___ to get results; my clients win with ___.**
- **Industry "best practice" is ___ — I disagree because ___.**
- **The so-called rule in our space is ___, but my experience shows ___.**
- **In one sentence, what do you really do for clients.**

---

# Experience Vault

Use this page to build your personal bank of content ideas pulled from your unique knowledge and story — not trends.

## Why This Matters
You're not here to copy. You're here to clarify. This is how you:
- Build trust with real substance
- Teach from conviction, not theory
- Turn what's in your head into scalable, value-packed content

## Category 1: Experience
These are the defining moments that shaped you.
| Moment | What Happened | What I Learned | How This Can Help My Audience |
**Prompt:** "I remember when I..." -> What changed?

## Category 2: Lessons
Failures and wins that taught you something important.
| Failure or Trial | Why It Failed | What I'd Do Differently | Lesson for My Audience |
**Prompt:** "I used to do ___ — now I do ___."

## Category 3: Frameworks
Repeatable systems or methods you use that work.
| Framework Name | What It Helps Solve | Steps (1-3) | Nickname or Acronym? |
**Prompt:** "Here's my 3-step system for ___."

## Category 4: Principles
The rules you live and build by — what never changes.
| Principle | Why It Matters | How It Shows Up in My Work |
**Prompt:** "If x is what you want then one thing I always live by as a [title] is..."

## Category 5: Beliefs
What you believe about your industry, your clients, and your mission.
| Belief | Why I Believe It | Why It Attracts My Ideal Audience |
**Prompt:** "Most people think ___ — I believe ___."`,
  },
  {
    id: "virgile-ai-setup",
    title: "Setting up the AI Project (Claude.ai)",
    description: "Loom SOP on how to set up your AI copywriting assistant with brand sheets in Claude",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "🤖",
    color: "purple",
    status: "active",
    loomUrl: "https://www.loom.com/share/09db2505a6624cf39a1efa73beec9413",
    content: `# Setting up the AI Project (Claude.ai)

## Loom SOP
Watch the Loom walkthrough above for the full setup process.

## Brand Sheets to Upload to Your AI Project:
Make sure you have these completed and uploaded to your Claude project:
1. **ICP Breakdown** — Your ideal customer profile and dream follower details
2. **Offer Breakdown** — Your offer, pricing, case studies, and promises
3. **New Opportunity Breakdown** — Your origin story, breakthrough, and new opportunity
4. **Client Voice Kit** — Transcripts, brand voice, fill-in-the-blank contrarian statements
5. **Experience Database Vault** — Your personal content bank (experiences, lessons, frameworks, principles, beliefs)`,
  },

  // Section: VSL Funnels
  {
    id: "virgile-vsl-funnels",
    title: "VSL Funnels",
    description: "Ideating, scripting, and iterating VSLs plus Typeform questions",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "🎬",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Ideating VSL's", url: "https://www.loom.com/share/c840eff605e746b8988b03095ca7284b", section: "VSL Funnels" },
      { title: "Scripting VSL's", url: "https://www.loom.com/share/951831a210464bb4b76a1bd7b3a74c92", section: "VSL Funnels" },
      { title: "Iterating VSL's", url: "#", section: "VSL Funnels" },
      { title: "Typeform Questions", url: "#", section: "VSL Funnels" },
    ],
    content: `# VSL Funnels

## Ideating VSL's
### Step 1: VSL Foundations Template Prompt
Fill out the FOUNDATIONS TEMPLATE by feeding your brand sheets into the AI with this prompt:

**Prompt:** Analyze all provided files thoroughly and extract every relevant detail about the offer and the ideal customer profile (ICP). Populate the VSL Foundations Template with specific, detailed, and evidence-based information drawn directly from the source materials.

**VSL Foundations Template sections:**
- The Target Customer
- The Burning Problem
- The Deep Pains
- The Result
- The Deep Desires
- The Intriguing Mechanism
- The Steps
- The Step Foundations
- The Proof
- The Risk-Reversal/Guarantee
- The Urgent/Scarce CTA

### Step 2: VSL Structure Analysis & Template Creation
Use competitor swipe files to extract the psychological structure (not content) of winning VSLs. Analyze: Hook, Credibility, Problem Agitation, Solution Tease, Proof Stack, Objection Handling, Scarcity/Urgency, Close.

---

## Scripting VSL's
### VSL Script Prompt
Feed your foundations template, competitor swipe files, client's Loom transcript, and proof elements into the AI. The script must:
- Follow the exact psychological framework from the template
- Sound like the client's authentic voice
- Never reveal price (high-ticket book-a-call funnel)

### Opt-in Page Headlines
Generate 10 attention-grabbing headlines using multiple headline appeals. Headlines must create a pattern interrupt and get prospects into a powerful emotional state.

---

## Iterating VSL's
### Strategic Copywriting Advisor Prompt
Feed all copy into the advisor for brutal, honest feedback. Every response follows:
1. **THE HARD TRUTH** — Unvarnished diagnosis
2. **THE ACTION PLAN** — Specific frameworks and steps
3. **THE CHALLENGE** — Direct assignment that forces growth

### VSL Iteration Prompt
After getting advisor feedback, implement exact changes while maintaining client's authentic voice.

---

## Typeform Questions
### SOP: Creating Application Questions for Typeform
Every Typeform application follows this 7-step flow:
1. **Commitment / Intent** — "Are you finally ready to start getting [DESIRED RESULT] with [NEW OPPORTUNITY]?"
2. **Current State** — "Have you already started or just getting started?"
3. **Pain Point** — Multiple choice struggles + "Other" open text
4. **Vision (90 Days)** — Tiered achievement levels
5. **Contact Info** — First Name, Email, Phone
6. **Budget / Investment** — Tiered ranges matching pricing
7. **Final Step** — Book your free call CTA

### QA Before Launch:
- Does Q1 start with "Are you finally ready..."?
- Is Q2 framed as "Have you already started or just getting started?"
- Does Q3 include multiple choice struggles + "Other" option?
- Does Q4 ask about achievements in the next 90 days?
- Does Q5 collect only First Name, Email, Phone?
- Is Q6 phrased around "investment" with tiered ranges?
- Does Q7 end with a clear call-to-action to book?`,
  },

  // Section: Post Call Page
  {
    id: "virgile-post-call-page",
    title: "Post Call Page",
    description: "Complete post-call page framework: confirmed video, offer breakdown, breakout videos, and copy",
    type: "loom_video",
    contributor: "virgile",
    category: "copywriting",
    icon: "📱",
    color: "purple",
    status: "active",
    loomUrl: "https://www.loom.com/share/e4cf11b1982741c4b4841e656991386d",
    content: `# Post Call Page

## Why We Have This Page
When someone books a call, they're not sold — they're curious. Your job with the post-call page, emails, and breakout videos is to bridge the gap between curiosity and conviction.

**Mindset:** Assume they're skeptical. Assume they've been burned before. Assume they're looking for reasons to say no.

Your content needs to:
- **Show them proof** — real results, real people, real stories
- **Paint the picture of success** — what their life looks like after working with you
- **Address their fears head-on** — time, money, effort
- **Make it clear why this coach, this program, this offer is the only solution**

## Page Elements:

### 1. Headline
Pattern-interrupt headline that validates their decision to book.

### 2. Call Confirmed Video
Use the high-converting script template — walk them through the 3 key sections on the page (full overview, FAQ, due diligence). End with a reward for showing up (golden ticket / free resource).

### 3. Process Video / Offer Breakdown
Full overview of what it's like to be a client: the opportunity, everything in the offer, plus a supporting document.

### 4. Breakout Videos (FAQ)
6-8 FAQ mini-videos (under 1 minute each) that handle objections:
- Title clearly: "What If It Doesn't Work?" "Why It Costs $XXXX"
- Open with the question directly
- Answer with evidence
- Invite further review
- **Never mention price of the program**

### 5. Copy On Page — Case Studies
Social proof, testimonials, and due diligence section.`,
  },

  // Section: Email Sequences
  {
    id: "virgile-email-sequences",
    title: "Email Sequences",
    description: "Welcome sequences, pre-call emails, no-shows, nurture campaigns, partial submissions, and iteration",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "📩",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Welcome Sequence", url: "https://www.loom.com/share/ccf3fba00c494dd58991da384e4dab75", section: "Email Sequences" },
      { title: "Pre Call Emails", url: "https://www.loom.com/share/0d1c85336f824dda962f1a9f9d1badfa", section: "Email Sequences" },
      { title: "No Show + No Close", url: "https://www.loom.com/share/97795e1538914e58b63157ea73e59e0a", section: "Email Sequences" },
      { title: "Nurture Campaign", url: "#", section: "Bonuses" },
      { title: "Partial Submissions (Typeform)", url: "#", section: "Bonuses" },
      { title: "Iterating Emails", url: "#", section: "Bonuses" },
    ],
    content: `# Email Sequences

## Welcome Sequence (5-Day Soap Opera Sequence)
A story-driven approach that captures new subscribers' attention, builds trust, and nurtures connection. Each day's email leaves readers eager for the next.

**Sequence Structure:**
| Email | Title | Goal | Emotional Tone |
| 1 | Introduction (The Setup) | Curiosity & Trust | Friendly + Intriguing |
| 2 | Low Point (The Fall) | Relatability | Raw + Honest |
| 3 | Epiphany (The Turning Point) | Belief Shift | Reflective + Hopeful |
| 4 | Hidden Benefit (The New Life) | Inspiration | Empowering + FOMO |
| 5 | Sales (The Offer Reveal) | Decision | Direct + Urgent |

---

## Pre Call Emails (3-Day, 9-Email Sequence)
Goal: Take the same talking points from content and emphasize them in written form.

**Day 1: Build Awareness & Set Expectations**
- Email 1: Call confirmation + expectations
- Email 2: General FAQ ("any questions?")
- Email 3: Story of X (testimonial/case study)

**Day 2: Handle Objections & Build Trust**
- Email 4: Address common objection
- Email 5: Provide value through education
- Email 6: Another Story of X (different angle)

**Day 3: Create Urgency & Drive Action**
- Email 7: Cost of inaction
- Email 8: Benefits recap + best solution
- Email 9: Urgency reminder

---

## No Show Campaign (2 emails)
- Email 1: Direct reschedule (100-150 words) — acknowledge without judgment, make rescheduling frictionless
- Email 2: Opportunity cost (200-350 words) — frame what staying stuck costs them

## No Close Campaign (3 emails)
- Email 1 (Day 1): "Proof — It Works For People Like You" — 3-4 diverse client examples
- Email 2 (Day 2): "Risk Reversal — You're Completely Protected" — detailed guarantee breakdown
- Email 3 (Day 3): "Urgency — Decision Time" — deadline, value stack, final CTA

---

## Nurture Campaign (30-Day, 20-22 emails)
**Week 1: Reality Recalibration** — Expanding what feels possible
**Week 2: Mechanism Education** — Understanding the framework
**Week 3: Belief Demolition** — Removing objections before they voice them
**Week 4: Decision Forcing** — Direct call-to-action escalation

CTA Intensity Progression:
- Week 1: Soft, optional
- Week 2: Educational
- Week 3: Invitation
- Week 4: Direct

---

## Partial Submissions / Typeform (10-Day, 15 emails)
**Phase 1 (Days 1-5):** 2 emails/day — Rapid desire rebuilding + objection removal
**Phase 2 (Days 6-10):** 1 email/day — Urgency building + decision forcing

**Critical Rule:** NEVER mention or imply you're tracking their partial application.

---

## Iterating Emails
Feed all copy into the Strategic Copywriting Advisor prompt for brutal feedback following:
1. THE HARD TRUTH
2. THE ACTION PLAN
3. THE CHALLENGE`,
  },

  // Section: Webinars
  {
    id: "virgile-webinars",
    title: "Webinars",
    description: "Jason Fladlien framework, scripting webinars, and iteration with the C.U.B. method",
    type: "course",
    contributor: "virgile",
    category: "copywriting",
    icon: "🎤",
    color: "purple",
    status: "active",
    loomUrls: [
      { title: "Jason Fladlien Webinar Framework (Strategy)", url: "https://www.loom.com/share/e00b4f6ab90843ef9bd13f2dc87bf7f7", section: "Webinars" },
      { title: "Scripting Webinars", url: "https://www.loom.com/share/777d1bc9638248c69b2060e684c6b609", section: "Webinars" },
      { title: "Iterating Webinar Scripts", url: "https://www.loom.com/share/0b106936a5f348e08adb86d10fe39133", section: "Webinars" },
    ],
    content: `# Webinars

## Jason Fladlien Webinar Framework (Strategy)
### Resources:
- Webinar Framework: https://docs.google.com/document/d/12Dp2IFxIE1PyOpn4ECz712mY1uR4bFPFbtSVy-hNYgw/edit
- Webinar Resource List: https://docs.google.com/document/d/1e6WqZpkThLqrNq7Xu55QWZNOO1Kg1_EYB1x8UyeFs1s/edit

## Scripting Webinars
Full webinar script structure (45-60 min):
1. **Hook** (30-60 sec) — Pattern interrupt + powerful question
2. **Pain** (2-3 min) — Describe their struggle better than they can
3. **Tease** (1 min) — Open loops for what they'll learn
4. **Excite + Paradigm** (1-2 min) — Paint the dream, reframe limitations
5. **Position** (3-5 min) — Credibility, origin story, proof stack
6. **Training / Mechanism Reveal** (10-15 min) — Teach 3-5 key concepts
7. **Transition** (2-3 min) — Recap + bridge to offer
8. **Core Offer** (2-3 min) — Present program clearly
9. **Who This Is For** (1-2 min) — Pre-qualify and create exclusivity
10. **Exclusive Webinar Offer** (3-5 min) — Bonus stack
11. **Risk Reversal** (2-3 min) — Guarantee + worst/best case scenarios
12. **Final CTA** (1 min) — Clear instructions to book a call
13. **Q&A** (10-15 min)

Two AI prompt versions available: Evergreen (fully scripted) and Fill-in-the-Blank Template.

## Iterating Webinar Scripts
### The C.U.B. Method
Use the iteration framework embedded in the Loom walkthrough above.`,
  },

  // Section: IG Story Sequences
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
      { title: "LIVE: Writing An IG Story Sequence", url: "https://www.loom.com/share/ada6c81828ca4d9596c3e5a6fb53164c", section: "IG Story Sequences" },
      { title: "4 Most Important Story Sequences (for coaching offers)", url: "https://www.loom.com/share/41e441dbe8a14e1f9b40f320100534a4", section: "IG Story Sequences" },
    ],
    content: `# IG Story Sequences

## LIVE: Writing An IG Story Sequence
Watch the live walkthrough above for the full process.

### IG Story Sequences Prompt
Each story should be 50-75 words maximum with short, punchy sentences (5-12 words). Tell ONE cohesive story from start to finish — each story must directly connect to the next.

**Key requirements:**
- Use uploaded voice kit and transcripts to match client's authentic language
- Conversational tone with natural speech patterns
- Specific numbers, dates, and details for trust-building
- Clear CTA in the final story

---

## 4 Most Important Story Sequences (for coaching offers)
### Miro Board:
https://miro.com/app/board/uXjVGYyF5Wg=/

Watch the Loom above for the full breakdown of the 4 essential story sequence types every coaching offer needs.`,
  },

  // Section: Coaching Calls
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
      { title: "Understanding The New Opportunity", url: "https://www.loom.com/share/4efd831b2657495bae275d37ad1e4a85", section: "Coaching Calls" },
      { title: "Marketing Angles", url: "https://www.loom.com/share/d392b11cbe85490b82a355c32762c215", section: "Coaching Calls" },
      { title: "The Belief Chain", url: "#", section: "Coaching Calls" },
      { title: "Writing Scroll Stopping Hooks", url: "https://www.loom.com/share/60bfd5155379427793467fa7c93034c9", section: "Coaching Calls" },
      { title: "The Art of Storyselling", url: "https://www.loom.com/share/34621a1d6bb04809adc6897db5e10345", section: "Coaching Calls" },
      { title: "Becoming a Master of Pain", url: "https://www.loom.com/share/44838ad719624712a5e8136c59bab21a", section: "Coaching Calls" },
      { title: "Copywriting First Principles", url: "https://www.loom.com/share/faeccbb677364bab8e2e12393859a84d", section: "Coaching Calls" },
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
