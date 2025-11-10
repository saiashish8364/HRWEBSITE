import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    role: "HR Director",
    company: "TechCorp Inc.",
    image: "JM",
    content:
      "Infosage Solutions transformed our HR operations. We reduced hiring time by 60% and employee satisfaction increased dramatically. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "People Operations Manager",
    company: "FinanceFlow",
    image: "SC",
    content:
      "The platform is intuitive and powerful. Our team adapted quickly, and the support team is exceptional. Worth every penny.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Chief People Officer",
    company: "GlobalSoft Solutions",
    image: "MR",
    content:
      "Best HR investment we've made. The analytics features alone have given us insights we never had before. Game-changing platform.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              What Our Clients Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary max-w-2xl">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-foreground/60 text-center max-w-2xl">
            See what our customers have to say about their experience with Infosage Solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
