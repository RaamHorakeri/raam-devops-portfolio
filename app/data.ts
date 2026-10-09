export const profile = {
  name: "Ramesh Horakeri",
  role: "DevOps Engineer",
  experience: "4+ years",
  email: "raamdevopstech@gmail.com",
  phone: "+91 84950 35354",
  phoneHref: "tel:+918495035354",
  github: "https://github.com/RaamHorakeri",
  githubHandle: "RaamHorakeri",
  summary:
    "DevOps Engineer with 4+ years of hands-on experience in cloud infrastructure, CI/CD automation, containerization, Kubernetes, Linux administration, monitoring and production support.",
};

export const stats = [
  { value: "4+", label: "Years in DevOps" },
  { value: "15+", label: "Services automated" },
  { value: "40%", label: "Faster deployments" },
  { value: "3", label: "Cloud platforms" },
];

export const skills = [
  { category: "Cloud Platforms", tools: ["AWS", "Microsoft Azure", "DigitalOcean"] },
  { category: "Operating Systems", tools: ["Linux", "Ubuntu", "Windows Server"] },
  { category: "Version Control", tools: ["Git", "GitHub", "GitLab", "Bitbucket"] },
  { category: "CI/CD", tools: ["Jenkins", "GitLab CI/CD"] },
  { category: "Build Tools", tools: ["Maven", "npm", "pip", "Go (go build, Go modules)"] },
  { category: "Containerization", tools: ["Docker", "Docker Compose"] },
  { category: "Container Orchestration", tools: ["Kubernetes", "OpenShift"] },
  { category: "Package Management", tools: ["Helm Charts"] },
  { category: "Infrastructure as Code", tools: ["Terraform"] },
  { category: "Configuration Management", tools: ["Ansible"] },
  { category: "Scripting", tools: ["Bash", "Shell Scripting"] },
  { category: "Monitoring & Visualization", tools: ["Prometheus", "Grafana"] },
  { category: "Logging", tools: ["Loki"] },
  { category: "Code Quality", tools: ["SonarQube"] },
  { category: "Security & Vulnerability Scanning", tools: ["Trivy"] },
  { category: "Artifact Management", tools: ["JFrog Artifactory"] },
  { category: "Web Servers & Reverse Proxy", tools: ["Nginx"] },
  { category: "API Gateway & Traffic Routing", tools: ["Cilium Gateway API", "Kong", "Envoy Gateway"] },
  { category: "GitOps & Deployment Management", tools: ["Argo CD"] },
  { category: "DNS & SSL/TLS", tools: ["DNS configuration", "Let's Encrypt", "cert-manager", "TLS certificates"] },
  { category: "Cloud Storage", tools: ["Amazon S3", "Object Storage"] },
  { category: "Databases", tools: ["PostgreSQL", "MongoDB"] },
  { category: "Networking", tools: ["Load Balancers", "Ingress", "HTTP/HTTPS", "gRPC", "WebSockets"] },
  { category: "Collaboration & Ticketing", tools: ["Jira", "Microsoft Teams"] },
  { category: "Cloud & Cluster CLI Tools", tools: ["AWS CLI", "Azure CLI", "doctl", "kubectl", "Helm CLI"] },
  { category: "AI-Assisted DevOps", tools: ["MCP", "AI-powered automation"] },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  duration: string;
  current?: boolean;
  highlights: string[];
  achievements?: { value: string; text: string }[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    company: "Enfec Solutions",
    role: "DevOps Engineer",
    period: "Oct 2024 – Present",
    duration: "2 yrs",
    current: true,
    highlights: [
      "Manage cloud infrastructure and Linux servers across Azure and DigitalOcean, automated with Terraform, Ansible and Shell scripting.",
      "Design and maintain CI/CD pipelines in Jenkins and GitLab CI/CD for build, deployment and release, shipping to Kubernetes with Helm charts.",
      "Build Docker containerized applications and run workloads on Kubernetes — Deployments, Services, ConfigMaps, Secrets, Ingress, HPA, PVC, RBAC and Gateway API.",
      "Operate DigitalOcean Kubernetes clusters, container registries, load balancers, storage and DNS.",
      "Configure NGINX reverse proxy, DNS records, SSL/TLS certificates and domain routing; route traffic with Cilium Gateway API and API gateways.",
      "Troubleshoot HTTP/HTTPS, gRPC, WebSocket and API traffic; run observability with Prometheus, Grafana and Loki.",
    ],
    achievements: [
      { value: "40%", text: "reduction in deployment time through Jenkins and CI/CD automation" },
      { value: "15+", text: "services deployed automatically with Jenkins, Docker, Kubernetes and Helm" },
    ],
    stack: ["Azure", "DigitalOcean", "Kubernetes", "Helm", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Cilium", "Grafana"],
  },
  {
    company: "Trophosphere Solution Pvt. Ltd.",
    role: "DevOps / Cloud Engineer",
    period: "Jul 2024 – Aug 2024",
    duration: "2 mos",
    highlights: [
      "Worked with AWS cloud infrastructure including EC2 and EKS.",
      "Assisted with VPC, IAM, S3, CloudWatch and load balancing for application environments.",
      "Supported Amazon EKS workloads, cloud deployments and troubleshooting.",
    ],
    stack: ["AWS", "EC2", "EKS", "VPC", "IAM", "S3", "CloudWatch"],
  },
  {
    company: "Pentagram Infotech Pvt. Ltd.",
    role: "DevOps Engineer",
    period: "Jun 2022 – Jun 2024",
    duration: "2 yrs",
    highlights: [
      "Managed Linux servers and application infrastructure for development and production environments.",
      "Created and maintained Jenkins CI/CD pipelines to automate application build and deployment.",
      "Used Git and GitHub for source control and release workflows; containerized applications with Docker.",
      "Assisted in managing Kubernetes workloads, services, configurations and deployments.",
      "Configured NGINX reverse proxy, DNS, SSL certificates and application routing on AWS.",
      "Performed server health monitoring, log analysis, troubleshooting and resource optimization across dev, test and prod.",
    ],
    achievements: [
      { value: "35%", text: "less deployment effort through Jenkins pipeline automation" },
      { value: "12+", text: "deployment and release workflows automated with Jenkins and Shell" },
    ],
    stack: ["AWS", "Linux", "Jenkins", "Docker", "Kubernetes", "NGINX", "Shell", "GitHub"],
  },
];

export const projects = [
  {
    title: "Kubernetes & Cloud Infrastructure",
    description:
      "Managed Kubernetes environments with Helm — Ingress and Gateway API routing, TLS, DNS, load balancing, autoscaling, persistent storage and RBAC.",
    tags: ["Kubernetes", "Helm", "Gateway API", "HPA", "RBAC"],
    icon: "wheel",
  },
  {
    title: "CI/CD & Deployment Automation",
    description:
      "Designed automated deployment workflows from commit to cluster using Jenkins, Git, Docker, Helm and Kubernetes.",
    tags: ["Jenkins", "Docker", "Helm", "Git"],
    icon: "pipeline",
  },
  {
    title: "Infrastructure Monitoring",
    description:
      "Implemented Prometheus and Grafana monitoring with Loki for logs, giving teams dashboards and alerting across environments.",
    tags: ["Prometheus", "Grafana", "Loki"],
    icon: "chart",
  },
  {
    title: "Personal DevOps Projects",
    description:
      "Hands-on Kubernetes, Docker, CI/CD, cloud automation, Infrastructure as Code and Shell scripting projects on GitHub.",
    tags: ["IaC", "Terraform", "Shell", "Cloud"],
    icon: "code",
    link: "https://github.com/RaamHorakeri",
  },
];

export const education = {
  degree: "Bachelor of Engineering / Bachelor of Technology",
  school: "Visvesvaraya Technological University (VTU)",
  year: "2019",
};

export type FeaturedProject = {
  name: string;
  tagline: string;
  summary: string;
  useful: string[];
  steps: { title: string; text: string }[];
  features: string[];
  stack: string[];
  links: { label: string; href: string; primary?: boolean }[];
};

export const featured: FeaturedProject[] = [
  {
    name: "Infra Hub Center",
    tagline: "Monitoring, logging and operations. One console.",
    summary:
      "A self-hosted infrastructure monitoring and operations platform that brings metrics, logs, database observability, VM patching and access control for VMs, Docker and Kubernetes into a single console.",
    useful: [
      "Ends tool sprawl: metrics, logs, SSH access and patching live in one place instead of five dashboards.",
      "Secure by design: agents connect outbound, so no inbound ports are opened on your servers.",
      "Self-hosted with fleet-based plans and no per-GB ingest fees, so costs stay predictable.",
      "Try it risk-free: the live demo is pre-loaded with sample VMs, containers, clusters and databases.",
    ],
    steps: [
      {
        title: "Install agents",
        text: "Lightweight agents run on VMs (Linux, Windows, macOS), Docker hosts and inside Kubernetes clusters.",
      },
      {
        title: "Agents dial out",
        text: "Each agent opens an outbound WebSocket to the Go API, so there are no firewall rules or inbound ports.",
      },
      {
        title: "Collect & store",
        text: "Metrics, inventory, logs and database performance land in PostgreSQL behind the Go backend.",
      },
      {
        title: "Observe & act",
        text: "The Next.js console shows live dashboards and alerts; admins patch VMs with controlled reboots and run approved database operations.",
      },
      {
        title: "Stay compliant",
        text: "Every action passes Project → Group RBAC checks and is written to an append-only audit trail.",
      },
    ],
    features: [
      "VM, Docker & Kubernetes monitoring",
      "Real-time log aggregation",
      "PostgreSQL, MySQL, MongoDB & Redis observability",
      "VM patch management",
      "S3 storage monitoring",
      "Alerting",
      "RBAC & audit trail",
    ],
    stack: ["Go", "Next.js", "PostgreSQL", "WebSocket", "Docker Compose", "Kubernetes", "amd64 / arm64"],
    links: [
      { label: "Visit website", href: "https://infrahub-site.vercel.app/", primary: true },
      { label: "Live demo", href: "https://infrahubcentre.vercel.app/" },
    ],
  },
  {
    name: "AgentMesh",
    tagline: "Cross-platform device management & secure remote access.",
    summary:
      "A fleet management platform: install a lightweight agent on each device, then manage every Linux, Windows and macOS machine from a web dashboard or Android app. A phone can even route its internet through a trusted computer.",
    useful: [
      "Manage devices anywhere, even behind NAT or home routers, without opening a single inbound port.",
      "Run commands across the fleet safely: they are signed, streamed live and protected against replay.",
      "Exit-node mode: pair a phone by QR or 6-digit code and browse through your own computer's connection.",
      "Built for teams: Super Admin, Admin, Operator and Viewer roles with a tamper-evident audit log.",
    ],
    steps: [
      {
        title: "Enroll a device",
        text: "Create an enrollment token in the dashboard and install the agent with a one-line installer (.deb, .rpm, Windows Service or launchd).",
      },
      {
        title: "Secure handshake",
        text: "The agent proves its identity with a P-256 key and receives a short-lived token, after admin approval.",
      },
      {
        title: "Always connected",
        text: "Agents dial out to the Go control plane over WSS + Protobuf, sending heartbeats and inventory; NATS fans out events.",
      },
      {
        title: "Command & control",
        text: "Operators run signed commands with live output, cancel and timeouts from the React dashboard or Android app.",
      },
      {
        title: "Phone exit node",
        text: "The Android app scans a QR code and tunnels the phone's traffic through an agent device, reconnecting automatically.",
      },
    ],
    features: [
      "Linux, Windows & macOS agents",
      "Zero inbound ports",
      "Signed remote commands",
      "Android control app",
      "Phone exit node (VPN)",
      "RBAC & hash-chained audit log",
    ],
    stack: ["Go", "PostgreSQL", "NATS", "Protobuf / WSS", "React", "Android", "Docker", "Kubernetes", "Cloudflare Tunnel"],
    links: [
      { label: "Visit website", href: "https://agentmeshvpn.vercel.app", primary: true },
      { label: "Live demo", href: "https://agentmeshvpn.vercel.app/connect?demo=1" },
    ],
  },
];
