import React, { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Manage Your Debt Effectively",
    date: "June 1, 2025",
    excerpt:
      "Struggling with debt? Discover five practical tips to help you take control of your finances and reduce your debt burden.",
    content:
      "Managing debt can feel overwhelming, but with the right strategies, you can regain control. Start by creating a budget, prioritize high-interest debts, avoid unnecessary expenses, seek professional advice, and stay consistent with your payments. Remember, small steps can lead to big changes over time.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Calm workspace
    section: "latest"
  },
  {
    id: 2,
    title: "Understanding Debt Relief Options",
    date: "May 20, 2025",
    excerpt:
      "Not sure which debt relief option is right for you? Learn about the different solutions available and how to choose the best one for your situation.",
    content:
      "Debt relief comes in many forms, including debt consolidation, settlement, and counseling. Each option has its pros and cons, so it's important to assess your financial situation and consult with experts before making a decision.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Documents and planning
    section: "debt-guide"
  },
   {
    id: 3,
    title: "How to Rebuild Your Credit After Debt Settlement",
    date: "May 10, 2025",
    excerpt:
      "Settled your debts? Here’s how you can start rebuilding your credit score and regain financial stability.",
    content:
      "After settling your debts, focus on paying bills on time, keeping credit card balances low, and monitoring your credit report regularly. Responsible financial habits will help you rebuild your credit over time.",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=600&q=80", // Financial wellness: plant growing from coins
    section: "financial-wellness"
  },
  {
    id: 4,
    title: "Debt in the News: What You Need to Know",
    date: "May 5, 2025",
    excerpt:
      "Stay up to date with the latest news and media coverage on debt relief and financial trends.",
    content:
      "Recent news highlights changes in debt relief regulations and new programs to help consumers. Stay informed to make the best decisions for your financial future.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // Newspaper
    section: "news-media"
  },
  {
  id: 5,
  title: "Lifestyle Changes to Stay Debt-Free",
  date: "April 28, 2025",
  excerpt:
    "Learn how small lifestyle changes can help you avoid debt and build lasting financial health.",
  content:
    "Cutting unnecessary expenses, cooking at home, and finding free entertainment are just a few ways to save money and stay out of debt.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80", // Happy family outdoors
  section: "lifestyle"
},
];

const categories = [
  { key: "latest", label: "Latest Blog & Features" },
  { key: "news-media", label: "News & Media" },
  { key: "debt-guide", label: "Debt Guide" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "financial-wellness", label: "Financial Wellness" }
];

const BlogSection = ({ title, sectionKey, posts }) => (
  <section style={{ marginBottom: "48px" }}>
    <h2 style={{
      fontSize: "2rem",
      color: "#0d47a1",
      margin: "0 0 24px 0",
      textAlign: "left",
      paddingLeft: "8px"
    }}>{title}</h2>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px"
    }}>
      {posts.filter(post => post.section === sectionKey).map(post => (
        <div key={post.id} style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(13,71,161,0.08)",
          padding: "0 0 24px 0",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer"
        }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              marginBottom: "18px"
            }}
          />
          <div style={{ padding: "0 24px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "#0d47a1", marginBottom: "8px" }}>{post.title}</h3>
            <p style={{ color: "#888", fontSize: "0.95rem", marginBottom: "12px" }}>{post.date}</p>
            <p style={{ marginBottom: "18px" }}>{post.excerpt}</p>
          </div>
          <details style={{ padding: "0 24px" }}>
            <summary style={{
              color: "#1976d2",
              cursor: "pointer",
              fontWeight: "bold",
              outline: "none"
            }}>Read More</summary>
            <p style={{ marginTop: "10px" }}>{post.content}</p>
          </details>
        </div>
      ))}
    </div>
  </section>
);

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter posts by search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? post.section === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(90deg, #0d47a1 60%, #1976d2 100%)",
        color: "#fff",
        padding: "40px 0",
        textAlign: "center",
        marginBottom: "0"
      }}>
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Debt Relief Blog</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "12px" }}>
          Expert tips, news, and resources to help you manage your debt.
        </p>
      </div>

      {/* Categories Horizontal Bar */}
      <nav
        style={{
          width: "100%",
          overflowX: "auto",
          background: "#fff",
          borderBottom: "1px solid #e3e3e3",
          marginBottom: "32px",
          padding: "0 0 0 8px"
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            listStyle: "none",
            margin: 0,
            padding: "12px 0"
          }}
        >
          <li>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                background: selectedCategory === null ? "#e3f2fd" : "transparent",
                color: "#1976d2",
                border: "none",
                padding: "8px 18px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: selectedCategory === null ? "bold" : "normal",
                whiteSpace: "nowrap"
              }}
            >
              All Categories
            </button>
          </li>
          {categories.map(cat => (
            <li key={cat.key}>
              <button
                onClick={() => setSelectedCategory(cat.key)}
                style={{
                  background: selectedCategory === cat.key ? "#e3f2fd" : "transparent",
                  color: "#1976d2",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: selectedCategory === cat.key ? "bold" : "normal",
                  whiteSpace: "nowrap"
                }}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px 40px"
        }}
      >
        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "24px"
          }}
        >
          <input
            type="text"
            placeholder="Search blog..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #bdbdbd",
              fontSize: "1rem",
              width: "300px",
              maxWidth: "100%"
            }}
          />
        </div>

        {/* Blog Sections */}
        {selectedCategory
          ? (
            <BlogSection
              title={categories.find(cat => cat.key === selectedCategory)?.label}
              sectionKey={selectedCategory}
              posts={filteredPosts}
            />
          ) : (
            <>
              <BlogSection title="Latest Blog & Features" sectionKey="latest" posts={filteredPosts} />
              <BlogSection title="News & Media" sectionKey="news-media" posts={filteredPosts} />
              <BlogSection title="Debt Guide" sectionKey="debt-guide" posts={filteredPosts} />
              <BlogSection title="Lifestyle" sectionKey="lifestyle" posts={filteredPosts} />
              <BlogSection title="Financial Wellness" sectionKey="financial-wellness" posts={filteredPosts} />
            </>
          )
        }
      </div>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 900px) {
            .blog-sections {
              padding: 0 4px 40px;
            }
            nav ul {
              gap: 4px !important;
            }
          }
          @media (max-width: 600px) {
            .blog-sections {
              padding: 0 2px 24px;
            }
            nav ul {
              gap: 2px !important;
            }
            nav {
              padding-left: 0 !important;
            }
            .blog-card img {
              height: 140px !important;
            }
          }
          .blog-card:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 24px rgba(13,71,161,0.13);
          }
        `}
      </style>
    </div>
  );
};

export default Blog;