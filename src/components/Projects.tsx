import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Jenkins CI/CD Pipeline with GitHub Webhooks",
      description:
        "This project showcases a simple yet effective CI/CD setup using Jenkins, GitHub Webhooks, and ngrok. Jenkins is configured to automatically pull and build code from GitHub whenever changes are pushed, thanks to webhooks exposed via ngrok. This setup demonstrates the fundamentals of Continuous Integration and Deployment, automating the entire code-to-build process for real-world DevOps learning.",
      tags: ["Jenkins", "GitHub", "CI/CD", "ngrok", "Automation"],
      githubLink: "#",
    },
    {
      title: "File Upload Server on Kubernetes",
      description:
        "A Flask-based file upload application deployed on Kubernetes with Persistent Volumes (PV) and Persistent Volume Claims (PVC) for durable file storage. The Docker image is pushed to DockerHub and deployed via YAML manifests defining the Deployment, Service, and PVC. Files remain persistent across pod restarts, ensuring reliability and demonstrating cloud-native storage management on Kubernetes.",
      tags: ["Flask", "Kubernetes", "Docker", "PV/PVC", "Storage"],
      githubLink: "https://github.com/Dpk808/PV-Kubernetes-Begineer.2",
    },
    {
      title: "Node.js + MongoDB on Local Kubernetes Cluster",
      description:
        "Deployed a Node.js web app with MongoDB on a local Minikube cluster using Kubernetes manifests for deployments, services, secrets, and configs. This project highlights multi-container orchestration, secret management, and external access through port forwarding — a full-stack microservice setup for local DevOps experimentation.",
      tags: ["Node.js", "MongoDB", "Kubernetes", "Minikube", "Secrets"],
      githubLink: "https://github.com/Dpk808/Int1_Deploying-node-app-with-database-on-local-Kubernetes-cluster.1",
    },
    {
      title: "Logs and Metrics Visualization for Upload Server",
      description:
        "Integrated Loki, Prometheus, and Grafana to monitor and visualize logs and metrics of the Flask upload server on Kubernetes. Loki handled log aggregation, Prometheus scraped performance metrics, and Grafana unified both for observability dashboards. This provided real-time insights into application performance, uptime, and errors — achieving end-to-end monitoring and troubleshooting visibility.",
      tags: ["Loki", "Prometheus", "Grafana", "Monitoring", "Observability"],
      githubLink: "https://github.com/Dpk808/Grafana_on_UploadServer",
    },
    {
      title: "Secure DevSecOps Pipeline for Flask App on Kubernetes",
      description:
        "Developed a Flask-based file upload app deployed on Kubernetes with a GitHub Actions-powered CI/CD pipeline integrating Trivy, Bandit, and Snyk for vulnerability scanning across code, dependencies, and containers. Monitoring and runtime threat detection were handled by Prometheus, Grafana, Loki, and Falco. This project demonstrates a complete DevSecOps lifecycle—security integrated from build to runtime.",
      tags: ["DevSecOps", "Trivy", "Snyk", "Bandit", "Falco", "GitHub Actions"],
      githubLink: "https://github.com/Dpk808/DevSecOps-uploadServer",
    },
    {
      title: "SonarCloud-Integrated DevSecOps Workflow",
      description:
        "Built a DevSecOps workflow integrating SonarCloud with GitHub for continuous code quality and vulnerability analysis. Automated builds, tests, and container deployments using GitHub Actions. SonarCloud provided detailed insights into maintainability, security, and code health, ensuring continuous integration and continuous security (CI + CS) within the pipeline.",
      tags: ["SonarCloud", "GitHub Actions", "Code Quality", "Security", "CI/CS"],
      githubLink: "https://github.com/Dpk808/DevSecOps-Sonarcube",
    },
    {
      title: "AI-Ops Pipeline for Anomaly Detection and Predictive Monitoring",
      description:
        "Designed an AI-Ops pipeline combining Kubernetes (Colima), Prometheus, Loki, and Grafana for anomaly detection and predictive analytics. Implemented lightweight ML models to forecast system trends and detect unusual behavior, triggering Slack alerts for proactive incident response. This project represents the fusion of AI, DevOps, and observability for intelligent operations.",
      tags: ["AI-Ops", "ML", "Anomaly Detection", "Slack", "Predictive Analytics"],
      githubLink: "https://github.com/Dpk808/AI-Ops_Slack-Alerts",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:glow-effect group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubLink && project.githubLink !== "#" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
