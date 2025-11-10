import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";

// Sample blog data
const blogPosts: Record<
  string,
  {
    title: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    content: string;
    excerpt: string;
  }
> = {
  "hr-transformation-2024": {
    title: "The Future of HR: Transformation in 2024",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "HR Trends",
    readTime: "8 min read",
    excerpt:
      "Explore how AI and automation are reshaping HR departments and what it means for your organization's strategy.",
    content: `
      <h2>Introduction</h2>
      <p>The human resources landscape is undergoing a dramatic transformation. As we move deeper into 2024, organizations worldwide are discovering that the integration of artificial intelligence, automation, and data analytics is fundamentally changing how HR operates.</p>

      <h2>The Rise of AI in Recruitment</h2>
      <p>Artificial intelligence is revolutionizing the way companies find and hire talent. AI-powered recruitment tools can now scan through thousands of resumes in seconds, identifying the best candidates based on specific criteria. This not only speeds up the hiring process but also reduces unconscious bias in recruitment decisions.</p>
      <p>Companies using AI-driven recruitment have reported a 40% reduction in time-to-hire and a 30% improvement in the quality of new hires. These tools learn from your hiring patterns and continuously improve their recommendations.</p>

      <h2>Automation Reducing Administrative Burden</h2>
      <p>One of the biggest challenges HR teams face is the overwhelming administrative workload. From onboarding to benefits administration, there are countless repetitive tasks that consume valuable time.</p>
      <p>Modern HR platforms are automating these processes, freeing up HR professionals to focus on strategic initiatives. Onboarding checklists, document management, and compliance tracking can now be handled automatically, with systems alerting HR teams only when human intervention is needed.</p>

      <h2>Data-Driven Decision Making</h2>
      <p>The most forward-thinking HR departments are now leveraging advanced analytics to make decisions. Instead of relying on intuition, they're using data to understand workforce trends, predict turnover, and identify high-potential employees.</p>
      <p>These insights help organizations:</p>
      <ul>
        <li>Improve retention rates by identifying flight risks before they leave</li>
        <li>Optimize compensation structures based on market data</li>
        <li>Identify skill gaps and training needs</li>
        <li>Predict future workforce requirements</li>
      </ul>

      <h2>The Human Touch Still Matters</h2>
      <p>While automation and AI are transformative, they're not replacements for human connection. The most successful organizations are using technology to enhance human relationships, not eliminate them.</p>
      <p>HR professionals are now spending less time on administrative tasks and more time on employee engagement, career development, and building a positive workplace culture.</p>

      <h2>Preparing for 2024 and Beyond</h2>
      <p>Organizations that want to stay competitive should start their HR transformation journey now. This means:</p>
      <ol>
        <li>Assessing your current HR technology stack</li>
        <li>Identifying key pain points and prioritizing automation opportunities</li>
        <li>Investing in tools that provide actionable insights</li>
        <li>Training HR teams to use new technologies effectively</li>
        <li>Maintaining a focus on employee experience</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The future of HR is not about replacing people with machines. It's about using technology to amplify human potential, improve decision-making, and create better workplace experiences. Organizations that embrace this transformation will find themselves with more engaged employees, faster hiring cycles, and stronger bottom-line results.</p>
    `,
  },
  "employee-engagement-strategies": {
    title: "5 Proven Strategies to Boost Employee Engagement",
    author: "Michael Chen",
    date: "March 10, 2024",
    category: "Best Practices",
    readTime: "6 min read",
    excerpt:
      "Discover actionable strategies that leading companies are using to increase employee engagement and retention rates.",
    content: `
      <h2>Why Employee Engagement Matters</h2>
      <p>Employee engagement is more than just happiness at work. Engaged employees are more productive, innovative, and committed to their organization's goals. Studies show that companies with high employee engagement have 21% higher profitability than those with low engagement.</p>

      <h2>Strategy 1: Create Clear Career Paths</h2>
      <p>Employees want to know where they can go in your organization. Develop clear career paths that show advancement opportunities. Hold regular career conversations and provide learning opportunities to help employees grow.</p>

      <h2>Strategy 2: Foster Recognition and Appreciation</h2>
      <p>Recognition is one of the most powerful engagement drivers. Implement a culture of appreciation where good work is regularly acknowledged. This can be through formal recognition programs or simple peer-to-peer recognition systems.</p>

      <h2>Strategy 3: Encourage Work-Life Balance</h2>
      <p>Burnout is a major disengagement driver. Support flexible working arrangements, promote wellness programs, and encourage employees to take time off. Show that you value their wellbeing.</p>

      <h2>Strategy 4: Involve Employees in Decision-Making</h2>
      <p>Employees are more engaged when they have a voice in decisions that affect them. Solicit their input on company initiatives and show how their feedback influences decisions.</p>

      <h2>Strategy 5: Invest in Professional Development</h2>
      <p>Provide learning and development opportunities. Whether it's training programs, mentoring, or educational support, employees want to grow. This investment shows you believe in their future.</p>

      <h2>Measuring Engagement</h2>
      <p>Use regular surveys, pulse checks, and one-on-one conversations to measure engagement. Track metrics like employee retention, productivity, and internal promotion rates.</p>

      <h2>Conclusion</h2>
      <p>Boosting employee engagement requires a multi-faceted approach, but the investment pays dividends in terms of retention, productivity, and company culture.</p>
    `,
  },
  "building-inclusive-workplace": {
    title: "Building an Inclusive Workplace Culture",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    category: "Culture",
    readTime: "7 min read",
    excerpt:
      "Learn how to create a workplace culture that celebrates diversity and fosters inclusion across all levels.",
    content: `
      <h2>The Business Case for Inclusion</h2>
      <p>Diverse and inclusive workplaces are not just ethically right—they're better for business. Companies with above-average diversity have 19% higher innovation revenues and 22% lower turnover rates.</p>

      <h2>Understanding Diversity vs. Inclusion</h2>
      <p>Diversity is about who is in the room. Inclusion is about making sure everyone's voice is heard. You can have diversity without inclusion, but you cannot have real inclusion without diversity.</p>

      <h2>Step 1: Evaluate Your Current Culture</h2>
      <p>Start with an honest assessment of your current workplace culture. Conduct surveys, focus groups, and interviews to understand how included employees from different backgrounds feel.</p>

      <h2>Step 2: Build Diverse Leadership</h2>
      <p>Diversity starts at the top. Actively work to build a leadership team that reflects the diversity you want to see in your organization. Mentor and develop talent from underrepresented groups.</p>

      <h2>Step 3: Create Employee Resource Groups</h2>
      <p>Employee resource groups provide communities for people with shared identities or interests. They offer support, networking, and a platform to influence company policies.</p>

      <h2>Step 4: Review Your Processes</h2>
      <p>Examine recruitment, promotion, and compensation processes for bias. Use data to identify disparities and actively work to address them.</p>

      <h2>Step 5: Foster Inclusive Leadership</h2>
      <p>Train managers to be inclusive leaders. This means actively listening to diverse perspectives, addressing microaggressions, and ensuring equal opportunities for advancement.</p>

      <h2>Continuous Progress</h2>
      <p>Building an inclusive culture is an ongoing journey, not a destination. Regular assessment, feedback, and adjustment are essential for continuous improvement.</p>

      <h2>Conclusion</h2>
      <p>An inclusive workplace culture is a competitive advantage that attracts top talent, improves innovation, and enhances employee satisfaction. The time to start building it is now.</p>
    `,
  },
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const blog = id ? blogPosts[id] : null;

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Blog post not found
            </h1>
            <p className="text-foreground/60 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-background">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent font-semibold mb-6 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            <div className="max-w-3xl">
              <div className="inline-block mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                  {blog.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-t border-b border-border/50 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="font-semibold text-primary">{blog.author}</p>
                    <p className="text-sm text-foreground/60">{blog.readTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-foreground/60 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg prose-primary">
              <div
                className="prose-content text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: blog.content
                    .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-primary mt-8 mb-4">')
                    .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-primary mt-6 mb-3">')
                    .replace(/<p>/g, '<p class="mb-4">')
                    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4">')
                    .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4">')
                    .replace(/<li>/g, '<li class="mb-2">')
                    .replace(/<a/g, '<a class="text-accent hover:underline"'),
                }}
              />
            </div>
          </div>
        </section>

        {/* Related Articles CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50/50 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your HR?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Discover how Infosage Solutions can help your organization streamline HR operations and improve employee engagement.
            </p>
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
