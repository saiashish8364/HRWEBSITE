import { Header } from "@/components/Header";
import { Services as ServicesSection } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { CheckCircle, Zap, Shield } from "lucide-react";

export default function Services() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy HR solutions in days, not months. Our intuitive platform gets your team productive immediately.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, compliance certifications, and regular security audits.",
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Our clients see 40% reduction in time-to-hire and 85% improvement in employee satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section for Services */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Our Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6 leading-tight">
              Complete HR Solutions for Your Organization
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              From recruitment to retention, our comprehensive platform covers every aspect of human resources management with powerful tools designed to scale with your business.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesSection />

        {/* Benefits Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-orange-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Why Choose Infosage?
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                We combine cutting-edge technology with exceptional customer support to deliver real value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-orange-50/50 to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Quick & Easy Implementation
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  Our dedicated implementation team ensures a smooth transition with minimal disruption to your operations.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Week 1: Assessment & Planning",
                    "Week 2-3: Configuration & Customization",
                    "Week 4: Training & Launch Support",
                    "Ongoing: Premium Customer Success",
                  ].map((step, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <p className="text-foreground font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[400px] animate-slide-left">
                <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-4">30</div>
                    <p className="text-lg text-foreground/70">Days to Full Implementation</p>
                    <p className="text-sm text-foreground/60 mt-4">Industry-leading speed and expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
