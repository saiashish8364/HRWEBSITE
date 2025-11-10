import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">IS</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-primary text-sm leading-none">
              Infosage
            </span>
            <span className="text-accent font-semibold text-xs leading-none">
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 mr-40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-l font-medium text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div> */}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* <button className="w-full px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg transition-all duration-300 mt-4">
              Get Started
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
}
