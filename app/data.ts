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
  { title: "Cloud Platforms", icon: "cloud", items: ["AWS", "Azure", "DigitalOcean"] },
  { title: "CI/CD & DevOps", icon: "pipeline", items: ["Jenkins", "GitLab CI/CD", "GitHub", "Git"] },
  { title: "Containers & Orchestration", icon: "container", items: ["Docker", "Kubernetes", "Helm"] },
  { title: "Infrastructure as Code", icon: "code", items: ["Terraform", "Ansible", "Shell Scripting"] },
  { title: "Monitoring & Observability", icon: "chart", items: ["Prometheus", "Grafana", "Loki"] },
  { title: "Networking", icon: "network", items: ["NGINX", "DNS", "SSL/TLS", "Load Balancers", "Reverse Proxy"] },
  {
    title: "Kubernetes",
    icon: "wheel",
    items: ["Ingress", "Gateway API", "Cilium", "Kong", "RBAC", "HPA", "PVC", "ConfigMaps", "Secrets"],
  },
  { title: "AWS Services", icon: "server", items: ["EC2", "EKS", "VPC", "IAM", "S3", "CloudWatch"] },
  { title: "Operating Systems", icon: "terminal", items: ["Linux", "Ubuntu", "Red Hat"] },
  {
    title: "Protocols & Ops",
    icon: "bolt",
    items: ["gRPC", "WebSocket", "API Gateway", "Production Troubleshooting"],
  },
] as const;

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
