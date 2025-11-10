import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Award, Users, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Infosage Solutions was founded with a vision to revolutionize HR technology.",
    },
    {
      year: "2019",
      title: "Series A Funding",
      description: "Raised $5M to accelerate product development and market expansion.",
    },
    {
      year: "2021",
      title: "500+ Customers",
      description: "Reached the milestone of 500+ enterprise clients across multiple industries.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 15 countries with multilingual support.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product quality to customer service.",
    },
    {
      icon: Users,
      title: "People-First",
      description: "Our success is built on the success of our customers and their teams.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of industry trends and customer needs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6 leading-tight">
              Transforming HR, One Organization at a Time
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              At Infosage Solutions, we believe that great HR technology should empower people, not burden them. Since our founding, we've been dedicated to creating intuitive, powerful solutions that help organizations build stronger teams and happier workplaces.
            </p>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Timeline Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                From a small startup to a trusted HR partner for enterprises worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Year Badge */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {milestone.year}
                  </div>

                  <div className="pt-12">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Everything we do is guided by our commitment to these principles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-orange-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Leadership Team
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Experienced leaders dedicated to transforming the HR industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO & Co-Founder",
                  background: "Former VP at leading HR tech company with 15+ years experience",
                },
                {
                  name: "Michael Chen",
                  role: "CTO & Co-Founder",
                  background: "Tech innovator with expertise in scalable SaaS platforms",
                },
                {
                  name: "Emily Rodriguez",
                  role: "VP of Customer Success",
                  background: "Dedicated to ensuring customer success and satisfaction",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {member.background}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
