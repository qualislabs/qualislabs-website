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
    title: 'Sovereign AI & Confidential Computing',
    description:
      'Your models are only as secure as the environment they run in. We deploy AI workloads inside cryptographically isolated execution environments using secure enclave technologies, so data stays protected during processing—not just at rest or in transit.',
    details: ['Enclave-backed inference pipelines', 'Zero-trust AI execution', 'Regulatory-compliant architectures'],
  },
  {
    title: 'High-Throughput Fintech Infrastructure',
    description:
      'Modern intelligence must integrate with rigid financial systems. We design distributed backends that bridge AI workloads with legacy rails—without introducing latency or downtime.',
    details: ['gRPC microservices (Go / Spring Boot)', 'Core banking integrations', 'USSD + offline transaction orchestration'],
  },
  {
    title: 'AI Governance & Guardrails',
    description:
      'Unbounded AI is not deployable. We implement strict control layers around model behavior—ensuring outputs remain aligned, safe, and predictable under real-world usage.',
    details: ['Prompt injection defense', 'Output validation pipelines', 'Policy-based routing systems'],
  },
  {
    title: 'Edge AI & Distributed IoT Systems',
    description:
      'Not every system can rely on the cloud. We bring intelligence closer to the source—designing systems that operate offline and synchronize when possible.',
    details: ['Custom hardware + PCB design', 'MQTT / CoAP architectures', 'Offline-first data synchronization'],
  },
]

export const projects: Project[] = [
  {
    name: 'Ujuzi',
    tag: 'AI Infrastructure for Energy Optimization',
    headline: 'Intelligent Power Distribution at Grid Edge',
    description:
      'Ujuzi is a production-grade AI system designed to optimize power distribution across unstable grid environments. Instead of relying on centralized forecasting, Ujuzi operates through distributed inference nodes deployed closer to consumption points. These nodes continuously analyze load patterns, predict failures, and dynamically rebalance energy allocation.',
    markers: ['Edge-deployed ML inference (not cloud-only)', 'Works under intermittent connectivity', 'Integrates with existing utility infrastructure'],
    impact: 'Reduced energy waste. Increased grid stability. Real-time adaptability.',
  },
  {
    name: 'Mavuno Link',
    tag: 'AI-Native Agricultural Infrastructure',
    headline: 'From Farm to Market, Without Information Loss',
    description:
      'Mavuno Link is not a marketplace. It is an intelligence layer for agricultural supply chains. The platform aggregates fragmented farm-level data, applies AI-driven demand forecasting, and coordinates distribution across buyers, transporters, and sellers—all within low-connectivity environments.',
    markers: ['Offline-first data ingestion (USSD + mobile)', 'AI-driven pricing and demand signals', 'Logistics coordination embedded into system'],
    impact: 'Reduced post-harvest loss. Fairer pricing. Predictable supply chains.',
  },
]

export const partnerCategories: PartnerCategory[] = [
  {
    title: 'Financial Infrastructure',
    description: 'Architecture support for institutions modernizing core transaction flows, security controls, and intelligent decision layers.',
    references: ['Regional banking integrations', 'Confidential risk analysis workloads', 'Operational resilience tooling'],
  },
  {
    title: 'Energy & Utilities',
    description: 'Systems for distributed monitoring, edge inference, and utility-grade orchestration in unstable grid environments.',
    references: ['Grid edge intelligence pilots', 'Telemetry aggregation nodes', 'Failure prediction pipelines'],
  },
  {
    title: 'Agricultural Networks',
    description: 'Low-connectivity systems linking producers, transporters, and buyers through reliable data infrastructure.',
    references: ['Offline procurement tooling', 'Demand forecasting signals', 'Cold-chain coordination systems'],
  },
  {
    title: 'Technology Platforms',
    description: 'Select partners building foundational hardware, cloud, and open-source capabilities that strengthen deployment quality.',
    references: ['Cloud and bare-metal providers', 'Secure compute ecosystems', 'Embedded systems toolchains'],
  },
]

export const insights: Insight[] = [
  {
    title: 'Why Most AI Fails in Low-Bandwidth Environments',
    type: 'Field Briefing',
    summary: 'A systems-level breakdown of where cloud-first assumptions collapse once connectivity becomes intermittent and data delivery loses consistency.',
  },
  {
    title: 'Confidential Computing in Emerging Markets',
    type: 'Technical Note',
    summary: 'How enclave-backed execution changes the security model for regulated infrastructure without sacrificing deployability.',
  },
  {
    title: 'Designing USSD Systems for Intelligent Workloads',
    type: 'Architecture Memo',
    summary: 'Patterns for routing low-bandwidth user input into observable, policy-constrained intelligence systems.',
  },
]

export const operatingPrinciples: OperatingPrinciple[] = [
  {
    label: 'Execution isolation',
    text: 'Hardware-backed boundaries for sensitive inference, transaction processing, and privileged system operations.',
  },
  {
    label: 'Asynchronous pipelines',
    text: 'Throughput-optimized architectures that preserve resilience under unreliable networks and variable load.',
  },
  {
    label: 'Observable state',
    text: 'Auditable transitions, measurable system health, and operational clarity across every service boundary.',
  },
]
