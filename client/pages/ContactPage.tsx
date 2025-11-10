import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@infosage.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9 AM - 6 PM EST",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "San Francisco, CA",
      description: "Headquarters & Innovation Center",
    },
    {
      icon: Clock,
      title: "Support",
      value: "24/7 Available",
      description: "Round-the-clock customer support for all clients",
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
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6 leading-tight">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Have questions about our HR solutions? Want to schedule a demo? Reach out to our team and we'll get back to you promptly.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300 animate-slide-up text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {info.title}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{info.value}</p>
                    <p className="text-sm text-foreground/60">{info.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Contact Form and Map */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="demo">Schedule a Demo</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Map and Additional Info */}
              <div className="animate-slide-left">
                <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg mb-8 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-foreground/60">Map integration coming soon</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Multiple Locations
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        city: "San Francisco",
                        country: "USA",
                        office: "Headquarters",
                      },
                      {
                        city: "London",
                        country: "UK",
                        office: "European Office",
                      },
                      {
                        city: "Singapore",
                        country: "Singapore",
                        office: "APAC Office",
                      },
                    ].map((location, index) => (
                      <div
                        key={index}
                        className="pb-6 border-b border-border/50 last:border-0"
                      >
                        <p className="font-semibold text-primary">
                          {location.city}, {location.country}
                        </p>
                        <p className="text-sm text-foreground/60">
                          {location.office}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Quick answers to common questions about our platform and services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "What is the average implementation time?",
                  answer:
                    "Most organizations complete implementation in 30 days or less with our dedicated team supporting the process.",
                },
                {
                  question: "Do you offer a free trial?",
                  answer:
                    "Yes! We offer a 14-day free trial with full access to all features. No credit card required.",
                },
                {
                  question: "Is your platform secure?",
                  answer:
                    "Absolutely. We use enterprise-grade security with encryption, regular audits, and compliance certifications.",
                },
                {
                  question: "Can you integrate with our existing systems?",
                  answer:
                    "Yes, we integrate seamlessly with popular HR, payroll, and accounting systems via API or pre-built connectors.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border bg-white hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
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
