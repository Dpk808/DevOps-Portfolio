import { Server, Shield, Cloud, GitBranch, Container, Database, Lock, Eye } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps",
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      skills: ["Jenkins", "GitHub Actions", "CI/CD", "Automation", "Infrastructure as Code"],
    },
    {
      title: "Container Orchestration",
      icon: <Container className="w-8 h-8 text-primary" />,
      skills: ["Kubernetes", "Docker", "Minikube", "Helm", "Container Security"],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      skills: ["AWS", "Cloud Security", "Persistent Volumes", "Load Balancing", "Networking"],
    },
    {
      title: "Security",
      icon: <Shield className="w-8 h-8 text-primary" />,
      skills: ["DevSecOps", "Trivy", "Snyk", "Bandit", "Falco", "Vulnerability Scanning"],
    },
    {
      title: "Monitoring & Observability",
      icon: <Eye className="w-8 h-8 text-primary" />,
      skills: ["Prometheus", "Grafana", "Loki", "Log Aggregation", "Metrics Visualization"],
    },
    {
      title: "Databases & Backend",
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "Node.js", "Flask", "REST APIs"],
    },
    {
      title: "Security Tools",
      icon: <Lock className="w-8 h-8 text-primary" />,
      skills: ["SonarCloud", "Code Quality Analysis", "Secret Management", "Runtime Protection"],
    },
    {
      title: "AI-Ops",
      icon: <Server className="w-8 h-8 text-primary" />,
      skills: ["Anomaly Detection", "Predictive Analytics", "ML Models", "Slack Integrations"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:glow-effect animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground/80 text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
