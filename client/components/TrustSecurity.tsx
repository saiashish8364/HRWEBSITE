import { Lock, Zap, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Faster Hiring",
    description: "Average reduction in time-to-hire",
  },
  {
    icon: Zap,
    value: "85%",
    label: "Higher Engagement",
    description: "Improvement in employee satisfaction",
  },
  {
    icon: Lock,
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Enterprise-grade reliability",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    description: "Serving organizations worldwide",
  },
];

export function TrustSecurity() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-orange-50/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Why Companies Trust Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary max-w-2xl">
            Built for Enterprise, Designed for Everyone
          </h2>
          <p className="text-lg text-foreground/60 text-center max-w-2xl">
            Security, reliability, and performance you can count on.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-lg font-semibold text-primary mb-2">
                  {stat.label}
                </p>
                <p className="text-foreground/60 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-16 p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Industry Certifications & Compliance
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We maintain the highest standards of security and compliance to protect your data.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["SOC 2 Type II", "ISO 27001", "GDPR Compliant", "HIPAA Ready"].map(
              (cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Lock className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-semibold text-primary text-sm">{cert}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
