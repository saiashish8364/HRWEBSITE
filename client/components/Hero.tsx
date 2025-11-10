import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background gradient with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-orange-50" />
      
      {/* Animated background shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div className="flex flex-col gap-6 animate-fade-in">
          <div className="inline-flex items-center gap-3 w-fit">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Welcome to Infosage
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-primary">
            Transform Your <span className="text-accent">Workforce</span> with Modern HR Solutions
          </h1>

          <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
            Streamline recruitment, engagement, and talent management with our comprehensive HR platform. Built for forward-thinking organizations that value efficiency and employee success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-foreground/60">Companies Trust Us</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-foreground/60">Active Users</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-foreground/60">Uptime</div>
            </div>
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="relative h-[400px] md:h-[500px] animate-slide-left">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
          <div className="absolute inset-4 bg-gradient-to-t from-primary to-primary/30 rounded-xl shadow-2xl" />
          
          {/* Decorative cards */}
          <div className="absolute top-12 left-4 w-40 h-32 bg-white rounded-lg shadow-lg p-4 border border-border/50 animate-slide-up">
            <div className="text-2xl font-bold text-primary mb-2">98%</div>
            <div className="text-xs text-foreground/60">Employee Satisfaction</div>
          </div>

          <div className="absolute bottom-12 right-4 w-48 h-32 bg-white rounded-lg shadow-lg p-4 border border-border/50 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-accent" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-primary">Streamlined Process</div>
                <div className="text-xs text-foreground/60">Reduce hiring time by 70%</div>
              </div>
            </div>
            <div className="w-full h-1 bg-border/30 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
