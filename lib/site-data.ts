export const siteConfig = {
  name: "Jayateja Alugolu",
  shortName: "JA",
  role: "Software Engineer",
  roles: ["Backend Engineer", "Full Stack Engineer", "AI / Data Engineer", "Forward-Deployed Engineer"],
  headline: "I turn complex systems into software that teams can trust in production.",
  intro:
    "Software engineer with 5 years across fintech, healthcare, cybersecurity, telecom, and enterprise modernization — working from product UI and APIs down to distributed systems, cloud infrastructure, data pipelines, and production reliability.",
  domain: "https://jayateja-portfolio-gamma.vercel.app/",
  email: "alugolu.jayateja@gmail.com",
  phoneDisplay: "+1 506-897-5428",
  phoneHref: "+15068975428",
  github: "https://github.com/jayateja-a",
  linkedin: "https://linkedin.com/in/jayateja-alugolu",
  resume: "/Jayateja_Alugolu_Resume.pdf",
  profileImage: "/profile.png",
  location: "Canada",
};

export type ProjectCategory = "Java" | "Python / AI" | "Full Stack" | "Cloud / DevOps";

export const projects = [
  {
    title: "Serverless Threat Detection — AWS",
    description:
      "AI-driven intrusion detection using Random Forest classification and Isolation Forest anomaly detection, with AWS Glue and SageMaker for analysis, DynamoDB for real-time telemetry, and Lambda + EventBridge for automated workflows.",
    category: "Cloud / DevOps" as ProjectCategory,
    tags: ["Python", "AWS", "SageMaker", "Random Forest", "Isolation Forest"],
    github: "https://github.com/jayateja-a/Cloud_based_Intrusion_Detection_system",
    live: "#contact",
    signal: "ML + cloud security",
  },
  {
    title: "Threat Intelligence Platform",
    description:
      "A security intelligence platform combining FastAPI services, Elasticsearch search, Kafka event streaming, Laravel UI workflows, monitoring, and automated testing for large-scale social threat data.",
    category: "Python / AI" as ProjectCategory,
    tags: ["FastAPI", "Elasticsearch", "Kafka", "pytest", "Prometheus"],
    github: siteConfig.github,
    live: "#journey",
    signal: "90%+ API test coverage",
  },
  {
    title: "Clinical Media & Interoperability Platform",
    description:
      "A healthcare engineering system spanning Spring Boot APIs, TypeScript migration pipelines, DICOM/FHIR workflows, media compression, PostgreSQL metadata, Azure storage, AKS, Helm, Terraform, and CI/CD.",
    category: "Full Stack" as ProjectCategory,
    tags: ["Spring Boot", "TypeScript", "FHIR", "DICOM", "Azure"],
    github: siteConfig.github,
    live: "#journey",
    signal: "Migration time −50%",
  },
  {
    title: "BankAPI — Modular Financial Backend",
    description:
      "A Java Spring Boot banking API for account creation, fund transfers, and transaction history. The design focuses on idempotent operations, validation, error handling, rate limiting, and transaction consistency when requests are retried or duplicated.",
    category: "Java" as ProjectCategory,
    tags: ["Java", "Spring Boot", "REST", "Transactions", "Swagger"],
    github: siteConfig.github,
    live: "#contact",
    signal: "Reliable transaction design",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    marker: "01",
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    marker: "02",
    skills: ["Spring Boot", "Hibernate", "Django", "Flask", "FastAPI", "Node.js", "Microservices", "REST", "SOAP", "GraphQL", "JSON"],
  },
  {
    title: "Frontend & Product",
    marker: "03",
    skills: ["React", "Redux", "Angular", "TypeScript", "Responsive UI", "API Integration"],
  },
  {
    title: "Cloud & Platform",
    marker: "04",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jenkins", "GitHub Actions", "Azure DevOps"],
  },
  {
    title: "Data & Messaging",
    marker: "05",
    skills: ["MySQL", "PostgreSQL", "DynamoDB", "Redis", "Kafka", "Elasticsearch", "ETL Pipelines"],
  },
  {
    title: "Engineering Practice",
    marker: "06",
    skills: ["Distributed Systems", "Security", "Observability", "Testing", "Linux", "Agile", "System Design", "DSA", "Scrum", "Git", "Postman", "Swagger", "Teamwork"],
  },
] as const;

export const roleLenses = [
  {
    code: "BE",
    title: "Backend systems",
    description: "Java/Spring Boot services, reliable APIs, transaction safety, data consistency, caching, messaging, and production troubleshooting.",
    evidence: "Fintech transactions · enterprise APIs · DB performance · distributed systems",
  },
  {
    code: "FS",
    title: "Full-stack products",
    description: "React, Redux, Angular, TypeScript, API integration, state management, validation, and product workflows backed by production services.",
    evidence: "Fintech UI · security dashboards · telecom portals · clinical workflows",
  },
  {
    code: "AI",
    title: "AI & data engineering",
    description: "Applied ML, NLP coursework, threat intelligence, search systems, ETL/data migration, anomaly detection, and AI-assisted development workflows.",
    evidence: "Random Forest · Isolation Forest · Elasticsearch · NLP · SageMaker",
  },
  {
    code: "FD",
    title: "Forward-deployed engineering",
    description: "Comfortable moving across product, backend, cloud, data, deployment, debugging, documentation, and stakeholder problems when the solution is not neatly scoped.",
    evidence: "Modernization · migrations · production support · cloud ownership · KT",
  },
] as const;

export const careerJourney = [
  {
    period: "2019 — 2022",
    company: "Infosys Limited",
    title: "Systems Engineer → Senior Software Engineer",
    kind: "Enterprise modernization",
    chapter: "Modernizing without breaking the system around it.",
    story:
      "Worked on BNSF Railway workforce-management modernization, connecting Spring Boot services to legacy DB2/mainframe and SOAP systems while supporting production traffic during the transition.",
    highlights: [
      "Integrated DB2-backed mainframe services with Spring Boot microservices, maintaining SOAP integrations while gradually replacing legacy service orchestration components",
      "Reduced recurring production incidents by 25% through troubleshooting, automation, monitoring, and delivery improvements.",
      "Promoted to Senior Software Engineer as scope and ownership increased.",
    ],
    stack: ["Java", "Spring Boot", "DB2", "SOAP", "JavaScript", "CI/CD"],
  },
  {
    period: "2022 — 2023",
    company: "Tata Consultancy Services",
    title: "Senior Systems Engineer",
    kind: "Scale & performance",
    chapter: "Finding the bottleneck behind enterprise-scale latency.",
    story:
      "Built and supported backend services for the British Telecom Global Services Portal, with responsibility spanning APIs, testing, production issues, database performance, code review, and mentoring.",
    highlights: [
      "Built Spring Boot APIs with request validation, pagination, and rate limiting to support integrations across BT portal services.",
      "Independently resolved Angular Spring Boot integration defects, fixing JSON deserialization, null-field handling, and inconsistent HTTP status codes; added regression tests.",
      "Investigated production issues and contributed to technical decisions across distributed teams.",
      "Mentored junior engineers and contributed to architecture and technical decisions across distributed teams.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "Oracle", "Hibernate", "JUnit"],
  },
  {
    period: "May — Aug 2024",
    company: "Quber Technologies",
    title: "Software Engineer Intern",
    kind: "Fintech reliability",
    chapter: "Making money movement safe under retries and concurrency.",
    story:
      "Worked across backend and React/Redux product flows for employee savings and financial transactions, focusing on transaction orchestration, authentication, data consistency, and production-ready API behavior.",
    highlights: [
      "Handled idempotency, concurrent requests, validation, centralized exceptions, and Spring transaction boundaries.",
      "Reduced API latency by 30% through MySQL optimization, Redis caching, and service tuning.",
      "Supported AWS workloads and staging-to-production delivery workflows.",
    ],
    stack: ["Spring Boot", "React", "Redux", "Redis", "MySQL", "AWS"],
  },
  {
    period: "Jan — Apr 2025",
    company: "Canadian Institute for Cybersecurity",
    title: "Full Stack Security Developer Intern",
    kind: "Security data systems",
    chapter: "Turning noisy threat data into something analysts can search and act on.",
    story:
      "Built features across a Social Threat Intelligence platform, from Laravel interfaces and map-based insights to FastAPI services, Elasticsearch search, Kafka streams, observability, and Kubernetes deployments.",
    highlights: [
      "Migrated Flask-style services toward asynchronous FastAPI microservices with modular validation and data access.",
      "Reached 90%+ unit test coverage with pytest and FastAPI TestClient.",
      "Added Kafka event flows plus Prometheus/Grafana visibility for scalable processing and diagnosis.",
    ],
    stack: ["FastAPI", "Laravel", "Elasticsearch", "Kafka", "Docker", "Kubernetes"],
  },
  {
    period: "Oct 2025 — May 2026",
    company: "LightX Innovations",
    title: "Software Developer · Full-time contract",
    kind: "Healthcare platform ownership",
    chapter: "Taking a clinical application from backend features to cloud operating model.",
    story:
      "Owned work across a mobile ophthalmology platform: Spring Boot backend, FHIR/DICOM interoperability, TypeScript migration tooling, media processing, Azure infrastructure, tenant-aware Kubernetes deployments, Helm, Terraform, and CI/CD.",
    highlights: [
      "Cut legacy clinical data migration time by 50% with TypeScript processing pipelines and standardized media workflows.",
      "Automated build/test/deployment workflows with GitHub Actions and Azure DevOps, improving release efficiency by 40%.",
      "Completed the agreed contract scope and documented deployment, architecture, and operational workflows for handoff.",
    ],
    stack: ["Spring Boot", "TypeScript", "FHIR", "DICOM", "AKS", "Terraform"],
  },
] as const;

export const education = {
  school: "University of New Brunswick",
  location: "Canada",
  degree: "Master of Computer Science",
  period: "Jan 2024 — Aug 2025",
  note: "A systems-focused master’s that I deliberately combined with applied engineering internships in fintech and cybersecurity.",
  clusters: [
    { title: "Security & trust", courses: ["Foundations of Privacy", "Network Security", "Digital Forensics"] },
    { title: "AI & data", courses: ["Natural Language Processing", "Data Analytics", "Business Analytics"] },
    { title: "Cloud & scale", courses: ["Big Data Systems", "Cloud Information Management"] },
    { title: "Engineering", courses: ["Advanced Software Process", "Software Requirement Analysis"] },
  ],
};

export const careerContext = [
  {
    question: "Why did LightX conclude in May 2026?",
    answer:
      "LightX was a full-time contract engagement. The contract concluded after the agreed engineering scope was successfully completed, including backend/platform work, clinical data migration, Azure/Kubernetes deployment workflows, CI/CD, and operational documentation for handoff.",
  },
  {
    question: "How does the master’s fit with the 2024–2025 roles?",
    answer:
      "I completed my Master of Computer Science at UNB from January 2024 to August 2025. Quber and the Canadian Institute for Cybersecurity were applied engineering internships during that academic period, so the timeline reflects study plus real production-oriented work rather than a career gap.",
  },
  {
    question: "What about the period after the LightX contract?",
    answer:
      "The LightX scope ended in May 2026, and I am using the transition to target the right longer-term engineering team — especially roles where I can combine backend depth with cloud, full-stack delivery, data/AI, and direct problem ownership.",
  },
] as const;

export const hobbies = [
  { name: "Photography", detail: "composition, light, small details" },
  { name: "Cricket", detail: "strategy, timing, team energy" },
  { name: "Gym", detail: "consistency over intensity" },
  { name: "Movies", detail: "storytelling and visual craft" },
  { name: "Sports", detail: "competition and recovery" },
] as const;
