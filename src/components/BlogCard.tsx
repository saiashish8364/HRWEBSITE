import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  author,
  date,
  category,
  readTime,
}: BlogCardProps) {
  return (
    <Link
      to={`/blog/${id}`}
      className="group h-full rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-accent/50 hover:-translate-y-1"
    >
      {/* Featured Image */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
            {category}
          </span>
          <span className="text-xs text-foreground/60">{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="border-t border-border/50 pt-4 mb-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-foreground/60">
            <User className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground/60">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          Read Article
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
