import { BlogCard } from "./BlogCard";

const blogs = [
  {
    id: "hr-transformation-2024",
    title: "The Future of HR: Transformation in 2024",
    excerpt:
      "Explore how AI and automation are reshaping HR departments and what it means for your organization's strategy.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "HR Trends",
    readTime: "8 min read",
  },
  {
    id: "employee-engagement-strategies",
    title: "5 Proven Strategies to Boost Employee Engagement",
    excerpt:
      "Discover actionable strategies that leading companies are using to increase employee engagement and retention rates.",
    author: "Michael Chen",
    date: "March 10, 2024",
    category: "Best Practices",
    readTime: "6 min read",
  },
  {
    id: "building-inclusive-workplace",
    title: "Building an Inclusive Workplace Culture",
    excerpt:
      "Learn how to create a workplace culture that celebrates diversity and fosters inclusion across all levels.",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    category: "Culture",
    readTime: "7 min read",
  },
];

export function BlogSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-blue-50/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Insights & Articles
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary max-w-2xl">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-foreground/60 text-center max-w-2xl">
            Industry insights, best practices, and HR trends from our experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard {...blog} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
