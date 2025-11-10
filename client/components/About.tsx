import { CheckCircle } from "lucide-react";

export function About() {
  const features = [
    "Cloud-based platform accessible from anywhere",
    "Enterprise-grade security and data protection",
    "Seamless integrations with your existing tools",
    "24/7 customer support and implementation assistance",
    "Regular updates and feature enhancements",
    "Customizable workflows for your unique needs",
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text */}
          <div className="flex flex-col gap-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                  About Infosage
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Reimagining HR for the Modern Workforce
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Founded on the belief that great HR technology should be simple, powerful, and accessible to all organizations, Infosage Solutions has been transforming how companies manage their most important asset: their people.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Our mission is to empower HR teams with intelligent tools that reduce administrative burden and unlock strategic value, allowing them to focus on what matters most: building exceptional teams and fostering workplace cultures where employees thrive.
            </p>

            {/* Features List */}
            <div className="grid gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative h-[500px] animate-slide-left">
            {/* Main gradient box */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-2xl overflow-hidden">
              {/* Decorative elements inside */}
              <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/20 rounded-full blur-3xl" />

              {/* Content overlay */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center text-white">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 border-2 border-accent mb-4">
                    <span className="text-3xl font-bold">IS</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">Infosage Solutions</h3>
                <p className="text-lg text-white/90 mb-8 max-w-xs">
                  Transforming Human Resources through innovative technology
                </p>
                
                {/* Trust badges */}
                <div className="space-y-4 w-full">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Industry Leader
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                      Trusted by Global Enterprises
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
