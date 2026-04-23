const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm Deepak Yadav, a passionate BSIT student with a strong foundation in{" "}
              <span className="text-primary font-semibold">DevOps</span> and{" "}
              <span className="text-primary font-semibold">CyberSecurity</span>. 
              My expertise lies in building secure, automated, and scalable cloud infrastructure.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              With hands-on experience in{" "}
              <span className="text-primary font-semibold">Kubernetes</span>,{" "}
              <span className="text-primary font-semibold">CI/CD pipelines</span>, and{" "}
              <span className="text-primary font-semibold">DevSecOps</span> practices, 
              I focus on integrating security into every phase of the development lifecycle.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My projects demonstrate real-world applications of cloud-native technologies, 
              security automation, and observability tools like Prometheus, Grafana, and Loki. 
              I'm committed to continuous learning and implementing cutting-edge solutions 
              in DevOps and Cloud Security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
