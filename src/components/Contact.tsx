import { Mail, Github, Linkedin, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:dpkydv880@gmail.com",
      label: "dpkydv880@gmail.com",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Dpk808",
      label: "github.com/Dpk808",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/deepak-yadav-b50099357/",
      label: "linkedin.com/in/deepak-yadav-b50099357",
    },
    {
      name: "TryHackMe",
      icon: <Shield className="w-5 h-5" />,
      href: "https://tryhackme.com/p/dpkydv880",
      label: "tryhackme.com/p/dpkydv880",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-foreground/80 mb-6">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out through any of these channels!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:glow-effect group flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold mb-1">{link.name}</h3>
                <p className="text-sm text-foreground/60">{link.label}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
