import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 mb-8">
            <span className="text-5xl font-bold text-accent">404</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-foreground/60 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Return Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
