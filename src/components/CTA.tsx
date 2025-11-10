import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-orange-50/50 to-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent opacity-95" />
          
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl translate-y-1/2" />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your HR?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Join hundreds of companies that have streamlined their HR operations and improved employee engagement with Infosage Solutions. Get started today with a free demo tailored to your needs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 rounded-lg bg-accent text-primary font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>

              {/* Trust text */}
              <p className="mt-8 text-primary-foreground/70 text-sm">
                ✓ No credit card required · ✓ 14-day free trial · ✓ 24/7 support included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
