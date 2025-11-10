import {
  Users,
  Target,
  Zap,
  BarChart3,
  Clock,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    description:
      "Find and hire the best talent with AI-powered candidate matching and streamlined recruitment workflows.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Target,
    title: "Performance Management",
    description:
      "Set goals, track progress, and provide feedback with intuitive performance review tools.",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Employee Engagement",
    description:
      "Foster a positive workplace culture with recognition programs and engagement analytics.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "People Analytics",
    description:
      "Gain insights into your workforce with comprehensive analytics and real-time dashboards.",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Clock,
    title: "Time & Attendance",
    description:
      "Automate time tracking, attendance management, and shift scheduling with ease.",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description:
      "Stay compliant with robust security measures and automated regulatory compliance management.",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-blue-50/50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary max-w-2xl">
            Comprehensive HR Solutions for Every Challenge
          </h2>
          <p className="text-lg text-foreground/60 text-center max-w-2xl">
            From recruitment to retirement, we provide end-to-end HR management tools that scale with your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative animate-slide-up h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="h-full p-8 rounded-xl border border-border bg-white hover:shadow-2xl transition-all duration-500 hover:border-accent/50">
                  {/* Icon Background */}
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Learn more
                    <span>→</span>
                  </a>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
