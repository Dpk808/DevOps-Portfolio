import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.85), rgba(10, 15, 30, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            Deepak Yadav
          </h1>
          <p className="text-xl md:text-3xl text-primary mb-8 font-semibold">
            Securing the Cloud through Automation
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            BSIT Student | DevSecOps Engineer
            <br />
            Specializing in Kubernetes, CI/CD & Cloud Security
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
            >
              View Projects
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
