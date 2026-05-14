export const siteContent = {
  brand: {
    shortName: 'Lotlite',
    fullName: 'Lotlite School of Real Estate',
    tagline: 'Shaping the future of India’s real estate leaders',
  },
  navLinks: [
    { id: 'about', label: 'About' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    preTitle: 'APPLICATIONS OPEN · BATCH 2026',
    title: 'MBA in Real Estate Management',
    highlight: 'Real Estate',
    description: 'India’s most practitioner-led MBA — designed to build the next generation of real estate founders, investors, and executives.',
    primaryAction: 'Apply for 2026',
    secondaryAction: 'Explore Curriculum',
    stats: [
      { label: '12 Months', description: 'Intensive Full-Time Program' },
      { label: 'Pune, India', description: 'On-Campus Experience' },
      { label: '₹4.5 Lakhs', description: 'Total Program Fee' },
      { label: '60 Seats', description: 'Limited Intake Per Year' },
      { label: '94%', description: 'Placement Rate' },
      { label: 'RERA + AICTE', description: 'Certified & Approved' },
    ],
  },
  stats: [
    { value: '500+', label: 'Alumni Network' },
    { value: '94%', label: 'Placement Rate' },
    { value: '₹18L', label: 'Avg. Starting CTC' },
    { value: '40+', label: 'Industry Partners' },
    { value: '100+', label: 'faculty Members' },
    { value: '1000+', label: 'Resources Available' },

  ],
  about: {
    eyebrow: 'ABOUT THE PROGRAM',
    heading: 'Built for the Real World of Real Estate',
    description: [
      'Lotlite’s MBA is not a classroom program — it’s a practitioner’s journey. You’ll work on live deals, learn from active investors, and graduate with the skills, network, and confidence to lead.',
      'Designed with CREDAI, JLL, and leading developers, our curriculum blends finance, law, technology, and leadership into one industry-ready program.',
    ],
    highlights: [
      { title: 'Industry-First Curriculum', content: 'Co-designed with 50+ practitioners and updated every semester.' },
      { title: 'Live Deal Exposure', content: 'Work on real transactions — site visits, due diligence, client pitches.' },
      { title: 'RERA Certification Included', content: 'Graduate with a RERA-recognised certificate valued across India.' },
      { title: 'Startup Incubation', content: 'Launch your venture with mentorship, legal support, and funding access.' },
    ],
    badges: [
      { title: 'AICTE', subtitle: 'Approved' },
      { title: 'RERA', subtitle: 'Certified' },
      { title: 'Top 5', subtitle: 'RE MBA in India' },
    ],
  },
  curriculum: {
    eyebrow: 'WHAT YOU’LL LEARN',
    heading: 'Program Curriculum',
    modules: [
      {
        title: 'Real Estate Finance & Investment',
        description: 'Master DCF valuation, REITs, mortgage structuring, and capital markets specific to property investment and development.',
      },
      {
        title: 'Property Development & Management',
        description: 'End-to-end project lifecycle: land acquisition, permitting, construction oversight, tenant management, and asset disposal.',
      },
      {
        title: 'Urban Planning & Land Law',
        description: 'Zoning regulations, environmental compliance, RERA framework, FSI rules, and government land acquisition policies.',
      },
      {
        title: 'Real Estate Marketing & Sales',
        description: 'Digital marketing, CRM systems, channel partner networks, luxury segment selling, and buyer psychology.',
      },
      {
        title: 'PropTech & Digital Innovation',
        description: 'Blockchain in title deeds, AI-driven pricing, virtual tours, smart building IoT, and data analytics for investors.',
      },
      {
        title: 'Leadership & Entrepreneurship',
        description: 'Build your venture, lead teams, manage stakeholders, and launch your own real estate business with mentored incubation.',
      },
    ],
  },
  faculty: {
    eyebrow: 'LEARN FROM THE BEST',
    heading: 'Our Faculty',
    members: [
      {
        name: 'Dr. Priya Sharma',
        role: 'Chair – Real Estate Finance',
        description: 'Ex-HDFC Ltd. with 20+ years in mortgage banking, REIT fund management, and structured debt products.',
      },
      {
        name: 'Mr. Rahul Mehta',
        role: 'PropTech & Innovation Lead',
        description: 'Founded 2 PropTech startups; ex-advisor to NASSCOM’s real estate vertical and IIM-A visiting faculty.',
      },
      {
        name: 'Ms. Kavita Nair',
        role: 'Urban Planning & Law',
        description: 'Ex-CREDAI national council member, practicing RERA advocate, and certified urban planning consultant.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'SUCCESS STORIES',
    heading: 'What Our Alumni Say',
    reviews: [
      {
        name: 'Arjun Desai',
        role: 'Founder, UrbanNest Realty',
        batch: 'Batch 2023',
        quote: 'The program gave me exactly the right toolkit to launch my commercial leasing firm. The PropTech module alone was worth the entire fee.',
      },
      {
        name: 'Sneha Patel',
        role: 'Investment Analyst, Blackstone India',
        batch: 'Batch 2022',
        quote: 'From civil engineer to real estate investment analyst — this MBA completely transformed my career. The faculty network opened doors I didn’t know existed.',
      },
      {
        name: 'Vikram Singh',
        role: 'Senior Associate, JLL India',
        batch: 'Batch 2023',
        quote: 'The finance and law modules prepared me for real land deals. I closed my first ₹12 crore transaction just 3 months after graduating.',
      },
    ],
  },
  contact: {
    eyebrow: 'JOIN THE 2026 BATCH',
    heading: 'Apply Now',
    description: '60 seats · Rolling admissions · Applications close July 31, 2026',
    successMessage: 'Application received! Our admissions team will contact you within 48 hours.',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@email.com', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
      { name: 'experience', label: 'Work Experience', type: 'select', options: ['Fresher (0–1 yrs)', '1–3 years', '3–5 years', '5+ years'], required: true },
      { name: 'message', label: 'Why Real Estate?', type: 'textarea', placeholder: 'Tell us what excites you about this field...', required: false },
    ],
    contactCards: [
      { label: 'Email', value: 'admissions@lotlitere.edu.in' },
      { label: 'Phone', value: '+91 20 4567 8900' },
      { label: 'Address', value: 'Hinjewadi Phase 1, Pune 411057' },
    ],
  },
  footer: {
    description: 'Shaping the future of India’s real estate industry — one leader at a time.',
    menuLabel: 'Program',
    contactLabel: 'Contact',
    menuLinks: [
      { label: 'About', id: 'about' },
      { label: 'Curriculum', id: 'curriculum' },
      { label: 'Faculty', id: 'faculty' },
      { label: 'Testimonials', id: 'testimonials' },
      { label: 'Contact', id: 'contact' },
    ],
    contactDetails: [
      { label: 'Email', value: 'admissions@lotlitere.edu.in' },
      { label: 'Phone', value: '+91 20 4567 8900' },
      { label: 'Address', value: 'Hinjewadi Phase 1, Pune 411057' },
    ],
    socials: ['linkedin', 'instagram', 'youtube'],
    copyright: '© 2026 Lotlite School of Real Estate. All rights reserved.',
    smallPrint: 'AICTE Approved · RERA Certified Program',
  },
  sections: [
    { id: 'home', type: 'hero', dataKey: 'hero' },
    { id: 'stats', type: 'stats', dataKey: 'stats' },
    { id: 'about', type: 'about', dataKey: 'about' },
    { id: 'curriculum', type: 'curriculum', dataKey: 'curriculum' },
    { id: 'faculty', type: 'faculty', dataKey: 'faculty' },
    { id: 'testimonials', type: 'testimonials', dataKey: 'testimonials' },
    { id: 'contact', type: 'contact', dataKey: 'contact' },
    { id: 'footer', type: 'footer', dataKey: 'footer' },
  ],
};
