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
}

export interface OperatingPrinciple {
  label: string
  text: string
}

export const capabilities: Capability[] = [
  {
    title: 'AI + Embedded Systems Engineering',
    description:
      'We design intelligent systems that combine software, electronics, and controls so products can run reliably in real operating environments.',
    details: ['Model integration for edge and cloud workloads', 'Sensor and device data pipelines', 'Production-ready APIs and backend services'],
  },
  {
    title: 'Product Engineering for Startups and Teams',
    description:
      'From idea to launch, we help teams scope, build, and ship products with clean architecture, maintainable code, and a roadmap for scale.',
    details: ['Web and mobile application development', 'Product architecture and MVP planning', 'Delivery support from prototype to launch'],
  },
  {
    title: 'Automation and Data-Driven Workflows',
    description:
      'We automate repetitive operations and turn scattered data into systems that support faster decisions and better service quality.',
    details: ['Operational dashboards and analytics tooling', 'Workflow automation and integrations', 'Alerting, monitoring, and reporting systems'],
  },
  {
    title: 'IoT, Robotics, and Hardware Prototyping',
    description:
      'Our mechatronics background lets us build beyond pure software: connected devices, control systems, and hardware-aware platforms.',
    details: ['IoT device integration and telemetry systems', 'Embedded software and control logic', 'Rapid prototyping for product validation'],
  },
]

export const projects: Project[] = [
  {
    name: 'Ujuzi',
    tag: 'Energy Intelligence Platform',
    headline: 'Smart Monitoring and Forecasting for Microgrids',
    description:
      'Ujuzi is our energy project focused on monitoring, forecasting, and optimization for renewable and community microgrids. It combines IoT telemetry, predictive analytics, and actionable insights for operators and communities.',
    markers: ['Real-time energy monitoring', 'AI-assisted demand prediction', 'Designed for practical field deployment'],
    impact: 'Better visibility, better planning, and more efficient energy usage.',
  },
  {
    name: 'Qwikeys',
    tag: 'Mobility Marketplace Platform',
    headline: 'Peer-to-Peer Car Sharing Built for Trust and Speed',
    description:
      'Qwikeys is our car hiring platform that connects vehicle owners and renters through a simple, secure booking experience. The product is designed for scale, trust, and smooth operations.',
    markers: ['Marketplace booking workflows', 'Trust and safety-first product design', 'Built for growth across local markets'],
    impact: 'Faster rentals, better host utilization, and a cleaner mobility experience.',
  },
]

export const partnerCategories: PartnerCategory[] = [
  {
    title: 'Client Product Builds',
    description: 'We partner with founders and teams to build digital products people can use, trust, and pay for.',
    references: ['MVP and production system delivery', 'Feature expansion and performance improvements', 'Long-term engineering support'],
  },
  {
    title: 'Energy and Sustainability',
    description: 'Our Ujuzi work demonstrates how data and AI can support practical renewable energy management.',
    references: ['Telemetry capture and monitoring', 'Forecasting and operational insights', 'Community-focused deployment thinking'],
  },
  {
    title: 'Mobility and Marketplaces',
    description: 'With Qwikeys, we are building product capabilities for high-trust transactional platforms.',
    references: ['Booking and availability systems', 'Identity and trust UX patterns', 'Marketplace operations tooling'],
  },
  {
    title: 'Research and Prototyping',
    description: 'We continue to explore practical R&D across AI, robotics, and intelligent systems inspired by our early lab projects.',
    references: ['Rapid concept validation', 'Hardware-software integration experiments', 'Applied research into usable products'],
  },
]

export const insights: Insight[] = [
  {
    title: 'What We Learned Building Ujuzi for Real-World Energy Operations',
    type: 'Field Notes',
    summary: 'A practical breakdown of telemetry quality, forecasting trade-offs, and deployment decisions that matter when systems run outside ideal lab conditions.',
  },
  {
    title: 'How We Approach Product Architecture for Early-Stage Teams',
    type: 'Engineering Memo',
    summary: 'How we balance speed and maintainability when helping clients move from idea to reliable first release.',
  },
  {
    title: 'Designing Trust Layers in Mobility Platforms like Qwikeys',
    type: 'Product Brief',
    summary: 'Patterns for booking flows, user verification, and operational safeguards that improve confidence for both hosts and renters.',
  },
]

export const operatingPrinciples: OperatingPrinciple[] = [
  {
    label: 'Systems thinking',
    text: 'We design software, electronics, and operations as one connected system, not separate silos.',
  },
  {
    label: 'Build with intent',
    text: 'Every feature is tied to a measurable outcome: usability, reliability, performance, or business value.',
  },
  {
    label: 'Ship and iterate',
    text: 'We prioritize working releases, then improve through real usage feedback and production learnings.',
  },
]
