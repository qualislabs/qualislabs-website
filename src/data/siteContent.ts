export interface Capability {
  title: string
  description: string
  details: string[]
}

export interface Project {
  name: string
  tag: string
  headline: string
  description: string
  markers: string[]
  impact: string
  link?: string
}

export interface PartnerCategory {
  title: string
  description: string
  references: string[]
}

export interface Insight {
  title: string
  type: string
  summary: string
  link?: string
}

export interface Award {
  title: string
  organization: string
  year: string
  summary: string
}

export interface OperatingPrinciple {
  label: string
  text: string
}

export interface TeamMember {
  initials: string
  name: string
  role: string
  focus: string
  gradient: string
}

export const capabilities: Capability[] = [
  {
    title: 'AI & Embedded Systems',
    description:
      'We architect intelligent systems that unify software, electronics, and controls — engineered to perform reliably in mission-critical environments.',
    details: ['Edge & cloud AI model deployment', 'Sensor data pipelines & telemetry', 'Production-grade APIs & backend services'],
  },
  {
    title: 'Product Engineering',
    description:
      'From concept to launch, we partner with organisations to scope, build, and ship products with clean architecture, maintainable codebases, and a clear roadmap for scale.',
    details: ['Web & mobile application development', 'Product architecture & roadmap planning', 'End-to-end delivery from prototype to production'],
  },
  {
    title: 'Automation & Analytics',
    description:
      'We automate complex operations and transform fragmented data into decision-ready systems that drive efficiency and accelerate service delivery.',
    details: ['Operational dashboards & BI tooling', 'Workflow automation & integrations', 'Real-time alerting, monitoring & reporting'],
  },
  {
    title: 'IoT & Hardware Prototyping',
    description:
      'Our mechatronics expertise enables us to deliver beyond pure software — connected devices, control systems, and hardware-aware platforms.',
    details: ['IoT device integration & telemetry', 'Embedded software & control logic', 'Rapid prototyping & product validation'],
  },
]

export const projects: Project[] = [
  {
    name: 'Qwikeys',
    tag: 'Mobility Marketplace Platform',
    headline: "Africa's Peer-to-Peer Car Sharing Marketplace",
    description:
      "Qwikeys is our flagship mobility platform that enables vehicle owners to turn their cars into businesses. It's built on a high-trust, peer-to-peer model that provides renters with a seamless, safe, and affordable way to find the perfect ride.",
    markers: [
      'Comprehensive trust & safety-first product architecture',
      'Automated host tools & insurance protection layers',
      'Engineered for continental scale and multi-market growth',
    ],
    impact: 'Empowering car owners across Africa with sustainable income streams while redefining regional mobility.',
    link: 'https://qwikeys.com/',
  },
  {
    name: 'Ujuzi',
    tag: 'Energy Intelligence Platform',
    headline: 'Intelligent Monitoring & Forecasting for Microgrids',
    description:
      'Ujuzi is our energy intelligence platform that delivers real-time monitoring, predictive forecasting, and operational optimization for renewable and community microgrids — combining IoT telemetry with actionable analytics.',
    markers: ['Real-time energy monitoring dashboards', 'AI-powered demand forecasting', 'Engineered for practical field deployment'],
    impact: 'Improved visibility, optimized planning, and measurably efficient energy consumption.',
  },
  {
    name: 'Mavuno Link',
    tag: 'Agri-Tech & Supply Chain',
    headline: 'Digital Marketplace for Post-Harvest Loss Mitigation',
    description:
      'Mavuno Link is a multi-interface platform (Web, Mobile, USSD, SMS) that connects farmers directly to buyers and drivers, eliminating inefficient middlemen and drastically reducing post-harvest food waste.',
    markers: [
      'Regional Winner of the 2021 IBM Call for Code Global Challenge',
      'Low-bandwidth accessible via USSD & SMS integration',
      'AI-powered route optimization for perishables delivery',
    ],
    impact: 'Tackling the 5.2 million tonnes of annual food loss in Kenya while economically empowering smallholder farmers.',
  },
]

export const partnerCategories: PartnerCategory[] = [
  {
    title: 'Client Product Builds',
    description: 'We collaborate with founders and enterprise teams to design and deliver digital products that users trust, adopt, and scale with.',
    references: ['Production system design & delivery', 'Feature expansion & performance engineering', 'Long-term technical partnership & advisory'],
  },
  {
    title: 'Energy & Sustainability',
    description: 'Our Ujuzi platform demonstrates how data-driven intelligence and AI transform operational renewable energy management at scale.',
    references: ['Telemetry capture & real-time monitoring', 'Predictive forecasting & operational insights', 'Field-proven deployment strategies'],
  },
  {
    title: 'Mobility & Marketplaces',
    description: 'With Qwikeys, we are pioneering product capabilities for high-trust, high-frequency transactional platforms.',
    references: ['Booking & availability engines', 'Identity verification & trust UX', 'Marketplace operations tooling'],
  },
  {
    title: 'Research & Prototyping',
    description: 'We invest in applied R&D across AI, robotics, and intelligent systems — translating frontier research into production-ready solutions.',
    references: ['Rapid concept validation', 'Hardware-software integration R&D', 'Research-to-production delivery'],
  },
]

export const awards: Award[] = [
  {
    title: 'Regional Winner (Middle East & Africa)',
    organization: 'IBM Call for Code Global Challenge',
    year: '2021',
    summary: 'Recognized for developing Mavuno Link, an intelligent platform addressing the UN Zero Hunger goal by reducing post-harvest food waste through direct farmer-to-buyer connectivity.',
  },
]

export const insights: Insight[] = [
  {
    title: 'Lessons from Building Ujuzi for Real-World Energy Operations',
    type: 'Field Report',
    summary: 'A practical breakdown of telemetry quality, forecasting trade-offs, and deployment decisions that matter when systems operate outside controlled lab conditions.',
  },
  {
    title: 'Our Approach to Product Architecture for Early-Stage Teams',
    type: 'Engineering Brief',
    summary: 'How we balance velocity and maintainability when helping clients navigate from initial idea to a reliable, scalable first release.',
  },
  {
    title: 'Engineering Trust Layers in Mobility Platforms',
    type: 'Product Analysis',
    summary: 'Proven patterns for booking flows, user verification, and operational safeguards that build confidence for both hosts and renters.',
  },
  {
    title: 'Kenya-based team named top Call for Code solution winner',
    type: 'News',
    summary: 'The Star covers Qualis Labs’ regional win in the 2021 IBM Call for Code Global Challenge for tackling food waste in Kenya.',
    link: 'https://www.the-star.co.ke/counties/2021-11-30-kenya-based-team-named-top-call-for-code-solution-winner',
  },
  {
    title: 'Kenyan team wins regional IBM award for food waste solution',
    type: 'News',
    summary: 'Africa Business Communities highlights how Mavuno Link uses IBM Cloud and Watson to reduce post-harvest losses.',
    link: 'https://africabusinesscommunities.com/tech-24/kenyan-team-wins-regional-ibm-award-for-developing-solution-to-help-reduce-food-waste/',
  },
]

export const teamMembers: TeamMember[] = [
  {
    initials: 'SE',
    name: 'Senior Software Engineer',
    role: 'Platform & Backend',
    focus: 'APIs, data pipelines, cloud infrastructure',
    gradient: 'linear-gradient(135deg, #1b4fb1 0%, #3b71fe 100%)',
  },
  {
    initials: 'EE',
    name: 'Embedded Systems Engineer',
    role: 'Devices & Firmware',
    focus: 'Microcontrollers, sensors, control logic',
    gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
  },
  {
    initials: 'PE',
    name: 'Product Engineer',
    role: 'Web & Mobile',
    focus: 'User-facing experiences, frontend systems',
    gradient: 'linear-gradient(135deg, #0e7490 0%, #22d3ee 100%)',
  },
  {
    initials: 'HE',
    name: 'Hardware Engineer',
    role: 'Electronics & Prototyping',
    focus: 'PCB design, instrumentation, mechatronics',
    gradient: 'linear-gradient(135deg, #0b0d17 0%, #1b4fb1 100%)',
  },
]

export const operatingPrinciples: OperatingPrinciple[] = [
  {
    label: 'Systems Thinking',
    text: 'We architect software, electronics, and operations as one integrated system — not disconnected silos.',
  },
  {
    label: 'Build with Intent',
    text: 'Every feature we ship is tied to a measurable outcome: usability, reliability, performance, or business value.',
  },
  {
    label: 'Ship & Iterate',
    text: 'We prioritize working releases, then refine continuously through real usage data and production learnings.',
  },
]
