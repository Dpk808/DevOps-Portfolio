import React, { useRef } from "react";
import { Award, CheckCircle2, Trophy, Flame, ChevronLeft, ChevronRight } from "lucide-react";

import KK_AWS from "../../Certificates/KK_100_Days_of_AWS.png";
import KK_AZURE from "../../Certificates/KK_100_Days_of_Azure.png";
import KK_ANSIBLE from "../../Certificates/KK_Ansible_Level1.png";
import KK_DOCKER from "../../Certificates/KK_Docker_Level1.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Cloud & DevOps",
      items: [
        "AWS Solutions Architect - Associate",
        "Crowdstrike University - Cloud Specialist",
        "Crowdstrike University - Falcon Administrator",
      ],
    },
    {
      title: "CyberSecurity",
      items: [
        "Introduction to Cybersecurity",
        "Ethical Hacker",
        "TryHackMe Active Learner",
      ],
    },
    {
      title: "Programming & Development",
      items: [
        "Become a Java Master",
        "Become a C Master",
        "Become a C++ Master",
        "SQL (Basics)",
      ],
    },
  ];

  const kodekloudChallenges = [
    {
      title: "AWS & Cloud",
      icon: "☁️",
      achievements: [
        { name: "50 Days AWS Challenge", completed: true },
        { name: "50 Days Azure Challenge", completed: true },
      ],
    },
    {
      title: "Infrastructure & Automation",
      icon: "⚙️",
      achievements: [
        { name: "Ansible Level 1 Challenge", completed: true },
        { name: "Ansible Level 2 Challenge", completed: true },
        { name: "40 Days Terraform Challenge", completed: true },
      ],
    },
    {
      title: "DevOps",
      icon: "🚀",
      achievements: [
        { name: "100 Days of DevOps", completed: true },
      ],
    },
  ];

  // KodeKloud certificate images and verification URLs (from Certificates/devops_certificates.md)
  const kodekloudCerts = [
    {
      title: "100 Days of Cloud (Azure)",
      img: KK_AZURE,
      url: "https://engineer.kodekloud.com/certificate-verification/5b191531-bc69-48c1-9d7f-1a30691529de",
    },
    {
      title: "100 Days of Cloud (AWS)",
      img: KK_AWS,
      url: "https://engineer.kodekloud.com/certificate-verification/94b224fe-de95-4b49-87a7-174a3e6aae8c",
    },
    {
      title: "Ansible - Level 1",
      img: KK_ANSIBLE,
      url: "https://engineer.kodekloud.com/certificate-verification/c936729e-8066-4e76-8ccd-3eaa82de50cd",
    },
    {
      title: "Docker - Level 1",
      img: KK_DOCKER,
      url: "https://engineer.kodekloud.com/certificate-verification/3dc2584a-ae09-4f1c-9967-b24578c63d15",
    },
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Certifications & Achievements
        </h2>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Award className="text-primary w-6 h-6" />
            Professional Certifications
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:glow-effect animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="text-primary w-6 h-6" />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KodeKloud Challenges */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Flame className="text-orange-500 w-6 h-6" />
            KodeKloud Challenges
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kodekloudChallenges.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-gradient-to-br from-card to-card/80 border border-primary/30 rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                  style={{ animationDelay: `${(index + certifications.length) * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.achievements.map((achievement) => (
                      <li key={achievement.name} className="flex items-start gap-3">
                        <Trophy className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{achievement.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KodeKloud Certifications - Horizontal Slider */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">Kodekloud Certifications</h3>
          <p className="text-center text-sm text-foreground/80 mb-4">Click a certificate to open the verification link.</p>

          <div className="relative max-w-5xl mx-auto">
            <button
              aria-label="Scroll left"
              onClick={() => scroll("left")}
              className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto no-scrollbar px-2 py-2 snap-x snap-mandatory touch-pan-x"
              style={{ scrollBehavior: "smooth" }}
            >
              {kodekloudCerts.map((c) => (
                <a
                  key={c.title}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[260px] md:min-w-[360px] snap-center bg-card border border-border rounded-lg overflow-hidden shadow-sm flex flex-col"
                >
                  <div className="bg-white p-4 flex items-center justify-center">
                    <img src={c.img} alt={c.title} className="max-h-56 md:max-h-72 w-auto object-contain" />
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-semibold">{c.title}</h4>
                    <p className="text-xs text-foreground/70 mt-1">View verification</p>
                  </div>
                </a>
              ))}
            </div>

            <button
              aria-label="Scroll right"
              onClick={() => scroll("right")}
              className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
