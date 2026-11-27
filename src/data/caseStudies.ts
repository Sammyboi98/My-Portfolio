const img = (name: string) => `/images/${name}.webp`

export type Item = { title: string; text: string; tags?: string }
export type Shot = { src: string; caption: string }

export type CaseStudy = {
  slug: string
  card: { category: string; title: string; description: string; image: string }
  eyebrow: string
  title: string
  highlight: string
  intro: string
  meta: { label: string; value: string }[]
  cover: { src: string; transparent?: boolean }
  overview: { heading: string; paragraphs: string[] }
  glance: { eyebrow: string; stats: { value: string; label: string }[]; source: string }
  problem: { heading: string; points: Item[] }
  users: { heading: string; items: Item[] }
  role: { heading: string; intro: string; steps: Item[] }
  decisions: Item[]
  product: { heading: string; hero: Shot; grid: Shot[] }
  magnet?: {
    eyebrow: string
    heading: string
    intro: string
    image: string
    subheading: string
    subtext: string
    bullets: string[]
    stats: { value: string; label: string }[]
    source: string
  }
  credit?: {
    eyebrow: string
    badge: string
    heading: string
    intro: string
    screens: Shot[]
    points: Item[]
    note: string
  }
  highlights?: { eyebrow: string; heading: string; items: Item[]; source: string }
  testimonial?: { quote: string; name: string; role: string; avatar: string }
  learnings: Item[]
  next: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'certracker',
    card: {
      category: 'Case study · Healthtech × AI',
      title: 'CerTracker: ending credential chaos for nurses',
      description: 'An AI-powered credential wallet, compliance dashboard and Magnet readiness platform for healthcare teams.',
      image: img('certracker-website'),
    },
    eyebrow: 'Case study · Healthtech × AI',
    title: 'CerTracker: ending credential chaos for nurses.',
    highlight: 'credential chaos',
    intro:
      'Designing an AI-powered credential wallet for nurses, and a real-time compliance dashboard for the leaders who manage them.',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Product', value: 'Wallet app · Manager dashboard · MagnetReady · Website' },
      { label: 'Industry', value: 'Healthtech · United States' },
      { label: 'Timeline', value: '2+ years' },
    ],
    cover: { src: img('certracker-website') },
    overview: {
      heading: 'One home for every license, certification and CEU.',
      paragraphs: [
        'CerTracker is a nurse-founded, AI-powered credential and compliance platform. Clinicians keep their licenses, certifications and CE credits in a secure digital wallet, while hospitals, staffing agencies, nursing schools and associations get a real-time view of workforce compliance.',
        'I designed across the platform: the CerTracker Wallet app for clinicians, the CerTracker Manager dashboard for organisations, MagnetReady for hospitals pursuing Magnet Recognition, and the marketing website that brings it all together.',
      ],
    },
    glance: {
      eyebrow: 'Outcomes for teams using CerTracker',
      stats: [
        { value: '70%', label: 'Less admin workload' },
        { value: '50%', label: 'Faster onboarding: days, not weeks' },
        { value: '10+ hrs', label: 'Saved weekly per manager' },
        { value: '100%', label: 'Audit-ready compliance' },
      ],
      source: 'Figures reported by CerTracker on certracker.com.',
    },
    problem: {
      heading: 'Compliance was quietly burning nurses out.',
      points: [
        { title: 'Scattered paperwork', text: 'Licenses, CEUs and certifications like BLS and ACLS lived across emails, folders and employer portals, with renewal dates easy to miss.' },
        { title: 'Upload, re-upload, repeat', text: 'Travel and agency nurses had to share the same documents again and again with every new facility they worked with.' },
        { title: 'Manual chasing for leaders', text: 'Managers tracked expirations by hand and chased staff for documents, which made audits slow and stressful.' },
      ],
    },
    users: {
      heading: 'Designing for both sides of compliance',
      items: [
        { title: 'Nurses & clinicians', text: 'A fast, trustworthy way to store, renew and share credentials from their phone, wherever their career takes them.', tags: 'CerTracker Wallet · iOS & Android' },
        { title: 'Compliance & nurse leaders', text: 'Instant visibility into who’s complete, missing or expiring, without the manual chase before every audit.', tags: 'CerTracker Manager · Web' },
        { title: 'Schools, agencies & associations', text: 'Quick onboarding for students, travel nurses and members across many facilities.', tags: 'Multi-facility · Onboarding' },
      ],
    },
    role: {
      heading: 'From nurse pain points to an AI-first product',
      intro: 'I worked closely with the nurse founders and engineering team across discovery, design and delivery, for both the clinician and organisation sides of the product.',
      steps: [
        { title: 'Discover', text: 'Conversations with nurses and nurse leaders to map the credential journey end to end and find where it broke down.' },
        { title: 'Define', text: 'Turned insights into user flows, information architecture and clear goals for the wallet and the dashboard.' },
        { title: 'Design', text: 'Wireframes to high-fidelity UI and prototypes, built on one shared component system for mobile and web.' },
        { title: 'Validate & ship', text: 'Tested with real users, iterated with the founders and engineers, and supported every release through handoff.' },
      ],
    },
    decisions: [
      { title: 'Upload once, sync anywhere', text: 'Nurses upload a credential once, sync their wallet with any facility and disconnect when they move on. The clinician owns their data, not the employer.' },
      { title: 'AI does the work, people approve', text: 'AI extracts and categorises key details from every upload. I designed clear review states so managers can verify and approve in one click, and always see what the AI filled in.' },
      { title: 'Compliance at a glance', text: 'A real-time dashboard shows what’s complete, missing or needs action, with one-click, audit-ready reports when the auditors arrive.' },
      { title: 'Proactive, not reactive', text: 'Smart renewal reminders nudge nurses before deadlines, so nobody finds out about an expired certification at audit time.' },
    ],
    product: {
      heading: 'Wallet, Manager and web, working as one system',
      hero: { src: img('certracker-manager'), caption: 'CerTracker Manager: real-time compliance dashboard for healthcare organisations.' },
      grid: [
        { src: img('certracker-wallet'), caption: 'CerTracker Wallet: the clinician app on iOS and Android.' },
        { src: img('certracker-web'), caption: 'CerTracker web app: credentials and compliance in the browser.' },
      ],
    },
    magnet: {
      eyebrow: 'Platform expansion · MagnetReady',
      heading: 'From everyday compliance to Magnet excellence',
      intro: 'MagnetReady by CerTracker supports hospitals and health systems pursuing ANCC Magnet Recognition®, redesignation and Pathway to Excellence®, combining expert advisory with a platform built on CerTracker.',
      image: img('magnetready'),
      subheading: 'Designing the Magnet Program Director dashboard',
      subtext: 'Magnet journeys often take hospitals 2–4 years. I designed a single command centre where program directors run the whole journey: standards, evidence, people and deadlines.',
      bullets: [
        'Live progress across every Magnet standard and Source of Evidence',
        'Evidence upload, review and organisation in one place',
        'A milestone tracker from gap assessment to designation celebration',
        'Tasks, teams and roles for leadership accountability',
        'AI-assisted project planning from the quick actions',
      ],
      stats: [
        { value: '2–4 yrs', label: 'Typical preparation for initial Magnet designation' },
        { value: '4 phases', label: 'Discovery, strategy, implementation and sustainability' },
      ],
      source: 'Source: magnetready.com. Magnet Recognition Program® and Pathway to Excellence® are registered trademarks of the American Nurses Credentialing Center.',
    },
    highlights: {
      eyebrow: 'Recognition',
      heading: 'Milestones along the way',
      items: [
        { title: 'Best Nursing AI Tool 2026', text: 'Nurse.org Best of Nursing Awards, voted by the nursing community.' },
        { title: 'Nurse Innovator Showcase', text: 'Selected to present at the first AONL Nurse Innovator Showcase, Boston, 2025.' },
        { title: '$25K non-dilutive award', text: 'Accepted into the W.E. Build Accelerator to scale the AI compliance platform, 2025.' },
        { title: 'Top 5 startup', text: 'Selected for the 2025 Advancing Brain Health Innovation Challenge by MATTER.' },
        { title: 'Oklahoma Nurses Association', text: 'Official partnership to streamline documentation and license workflows for nurses.' },
        { title: 'In the news', text: 'Featured on FOX23 News and Nurse.org for tackling a hidden driver of nurse burnout.' },
      ],
      source: 'Milestones achieved by the CerTracker team, from public announcements.',
    },
    testimonial: {
      quote: 'Samson is an incredibly intuitive designer! Having worked with him over the last two years, I can confidently say his UX/UI expertise, design thinking, and user research skills are top-notch.',
      name: 'Shadrach Igwe',
      role: 'Co-founder, CerTracker',
      avatar: img('avatar-shadrach'),
    },
    learnings: [
      { title: 'Trust is the real AI feature', text: 'Showing what the AI extracted, and making it easy to check and correct, mattered as much as the automation itself.' },
      { title: 'Two users, one system', text: 'A shared design system kept the wallet and dashboard consistent, so improvements shipped on both sides together.' },
      { title: 'Domain experts are the best partners', text: 'Designing alongside nurse founders kept every decision grounded in real clinical workflows.' },
    ],
    next: 'paypetal',
  },
  {
    slug: 'paypetal',
    card: {
      category: 'Case study · Fintech',
      title: 'PayPetal: payment confidence for every African',
      description: 'A trust-first payments app built around escrow, with merchant and admin tools behind it.',
      image: img('paypetal-app'),
    },
    eyebrow: 'Case study · Fintech',
    title: 'PayPetal: payment confidence for every African.',
    highlight: 'payment confidence',
    intro: 'Designing a trust-first payments app built around escrow and buy-now-pay-later credit, plus the merchant and admin tools that power it.',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Product', value: 'Mobile app · Credit (BNPL) · Merchant & admin dashboards · Website' },
      { label: 'Industry', value: 'Fintech · Nigeria' },
      { label: 'Scope', value: 'End-to-end product design' },
    ],
    cover: { src: img('paypetal-hero'), transparent: true },
    overview: {
      heading: 'All your payments in one place, with trust built in.',
      paragraphs: [
        'PayPetal is a Nigerian digital payments platform for individuals and businesses. People can send and receive money, pay bills, buy airtime, data and gift cards, and earn rewards. TrustVault, its escrow system, holds funds until both sides are satisfied, and PayPetal Credit lets people buy now and pay later at partner stores.',
        'I designed the consumer app experience, the merchant and admin dashboards that run the business, and the website that introduces PayPetal to new customers.',
      ],
    },
    glance: {
      eyebrow: 'PayPetal at a glance',
      stats: [
        { value: '1,000+', label: 'Customers' },
        { value: 'iOS + Android', label: 'Live on the App Store and Google Play' },
        { value: '9PSB · CoralPay', label: 'Licensed banking & payment partners' },
        { value: 'NDPA 2023', label: 'Data protection compliant' },
      ],
      source: 'From PayPetal’s public website, paypetal.africa.',
    },
    problem: {
      heading: 'Online, nobody wants to pay first.',
      points: [
        { title: 'The trust gap', text: 'Buyers worry about paying before delivery, and sellers worry about delivering before payment, especially in social and online commerce.' },
        { title: 'Too many apps for everyday money', text: 'Transfers, bills, airtime and gift cards were spread across different apps, each with its own friction.' },
        { title: 'No fair way out of a dispute', text: 'When something went wrong, there was rarely a simple way to pause, track or resolve a payment.' },
      ],
    },
    users: {
      heading: 'One platform, three very different users',
      items: [
        { title: 'Everyday consumers', text: 'Send money, pay bills and shop online with confidence that their money is protected.', tags: 'Wallet · Bills · Gift cards' },
        { title: 'Freelancers & creators', text: 'Get paid securely and on time, with milestone payments that protect both sides of a deal.', tags: 'TrustVault · Milestones' },
        { title: 'Merchants & businesses', text: 'Accept wallet and NFC payments, reduce disputes and understand their sales.', tags: 'Merchant dashboard · NFC' },
      ],
    },
    role: {
      heading: 'Designing trust into every tap',
      intro: 'I owned product design across consumer, merchant and internal tools, working with the founders and engineers from early concepts to shipped releases.',
      steps: [
        { title: 'Discover', text: 'Mapped how people pay and get paid online today, and where fear of fraud stops transactions from happening.' },
        { title: 'Define', text: 'Shaped the escrow model into simple flows: create, fund, confirm, release, or dispute.' },
        { title: 'Design', text: 'High-fidelity mobile UI, merchant and admin dashboards, and a scalable component system.' },
        { title: 'Ship & iterate', text: 'Partnered with engineering through launch on both app stores, then refined flows with real usage.' },
      ],
    },
    decisions: [
      { title: 'Make trust visible', text: 'TrustVault holds funds until conditions are met. I designed clear status states so both sides always know where the money is, in full or by milestone.' },
      { title: 'Fair by design', text: 'The sender, receiver or both can cover the fee, and payments can be paused, tracked, disputed and resolved without leaving the app.' },
      { title: 'One wallet for everyday life', text: 'Transfers, bills, airtime, data, gift cards and rewards live on one simple home screen, so people need fewer apps.' },
      { title: 'Security without friction', text: 'Fingerprint and Face ID, encryption and fraud monitoring protect every transaction without slowing people down.' },
    ],
    product: {
      heading: 'Consumer, merchant and admin, designed as one ecosystem',
      hero: { src: img('paypetal-merchant'), caption: 'Merchant dashboard: sales, payouts and customers at a glance.' },
      grid: [
        { src: img('paypetal-trustvault'), caption: 'TrustVault: escrow balance, how it works and disputes in one place.' },
        { src: img('paypetal-cards'), caption: 'Cards: linked cards and recent transactions at a glance.' },
        { src: img('paypetal-admin'), caption: 'Admin dashboard: users, transactions and payments in one place for the operations team.' },
        { src: img('paypetal-website'), caption: 'Marketing website: TrustVault escrow, smart wallet, and virtual USD card and NFC payments on the way.' },
      ],
    },
    credit: {
      eyebrow: 'PayPetal Credit · Buy now, pay later',
      badge: 'In development',
      heading: 'Credit that feels as safe as cash',
      intro: 'PayPetal Credit lets people shop now at partner stores like Bokku Mart and Justrite, then spread the cost over a few weeks. My challenge was to make borrowing feel transparent and responsible, never like a trap.',
      screens: [
        { src: img('credit-1'), caption: 'Credit limit and upcoming repayments on home' },
        { src: img('credit-2'), caption: 'Every cost shown before you commit' },
        { src: img('credit-3'), caption: 'A clear repayment schedule, with pay now or extend' },
        { src: img('credit-4'), caption: 'Extend once per payment, for a fixed fee' },
      ],
      points: [
        { title: 'No surprises at checkout', text: 'Before confirming, people see the purchase amount, credit fee, first payment and repayment period, for example ₦40,000 over 6 weeks in 3 payments.' },
        { title: 'A quarter down, the rest over time', text: 'A quarter of the purchase comes from the wallet as the first repayment. It keeps borrowing responsible and builds trust on both sides.' },
        { title: 'Repayments you can see and act on', text: 'A schedule with paid, due-soon and overdue states, filters for 7 and 14 days, and one-tap Pay now or Make full payment.' },
        { title: 'Flexibility with guardrails', text: 'If life happens, a payment can be extended by one or two weeks for a clear, fixed fee, once per payment.' },
      ],
      note: 'Screens from the PayPetal Credit design. Amounts are sample data. Partner stores shown as designed and subject to launch.',
    },
    highlights: {
      eyebrow: 'Traction',
      heading: 'Live, regulated and growing',
      items: [
        { title: 'Live on both app stores', text: 'Available to download on the Apple App Store and Google Play.' },
        { title: '1,000+ customers', text: 'Individuals and businesses paying and getting paid with PayPetal.' },
        { title: 'Licensed partners', text: 'Powered by licensed payment service bank 9PSB, with CoralPay as a payments partner.' },
        { title: 'TrustVault escrow', text: 'Full and milestone payments with pause, track, dispute and resolve built in.' },
        { title: 'NDPC certified', text: 'Compliant with the Nigeria Data Protection Act 2023.' },
        { title: 'On the roadmap', text: 'PayPetal Credit (buy now, pay later), NFC tap-to-pay, a virtual USD card and cross-border transfers, designed to scale in.' },
      ],
      source: 'From PayPetal’s public website.',
    },
    testimonial: {
      quote: 'Working with Samson elevated our entire product experience. His designs are not just beautiful—they’re strategic, user-focused, and aligned with our business goals.',
      name: 'Ilemobayo Samson',
      role: 'CTO, PayPetal',
      avatar: img('avatar-ilemobayo'),
    },
    learnings: [
      { title: 'Trust is a UX problem', text: 'People trusted the product once they could see exactly where their money was at every step.' },
      { title: 'Back-office UX matters', text: 'Clear merchant and admin tools keep disputes, support load and operations costs down.' },
      { title: 'Design for what ships next', text: 'With NFC, USD cards and cross-border on the roadmap, the system had to grow without a redesign.' },
    ],
    next: 'aib-express',
  },
  {
    slug: 'aib-express',
    card: {
      category: 'Case study · Logistics',
      title: 'AIB Express: every shipment, visible end to end',
      description: 'Booking, tracking and operations for a Nigerian logistics company: website, customer portal and admin dashboard.',
      image: img('aib-website'),
    },
    eyebrow: 'Case study · Logistics',
    title: 'AIB Express: every shipment, visible end to end.',
    highlight: 'visible end to end',
    intro: 'Designing booking and tracking for a Lagos logistics company: a customer portal for individuals and businesses, an operations admin, and the website that brings customers in.',
    meta: [
      { label: 'Role', value: 'Sole Product Designer (contract)' },
      { label: 'Product', value: 'Website · Customer portal · Admin dashboard' },
      { label: 'Industry', value: 'Logistics · Nigeria' },
      { label: 'Scope', value: 'End-to-end product design' },
    ],
    cover: { src: img('aib-website') },
    overview: {
      heading: 'One portal for every shipment, from booking to doorstep.',
      paragraphs: [
        'AIB Express is a Lagos-based logistics company offering haulage, parcel management and delivery across Nigeria, for individuals and businesses.',
        'On a freelance contract, I was the only designer. I designed the marketing website, the customer portal for booking, paying for and tracking shipments, and the admin dashboard the operations team uses to run waybills, vehicles, hubs and accounts.',
      ],
    },
    glance: {
      eyebrow: 'AIB Express at a glance',
      stats: [
        { value: '100k', label: 'Packages delivered' },
        { value: '1,000+', label: 'Satisfied clients' },
        { value: '98%', label: 'On-time delivery' },
        { value: '10+ yrs', label: 'In logistics' },
      ],
      source: 'From AIB Express’s public website, aibexpress.ng.',
    },
    problem: {
      heading: 'Shipping shouldn’t need a phone call.',
      points: [
        { title: 'Booking was slow and manual', text: 'Every pickup meant sharing sender, receiver and item details again, with no simple way to get a price or pay online.' },
        { title: '“Where is my package?”', text: 'Once a parcel left, customers had little visibility, so updates depended on calling support.' },
        { title: 'Operations spread across tools', text: 'Waybills, vehicles, hubs and prepaid, postpaid and walk-in accounts needed one place, so the team could spot delays and errors early.' },
      ],
    },
    users: {
      heading: 'Three users, one shipment',
      items: [
        { title: 'Individuals', text: 'People sending parcels across cities who want a quick quote, simple booking and live tracking.', tags: 'Sign up · Book · Track' },
        { title: 'Businesses', text: 'Companies that ship regularly, with company profiles, waybill history and prepaid or postpaid accounts.', tags: 'Company profile · Waybill history' },
        { title: 'Operations team', text: 'Admins who approve requests, assign vehicles, manage hubs and reconcile accounts and reports.', tags: 'Admin dashboard · Reports' },
      ],
    },
    role: {
      heading: 'One designer, three products',
      intro: 'As the only designer on a freelance contract, I worked directly with the AIB Express team and their developers, from requirements to handoff.',
      steps: [
        { title: 'Discover', text: 'Walked through how a shipment moves today, from pickup request to delivery, with the AIB team.' },
        { title: 'Define', text: 'Mapped the booking, tracking and waybill journeys, and the roles for individuals, businesses and admins.' },
        { title: 'Design', text: 'Designed the website, customer portal and admin dashboard on one shared set of components.' },
        { title: 'Hand off', text: 'Delivered every state, including empty, error and success screens, so developers weren’t guessing.' },
      ],
    },
    decisions: [
      { title: 'Booking in five clear steps', text: 'Pickup, shipment details, item upload, payment and summary. Each step asks for one thing, and the summary shows everything before you pay.' },
      { title: 'One waybill number for everything', text: 'Customers and admins search, track and resolve issues with the same waybill number, so everyone is talking about the same shipment.' },
      { title: 'Tracking that answers “where is it?”', text: 'A live map with a timestamped status timeline, from package received to delivered, replaces the follow-up call.' },
      { title: 'Accounts that match how customers pay', text: 'Prepaid wallets, postpaid credit and walk-in customers each get their own view, with revenue trends for the finance team.' },
    ],
    product: {
      heading: 'Website, customer portal and admin, designed as one system',
      hero: { src: img('aib-admin'), caption: 'Admin dashboard: requests, shipments and revenue at a glance.' },
      grid: [
        { src: img('aib-portal'), caption: 'Customer portal: bookings, shipments and wallet in one dashboard.' },
        { src: img('aib-booking'), caption: 'Booking summary: every detail checked before payment.' },
        { src: img('aib-tracking'), caption: 'Tracking: a live map and a status timeline for every waybill.' },
        { src: img('aib-waybill'), caption: 'Waybill management: sender, receiver, cost, vehicle and status in one view.' },
      ],
    },
    learnings: [
      { title: 'Design the states, not just the screens', text: 'Designing empty, error and success states up front made the build faster and the product calmer.' },
      { title: 'Shared language beats more features', text: 'Using the waybill number everywhere did more for clarity than any new feature could.' },
      { title: 'Admin tools are product too', text: 'The operations side decides whether deliveries arrive on time, so it got the same care as the customer portal.' },
    ],
    next: 'clinician-refocus',
  },
  {
    slug: 'clinician-refocus',
    card: {
      category: 'Case study · Healthtech',
      title: 'Clinician Refocus: see where nursing time really goes',
      description: 'A time-and-motion study tool for hospitals: an observer iPad app plus hospital and super admin dashboards.',
      image: img('refocus-app'),
    },
    eyebrow: 'Case study · Healthtech',
    title: 'Clinician Refocus: see where nursing time really goes.',
    highlight: 'where nursing time really goes',
    intro: 'Designing a time-and-motion study tool: an iPad app observers use to log clinician activity in real time, and the web dashboards hospitals use to turn those observations into decisions.',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Product', value: 'Observer iPad app · Hospital admin · Super admin' },
      { label: 'Industry', value: 'Healthtech · Hospitals' },
      { label: 'Scope', value: 'End-to-end product design' },
    ],
    cover: { src: img('refocus-hero'), transparent: true },
    overview: {
      heading: 'Turning hours of observation into clear, usable data.',
      paragraphs: [
        'Clinician Refocus helps hospitals run time-and-motion studies: trained observers shadow nurses and record how each minute of a shift is spent, from patient care and medication to charting, walking and interruptions.',
        'I designed the observer iPad app, the hospital admin dashboard and the super admin console used to manage organisations, observers and reports across facilities.',
      ],
    },
    glance: {
      eyebrow: 'Refocus at a glance',
      stats: [
        { value: '3', label: 'Connected products' },
        { value: '15', label: 'Activity categories' },
        { value: '1 tap', label: 'To log an activity' },
        { value: 'Excel', label: 'One-click export for analysis' },
      ],
      source: 'From the Clinician Refocus product designs.',
    },
    problem: {
      heading: 'Paper and stopwatches can’t keep up with a nurse.',
      points: [
        { title: 'Too fast to write down', text: 'Nurses switch tasks every few minutes. Observers juggling paper forms and a stopwatch miss activities and lose accuracy.' },
        { title: 'Interruptions disappear', text: 'Phone calls, pagers, call lights and visitors break up care, but they are rarely captured in a way leaders can measure.' },
        { title: 'Data that never becomes a decision', text: 'Observations end up in spreadsheets that take days to clean before anyone can compare departments or see what changed.' },
      ],
    },
    users: {
      heading: 'Three roles, one study',
      items: [
        { title: 'Observers', text: 'Shadow clinicians on the ward and log every activity, interruption and pause from an iPad.', tags: 'iPad app · Sessions · Export' },
        { title: 'Hospital admins', text: 'Manage their observers, monitor sessions per department and review how clinician time is distributed.', tags: 'Hospital dashboard · Reports' },
        { title: 'Super admins', text: 'Onboard organisations and observers, and compare activity across facilities before and after an intervention.', tags: 'Super admin · Analytics' },
      ],
    },
    role: {
      heading: 'Designing for the ward and the boardroom',
      intro: 'I designed across all three products, working with the Refocus team from early wireframes to high-fidelity, developer-ready screens.',
      steps: [
        { title: 'Discover', text: 'Learned how time-and-motion studies run on a ward and what observers need to capture, minute by minute.' },
        { title: 'Define', text: 'Turned the study method into activity categories, session rules and the reports leaders actually read.' },
        { title: 'Design', text: 'Moved from mid-fidelity wireframes to a high-fidelity iPad app and two web dashboards on one system.' },
        { title: 'Refine & hand off', text: 'Refined start, pause and stop flows, and designed empty and error states for developers.' },
      ],
    },
    decisions: [
      { title: 'One tap per activity', text: 'Large, colour-coded tiles for each activity let observers log what they see without taking their eyes off the nurse.' },
      { title: 'Timers you can trust', text: 'Each category keeps its own running timer, with pause, stop and “remove last”, so mistakes are fixed in a tap.' },
      { title: 'Interruptions as real data', text: 'Phone calls, pagers, call lights and visitors each get their own tile, so interruptions become measurable, not anecdotal.' },
      { title: 'Before and after, side by side', text: 'Dashboards compare task distribution pre- and post-intervention, so hospitals can see whether a change really freed up time.' },
    ],
    product: {
      heading: 'An iPad app and two dashboards, designed as one system',
      hero: { src: img('refocus-super-admin'), caption: 'Super admin: organisations, observers and sessions across every facility.' },
      grid: [
        { src: img('refocus-app'), caption: 'Observer app: home, live session and session summary on iPad.' },
        { src: img('refocus-sessions'), caption: 'Sessions: completed observations and the time allocation behind them.' },
        { src: img('refocus-hospital-admin'), caption: 'Hospital admin: sessions per department and task category distribution.' },
        { src: img('refocus-observer'), caption: 'Observer profile: sessions, averages and pre/post-intervention breakdown.' },
      ],
    },
    learnings: [
      { title: 'Design for eyes on the patient', text: 'When users can’t look at the screen for long, size, colour and position matter more than anything else.' },
      { title: 'Comparable beats comprehensive', text: 'Fixed categories and session rules made results comparable across wards and hospitals.' },
      { title: 'Every tap is a data point', text: 'Undo, pause and stop needed as much care as logging, because one wrong tap skews the study.' },
    ],
    next: 'certracker',
  },
]

export const getCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug)
