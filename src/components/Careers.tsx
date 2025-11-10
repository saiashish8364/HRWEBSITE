import { MapPin, Briefcase, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Senior Product Manager",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Lead product strategy for our core HR platform and drive innovation across our customer base.",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "Build scalable, performant systems that power HR solutions for thousands of companies worldwide.",
  },
  {
    title: "Customer Success Manager",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Own the customer relationship and ensure clients achieve their HR management goals.",
  },
  {
    title: "UX/UI Designer",
    location: "Remote",
    type: "Full-time",
    description:
      "Design intuitive, beautiful interfaces that help HR teams work more effectively.",
  },
  {
    title: "Sales Executive",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Drive enterprise sales growth and build lasting relationships with forward-thinking companies.",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "Manage cloud infrastructure and ensure reliability for our mission-critical HR platform.",
  },
];

export function Careers() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-orange-50/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Join Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary max-w-2xl">
            Grow Your Career at Infosage
          </h2>
          <p className="text-lg text-foreground/60 text-center max-w-2xl">
            We're looking for talented individuals who are passionate about transforming the HR industry. Explore our open positions and become part of our mission.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full p-6 rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300 hover:border-accent/50 cursor-pointer hover:-translate-y-1">
                {/* Job Type Badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                    {job.type}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {job.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-foreground/60 mb-4">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{job.location}</span>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* View Details Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-300 group/link"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Don't see the right role?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate people to join our team. Send us your resume and let's talk about how you can make an impact.
          </p>
          <button className="px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Send Your Resume
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
