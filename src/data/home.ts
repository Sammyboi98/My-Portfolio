const img = (name: string) => `/images/${name}.webp`

export const industries = ['AI products', 'Fintech', 'Healthtech', 'Logistics', 'Education', 'Dashboards']

export const teams = ['CerTracker', 'PayPetal', 'Prompt AI', 'PAS Academy', 'Torilo Academy', 'Integrity Pay', 'AIB Express', 'Clinician Refocus']

export const stats = [
  { value: '5+', label: 'Years designing products' },
  { value: '20+', label: 'Projects shipped' },
  { value: '15+', label: 'Happy clients' },
]

export const designAI = [
  {
    tag: 'For AI',
    title: 'Designing AI products',
    text: 'Experiences that make AI useful, clear and trustworthy, so people know what it can do and stay in control.',
    points: [
      'Copilots, assistants & chat interfaces',
      'AI agents & automated workflows',
      'Smart recommendations & personalisation',
      'Trust, transparency & human-in-the-loop UX',
    ],
  },
  {
    tag: 'With AI',
    title: 'An AI-accelerated workflow',
    text: 'AI is built into how I work, so teams see more ideas explored and validated faster, without cutting corners on craft.',
    points: [
      'AI-assisted research & insight synthesis',
      'Rapid prototyping, from idea to clickable fast',
      'Generative visuals, copy & content',
      'Faster iteration from concept to handoff',
    ],
  },
]

export const whyMe = [
  { title: 'User-centred, business-driven', text: 'Every decision serves your users and moves your business goals forward. Usable and successful.' },
  { title: 'Research before pixels', text: 'I ground design in research, behaviour patterns and data, not guesswork, to lift engagement and retention.' },
  { title: 'AI-native by default', text: 'I use AI to research, explore and prototype faster, so you see stronger ideas sooner and ship with confidence.' },
  { title: 'A true collaborator', text: 'I work hand in hand with founders, PMs and developers, from first idea to final handoff.' },
]

export const services = [
  { title: 'AI product & UX design', text: 'Interfaces for web, mobile and AI-powered products, from copilots and chat experiences to smart, adaptive dashboards.', tags: 'AI UX · Conversational UI · UI/UX · Prototyping' },
  { title: 'Landing pages & websites', text: 'High-converting sites that tell your story clearly, capture attention and turn visitors into customers.', tags: 'Web design · Conversion optimisation' },
  { title: 'Dashboards & admin panels', text: 'Clean, data-rich tools that help teams see what matters, navigate easily and make decisions fast.', tags: 'Information architecture · Data-heavy UI' },
  { title: 'Design systems & branding', text: 'Scalable component libraries and guidelines that keep every touchpoint consistent as you grow.', tags: 'Design systems · Accessibility' },
  { title: 'UX research & strategy', text: 'User research, competitor analysis and usability testing that de-risk what you build.', tags: 'User research · Journey mapping · UX audits' },
  { title: 'Product consulting & mentorship', text: 'Product strategy, MVP planning, design reviews and team workshops for founders and designers.', tags: 'MVP planning · Workshops · Tutoring' },
]

type Tool = { name: string; logo?: string }
export const toolGroups: { title: string; text: string; tools: Tool[] }[] = [
  {
    title: 'Design & prototyping',
    text: 'Where ideas become high-fidelity, testable experiences.',
    tools: [
      { name: 'Figma', logo: img('tool-figma') },
      { name: 'Protopie', logo: img('tool-protopie') },
      { name: 'LottieFiles', logo: img('tool-lottiefiles') },
      { name: 'Phase', logo: img('tool-phase') },
      { name: 'Sketch', logo: img('tool-sketch') },
    ],
  },
  {
    title: 'AI toolkit',
    text: 'Speeding up research, ideation, prototyping and content.',
    tools: [{ name: 'ChatGPT' }, { name: 'Claude' }, { name: 'Figma AI' }, { name: 'Midjourney' }, { name: 'Lovable' }, { name: 'Cursor' }],
  },
  {
    title: 'Research & analytics',
    text: 'Turning user behaviour into evidence for design decisions.',
    tools: [{ name: 'Maze' }, { name: 'Hotjar' }, { name: 'Google Analytics' }, { name: 'Dovetail' }],
  },
  {
    title: 'Collaboration & handoff',
    text: 'Keeping teams aligned from kickoff to developer handoff.',
    tools: [
      { name: 'FigJam', logo: img('tool-figjam') },
      { name: 'Miro', logo: img('tool-miro') },
      { name: 'Notion', logo: img('tool-notion') },
      { name: 'Figma Dev Mode', logo: img('tool-figma-dev-mode') },
      { name: 'Zeplin', logo: img('tool-zeplin') },
      { name: 'ClickUp', logo: img('tool-clickup') },
      { name: 'Trello', logo: img('tool-trello') },
    ],
  },
  {
    title: 'Build & no-code',
    text: 'Shipping live sites and prototypes beyond static mockups.',
    tools: [
      { name: 'Framer', logo: img('tool-framer') },
      { name: 'Webflow', logo: img('tool-webflow') },
      { name: 'FlutterFlow', logo: img('tool-flutterflow') },
      { name: 'Onlook', logo: img('tool-onlook') },
      { name: 'HTML5', logo: img('tool-html5') },
      { name: 'CSS3', logo: img('tool-css3') },
    ],
  },
]

export const testimonials = [
  {
    quote:
      'Samson is an incredibly intuitive designer! Having worked with him over the last two years, I can confidently say his UX/UI expertise, design thinking, and user research skills are top-notch. His ability to craft user-centric solutions is truly impressive!',
    name: 'Shadrach Igwe',
    role: 'Co-founder @ CerTracker',
    avatar: img('avatar-shadrach'),
  },
  {
    quote:
      'Working with Samson elevated our entire product experience. His designs are not just beautiful—they’re strategic, user-focused, and aligned with our business goals. A true asset to the PayPetal journey.',
    name: 'Ilemobayo Samson',
    role: 'CTO @ PayPetal',
    avatar: img('avatar-ilemobayo'),
  },
  {
    quote:
      'Samson has been an invaluable part of Torilo Academy. His ability to simplify complex design concepts and connect with students made a lasting impact. Passionate, knowledgeable, and deeply committed. He has helped shape the next generation of designers.',
    name: 'Team Torilo',
    role: 'Torilo Academy',
    avatar: img('avatar-torilo'),
  },
]
