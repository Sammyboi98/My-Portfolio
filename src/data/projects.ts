export type Project = {
  slug: string
  title: string
  category: string
  description?: string
  image: string
  /** Live website. When set, the card opens it in a new tab. */
  liveUrl?: string
  /** Mockups shown in the preview overlay when there is no live website. */
  gallery?: { src: string; caption?: string }[]
  /** App store links. When set, the card opens a chooser for iOS or Android. */
  stores?: { ios: string; android: string }
  /** Slug of the related case study, if there is one. */
  caseStudy?: string
}

const img = (name: string) => `/images/${name}.webp`

export const projects: Project[] = [
  {
    slug: 'prompt-ai',
    title: 'Prompt AI',
    category: 'AI · Company website',
    description: 'A company website for an AI solutions firm, positioning its products, services and academy.',
    image: img('prompt-ai'),
    liveUrl: 'https://promptaisolution.com/',
  },
  {
    slug: 'pas-academy',
    title: 'PAS Academy',
    category: 'Edtech · Website',
    description: 'A learning platform site for practical technology education, from course discovery to sign-up.',
    image: img('pas-academy'),
    liveUrl: 'https://www.pasacademyhq.com/',
  },
  {
    slug: 'pas-academy-admin',
    title: 'PAS Academy Admin',
    category: 'Edtech · Admin dashboard',
    description: 'An admin dashboard for managing students, applications and programmes.',
    image: img('pas-admin'),
    gallery: [{ src: img('pas-admin'), caption: 'PAS Academy admin dashboard' }],
  },
  {
    slug: 'paypetal-app',
    title: 'PayPetal App',
    category: 'Fintech · Mobile app',
    description: 'A trust-first payments app built around escrow, with NFC payments, cards and bills in one wallet.',
    image: img('paypetal-app'),
    stores: {
      ios: 'https://apps.apple.com/ng/app/paypetal/id6741375616',
      android: 'https://play.google.com/store/apps/details?id=com.chaos12.paypetalmobile',
    },
    caseStudy: 'paypetal',
    gallery: [
      { src: img('paypetal-app'), caption: 'Credit, home and business screens' },
      { src: img('paypetal-trustvault'), caption: 'TrustVault escrow' },
      { src: img('paypetal-cards'), caption: 'Cards' },
    ],
  },
  {
    slug: 'certracker-app',
    title: 'CerTracker',
    category: 'Healthtech · Mobile app',
    description: 'An AI-powered credential wallet for nurses and clinicians.',
    image: img('certracker-app'),
    stores: {
      ios: 'https://apps.apple.com/us/app/certracker-secure-wallet/id6479345926',
      android: 'https://play.google.com/store/apps/details?id=com.rn.certracker',
    },
    caseStudy: 'certracker',
    gallery: [
      { src: img('certracker-app'), caption: 'Wallet, facility dashboard and facilities' },
      { src: img('certracker-wallet'), caption: 'Credential wallet and folders' },
    ],
  },
  {
    slug: 'paypetal-admin',
    title: 'PayPetal Admin',
    category: 'Fintech · Admin dashboard',
    description: 'A back-office dashboard for managing users, transactions and payments in one place.',
    image: img('paypetal-admin'),
    caseStudy: 'paypetal',
    gallery: [{ src: img('paypetal-admin'), caption: 'PayPetal admin dashboard' }],
  },
  {
    slug: 'clinician-refocus',
    title: 'Clinician Refocus',
    category: 'Healthtech · Tablet app',
    description: 'An iPad app observers use to log clinician activity in real time.',
    image: img('refocus-app'),
    caseStudy: 'clinician-refocus',
    gallery: [
      { src: img('refocus-app'), caption: 'Home, live session and session summary' },
      { src: img('refocus-sessions'), caption: 'Observation sessions and summary' },
    ],
  },
  {
    slug: 'clinician-refocus-admin',
    title: 'Clinician Refocus Admin',
    category: 'Healthtech · Admin dashboard',
    description: 'Hospital and super admin dashboards for time-and-motion studies.',
    image: img('refocus-hospital-admin'),
    caseStudy: 'clinician-refocus',
    gallery: [
      { src: img('refocus-hospital-admin'), caption: 'Hospital admin' },
      { src: img('refocus-super-admin'), caption: 'Super admin' },
      { src: img('refocus-observer'), caption: 'Observer profile' },
    ],
  },
  {
    slug: 'paypetal-merchant',
    title: 'PayPetal Merchant',
    category: 'Fintech · Merchant dashboard',
    description: 'Sales, payouts, terminals and customers for PayPetal businesses.',
    image: img('paypetal-merchant'),
    liveUrl: 'https://business.paypetal.africa',
    caseStudy: 'paypetal',
  },
  {
    slug: 'certracker-web',
    title: 'CerTracker Web',
    category: 'Healthtech · Web app',
    description: 'A web platform for organisations to manage staff credentials and stay audit-ready.',
    image: img('certracker-web'),
    liveUrl: 'https://wallet.certracker.com/',
    caseStudy: 'certracker',
  },
  {
    slug: 'certracker-manager',
    title: 'CerTracker Manager',
    category: 'Healthtech · Admin dashboard',
    description: 'A real-time compliance dashboard for healthcare organisations.',
    image: img('certracker-manager'),
    liveUrl: 'https://manager.certracker.com/auth/login',
    caseStudy: 'certracker',
  },
  {
    slug: 'magnetready',
    title: 'MagnetReady by CerTracker',
    category: 'Healthtech · Web platform',
    description: 'A command centre for hospitals pursuing Magnet Recognition.',
    image: img('magnetready'),
    caseStudy: 'certracker',
    gallery: [{ src: img('magnetready'), caption: 'MagnetReady Program Director dashboard' }],
  },
  {
    slug: 'aib-express',
    title: 'AIB Express',
    category: 'Logistics · Website',
    description: 'The marketing website for a Lagos logistics company.',
    image: img('aib-website'),
    liveUrl: 'https://www.aibexpress.ng/',
    caseStudy: 'aib-express',
  },
  {
    slug: 'aib-portal',
    title: 'AIB Express Customer Portal',
    category: 'Logistics · Customer web app',
    description: 'Booking, payment and live tracking for individuals and businesses.',
    image: img('aib-portal'),
    liveUrl: 'https://www.aibexpress.ng/dashboard/sign-up',
    caseStudy: 'aib-express',
  },
  {
    slug: 'aib-admin',
    title: 'AIB Express Admin',
    category: 'Logistics · Admin dashboard',
    description: 'Requests, waybills, vehicles, hubs and accounts for the operations team.',
    image: img('aib-admin'),
    caseStudy: 'aib-express',
    gallery: [
      { src: img('aib-admin'), caption: 'Admin dashboard' },
      { src: img('aib-waybill'), caption: 'Waybill management' },
    ],
  },
]

export const landingPages: Project[] = [
  projects.find((p) => p.slug === 'prompt-ai')!,
  projects.find((p) => p.slug === 'pas-academy')!,
  {
    slug: 'certracker-website',
    title: 'CerTracker',
    category: 'Healthtech · Live site',
    description: 'The marketing website for CerTracker’s compliance platform.',
    image: img('certracker-website'),
    liveUrl: 'https://www.certracker.com/',
    caseStudy: 'certracker',
  },
  {
    slug: 'paypetal-website',
    title: 'PayPetal',
    category: 'Fintech · Live site',
    description: 'The website introducing PayPetal, TrustVault and the smart wallet.',
    image: img('paypetal-website'),
    liveUrl: 'https://paypetal.africa/',
    caseStudy: 'paypetal',
  },
  projects.find((p) => p.slug === 'aib-express')!,
]

export const featured = ['certracker-app', 'paypetal-app', 'paypetal-admin', 'certracker-web']
