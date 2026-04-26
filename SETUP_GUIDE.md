# Neurodivergent Nest — Complete Setup & Revenue Guide

Your site is fully built and builds successfully. This guide walks you through every step to go live, earn money, and run autonomously.

**Estimated one-time setup time: 2-3 hours**
**Estimated weekly time after setup: 15-30 minutes**

---

## PHASE 1: GO LIVE (Do This Today)

### Step 1: Create a GitHub Account and Push the Site
1. Go to github.com and create a free account
2. Create a new repository named `neurodivergent-nest` (set to Public)
3. Open Terminal/PowerShell and run:
```bash
cd C:\Users\hella\neurodivergent-nest
git remote add origin https://github.com/YOUR_USERNAME/neurodivergent-nest.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (Free — Takes 5 Minutes)
1. Go to vercel.com and sign up with your GitHub account
2. Click "New Project" → Import your `neurodivergent-nest` repository
3. Leave all settings as default — Vercel auto-detects Astro
4. Click Deploy

**Your site is now live at: `neurodivergent-nest.vercel.app`**

Every time a new blog post is committed to GitHub, Vercel automatically redeploys the site within 2 minutes. Fully automatic.

### Step 3: Custom Domain (Optional, ~£10/year)
When you're ready to invest a small amount, buy a domain:
- **Namecheap** or **Porkbun** — search for `neurodivergent-nest.com` or similar
- In Vercel: Settings → Domains → Add your domain
- Point your domain's DNS to Vercel (they give you exact instructions)

---

## PHASE 2: BUILD THE AUDIENCE MACHINE

### Step 4: Set Up Pinterest (Priority #1 for Traffic)
Pinterest drives more organic traffic to content sites than any other free platform. ADHD and neurodivergent content performs extremely well here.

1. Create a **Pinterest Business Account** (free) at pinterest.com/business
2. Profile name: "Neurodivergent Nest"
3. Bio: "Practical systems for ADHD and neurodivergent adults. No judgment, just tools that work."
4. Website: your Vercel URL
5. Enable **Rich Pins** (follow Pinterest's instructions — it takes 10 minutes)
6. Create boards:
   - ADHD Productivity Tips
   - ADHD Organization Systems
   - Neurodivergent Mental Health
   - ADHD Money Management
   - ADHD Work & Career
   - ADHD Lifestyle

**Creating pins:**
The social-queue.md file in your agents/ folder has ready-to-post Pinterest captions for every blog post. For pin images, use **Canva** (free at canva.com):
- Search "Pinterest pin" in templates
- Use the brand colours: Purple #7C3AED, Teal #0D9488
- Add the article title as the headline
- URL: neurodivergent-nest.vercel.app

**Target: 3-5 pins per week**. Pinterest rewards consistency heavily.

### Step 5: Set Up Mailchimp (Free Email List)
Email is your highest-value asset — own your audience.

1. Sign up at mailchimp.com (free up to 500 subscribers)
2. Create a new Audience called "Neurodivergent Nest subscribers"
3. Go to: Audience → Signup forms → Embedded forms
4. Copy your form action URL (looks like `https://xxxxxxxx.us1.list-manage.com/subscribe/post`)
5. Replace the form action URL in these files:
   - `src/layouts/BlogLayout.astro` (line ~75)
   - `src/pages/index.astro` (line ~130)
   - `src/pages/newsletter.astro` (line ~33)
6. Commit and push — Vercel redeploys automatically

**Welcome email sequence (write these in Mailchimp → Automations):**

**Email 1 — Immediate:**
Subject: "Welcome to Neurodivergent Nest 🧠"
"You made it. Welcome to the community...
Here's your first system: [link to body doubling post]
Reply and tell me — what's your biggest daily ADHD challenge? I read every reply."

**Email 2 — Day 3:**
Subject: "The one thing that changed how I see ADHD"
Share the RSD article. Frame it as something that shifted your perspective.

**Email 3 — Day 7:**
Subject: "Your starter toolkit (everything we recommend)"
Link to the /resources page.

### Step 6: Set Up a Facebook Page (Free Auto-Posting)
Facebook Pages allow free API-based posting, meaning your weekly agent can post automatically.

1. Create a Facebook Page called "Neurodivergent Nest"
2. Go to developers.facebook.com → Create App → Business
3. Add "Pages API" product
4. Generate a long-lived Page Access Token
5. Save the token — the agent can use it to post automatically

Your social-queue.md has ready-to-post Facebook captions weekly.

---

## PHASE 3: TURN ON REVENUE

### Step 7: Amazon Associates (Start Earning Week 1)
1. Sign up at affiliate-program.amazon.co.uk (UK) or affiliate-program.amazon.com (US)
2. Once approved, generate affiliate links for every product mentioned in the /resources page
3. Update the `link: '#'` placeholders in `src/pages/resources.astro` with your affiliate links
4. Add your Amazon affiliate disclosure (already written in /disclaimer page)

**Products already recommended on your site:**
- Time Timer (Amazon — ~£30, ADHD bestseller)
- Rocketbook notebook
- Fidget tools and sensory items
- Noise-cancelling headphones
- Books (Driven to Distraction, Smart but Stuck, etc.)

**Commission rates:** 1-9% depending on category. Low per-sale, but compounds with traffic.

### Step 8: Software Affiliate Programs (Higher Commission)
These pay 20-40% recurring commission — far better than Amazon.

| Company | Commission | How to Join |
|---------|-----------|-------------|
| Focusmate | Contact them directly | focusmate.com |
| Notion | Check notion.so/affiliates | |
| YNAB | ~30% | ynab.com/affiliates |
| NordVPN / Surfshark | Up to 40% | their affiliate portals |
| Canva | Up to $36/referral | canva.com/affiliates |

Update affiliate links on your /resources page as you get approved.

### Step 9: Digital Products (Month 2-3)
Create these in Canva (free) and sell via Gumroad (free, takes 10% cut):

**Product 1: "ADHD Starter System" Notion Template Pack — £15-25**
- Weekly review template
- Task board template
- Budget tracker template
- Morning routine checklist

**Product 2: "ADHD Morning Routine Workbook" PDF — £7-12**
Build from the morning routines blog post content

**Product 3: "Neurodivergent Home Systems Bundle" — £20-35**
Meal planning templates, cleaning system, declutter guide

Setup:
1. Create account at gumroad.com (free)
2. Upload your PDF/Notion export
3. Set price
4. Add product links to relevant blog posts and resources page

---

## PHASE 4: THE AUTONOMOUS CONTENT SYSTEM

### How It Works
Each Monday at 9am, the Claude Code weekly agent automatically:
1. Picks an uncovered topic from a rotation list
2. Writes a 1000+ word SEO blog post
3. Commits it to GitHub → Vercel auto-deploys
4. Generates Pinterest and social captions for the week

**Your weekly job (15-30 min):**
- Copy 3-5 Pinterest captions from `agents/social-queue.md` into Pinterest as pins
- Review the new blog post (optional — you can trust the agent)
- Check Mailchimp subscriber count and open rates

### Keeping the Agent Running
The weekly content agent is currently scheduled in your Claude Code session. To keep it running:

1. Keep Claude Code open on Monday mornings (it runs at 9am)
2. OR: Open Claude Code each Monday and say "run the weekly content agent for Neurodivergent Nest"
3. OR: Use `/schedule` command in Claude Code to set up a persistent cloud agent (recommended for full autonomy)

### Re-activating After a Break
If you need to pause and restart, just tell Claude Code:
"Resume the Neurodivergent Nest weekly content agent. Instructions are in C:\Users\hella\neurodivergent-nest\agents\weekly-content-agent.md"

---

## REVENUE TIMELINE (REALISTIC)

| Month | Milestone | Est. Monthly Revenue |
|-------|-----------|---------------------|
| 1 | Site live, 8 posts, Pinterest started | £0-20 (affiliate clicks) |
| 2 | 16 posts, 100+ Pinterest followers | £20-80 |
| 3 | 24 posts, email list 50+ subs | £50-200 |
| 4 | First digital product live | £100-400 |
| 6 | 500+ monthly readers, 200+ subs | £200-800 |
| 12 | 5K+ monthly readers, consistent content | £500-2000+ |

These are conservative estimates. Pinterest traffic for this niche can spike quickly with viral pins — it's not uncommon for one pin to send 5,000+ visitors in a week.

---

## QUICK REFERENCE LINKS

- **Your site files:** `C:\Users\hella\neurodivergent-nest\`
- **Agent instructions:** `agents/weekly-content-agent.md`
- **Social content queue:** `agents/social-queue.md`
- **Blog posts folder:** `src/content/blog/`
- **Resources page (add affiliate links here):** `src/pages/resources.astro`

---

## ACCOUNTS TO CREATE (IN ORDER)

- [ ] GitHub — github.com
- [ ] Vercel — vercel.com (connect GitHub)
- [ ] Pinterest Business — pinterest.com/business
- [ ] Mailchimp — mailchimp.com
- [ ] Amazon Associates — affiliate-program.amazon.co.uk
- [ ] Canva — canva.com
- [ ] Gumroad — gumroad.com
- [ ] Facebook Page (for social posting)

All free. Zero investment required.

---

## NEED HELP?

Open Claude Code and say:
- "Add a new blog post about [topic] to Neurodivergent Nest"
- "Update the affiliate links on the resources page"
- "Generate 10 Pinterest pins for this week's posts"
- "Write a welcome email sequence for Mailchimp"
- "Help me create an ADHD Notion template to sell on Gumroad"

Your AI team is always ready.
