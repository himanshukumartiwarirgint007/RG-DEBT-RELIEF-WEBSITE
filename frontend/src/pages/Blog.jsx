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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    section: "lifestyle"
  }
];

const categories = [
  { key: "latest", label: "Latest Blog & Features" },
  { key: "news-media", label: "News & Media" },
  { key: "debt-guide", label: "Debt Guide" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "financial-wellness", label: "Financial Wellness" }
];

const sectionGradients = {
  latest: "linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)",
  "news-media": "linear-gradient(135deg, #fef9c3 0%, #f1f5f9 100%)",
  "debt-guide": "linear-gradient(135deg, #fce7f3 0%, #f1f5f9 100%)",
  lifestyle: "linear-gradient(135deg, #bbf7d0 0%, #f1f5f9 100%)",
  "financial-wellness": "linear-gradient(135deg, #bae6fd 0%, #f1f5f9 100%)"
};

const BlogSection = ({ title, sectionKey, posts }) => (
  <section
    className="blog-section"
    style={{
      marginBottom: "48px",
      borderRadius: "24px",
      background: sectionGradients[sectionKey] || "#fff",
      boxShadow: "0 8px 32px 0 rgba(13,71,161,0.07)",
      padding: "32px 18px 24px 18px",
      animation: "fadeInSection 1.2s"
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        color: "#0d47a1",
        margin: "0 0 24px 0",
        textAlign: "left",
        paddingLeft: "8px",
        letterSpacing: "1px"
      }}
    >
      {title}
    </h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px"
      }}
    >
      {posts.filter(post => post.section === sectionKey).map((post, idx) => (
        <div
          key={post.id}
          className={`blog-card slide-${idx % 2 === 0 ? "left" : "right"}`}
          style={{
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 4px 24px rgba(13,71,161,0.10)",
            padding: "0 0 24px 0",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
            overflow: "hidden",
            animation: `slideIn${idx % 2 === 0 ? "Left" : "Right"} 0.8s`,
            animationFillMode: "both"
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "18px",
                borderTopRightRadius: "18px",
                marginBottom: "18px",
                transition: "transform 0.4s"
              }}
              className="blog-card-img"
            />
          </div>
          <div style={{ padding: "0 24px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "#0d47a1", marginBottom: "8px" }}>{post.title}</h3>
            <p style={{ color: "#888", fontSize: "0.95rem", marginBottom: "12px" }}>{post.date}</p>
            <p style={{ marginBottom: "18px" }}>{post.excerpt}</p>
          </div>
          <details style={{ padding: "0 24px" }}>
            <summary
              style={{
                color: "#1976d2",
                cursor: "pointer",
                fontWeight: "bold",
                outline: "none",
                fontSize: "1rem"
              }}
            >
              Read More
            </summary>
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
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0e7ff 0%, #f1f5f9 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative SVG background shapes */}
      <svg
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          zIndex: 0,
          opacity: 0.18
        }}
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="200" fill="#bae6fd" />
      </svg>
      <svg
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          zIndex: 0,
          opacity: 0.13
        }}
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="200" fill="#bbf7d0" />
      </svg>

      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(90deg, #0d47a1 60%, #1976d2 100%)",
          color: "#fff",
          padding: "40px 0",
          textAlign: "center",
          marginBottom: "0",
          boxShadow: "0 8px 32px 0 rgba(13,71,161,0.13)",
          position: "relative",
          zIndex: 1,
          animation: "fadeInSection 1.2s"
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: 0, letterSpacing: "2px" }}>Debt Relief Blog</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "12px", opacity: 0.95 }}>
          Expert tips, news, and resources to help you manage your debt.
        </p>
      </div>

      {/* Categories Horizontal Bar */}
      <nav
        style={{
          width: "100%",
          overflowX: "auto",
          background: "linear-gradient(90deg, #e0f2fe 0%, #f1f5f9 100%)",
          borderBottom: "1px solid #e3e3e3",
          marginBottom: "32px",
          padding: "0 0 0 8px",
          boxShadow: "0 2px 8px rgba(13,71,161,0.06)",
          position: "relative",
          zIndex: 1,
          animation: "slideInDown 0.8s"
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            listStyle: "none",
            margin: 0,
            padding: "14px 0"
          }}
        >
          <li>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                background: selectedCategory === null ? "#bae6fd" : "transparent",
                color: "#1976d2",
                border: "none",
                padding: "10px 22px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: selectedCategory === null ? "bold" : "normal",
                whiteSpace: "nowrap",
                boxShadow: selectedCategory === null ? "0 2px 8px #bae6fd88" : "none",
                transition: "background 0.2s, box-shadow 0.2s, transform 0.2s"
              }}
              className="category-btn"
            >
              All Categories
            </button>
          </li>
          {categories.map(cat => (
            <li key={cat.key}>
              <button
                onClick={() => setSelectedCategory(cat.key)}
                style={{
                  background: selectedCategory === cat.key ? "#bae6fd" : "transparent",
                  color: "#1976d2",
                  border: "none",
                  padding: "10px 22px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: selectedCategory === cat.key ? "bold" : "normal",
                  whiteSpace: "nowrap",
                  boxShadow: selectedCategory === cat.key ? "0 2px 8px #bae6fd88" : "none",
                  transition: "background 0.2s, box-shadow 0.2s, transform 0.2s"
                }}
                className="category-btn"
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
          padding: "0 16px 40px",
          position: "relative",
          zIndex: 2
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
              padding: "12px 18px",
              borderRadius: "10px",
              border: "1.5px solid #bdbdbd",
              fontSize: "1rem",
              width: "320px",
              maxWidth: "100%",
              boxShadow: "0 2px 8px #bae6fd55",
              outline: "none",
              transition: "border 0.3s, box-shadow 0.3s, transform 0.3s",
              background: "linear-gradient(90deg, #f1f5f9 60%, #e0f2fe 100%)"
            }}
            onFocus={e => {
              e.target.style.border = "1.5px solid #1976d2";
              e.target.style.boxShadow = "0 4px 16px #bae6fd88";
              e.target.style.transform = "scale(1.03)";
            }}
            onBlur={e => {
              e.target.style.border = "1.5px solid #bdbdbd";
              e.target.style.boxShadow = "0 2px 8px #bae6fd55";
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>

        {/* Blog Sections */}
        {selectedCategory ? (
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
        )}
      </div>

      {/* Extra styles for animation and responsiveness */}
      <style>
        {`
          @keyframes fadeInSection {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-60px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(60px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .blog-card:hover {
            transform: translateY(-8px) scale(1.035) rotate(-1deg);
            box-shadow: 0 16px 40px rgba(13,71,161,0.18);
            background: linear-gradient(120deg, #e0f7fa 0%, #fff 100%);
          }
          .blog-card:hover .blog-card-img {
            transform: scale(1.07) rotate(1deg);
            filter: brightness(1.08) saturate(1.1);
          }
          .category-btn:hover {
            background: #e0e7ff !important;
            color: #0d47a1 !important;
            transform: scale(1.07);
          }
          details[open] summary {
            color: #0d47a1 !important;
          }
          details summary::-webkit-details-marker {
            display: none;
          }
          details summary:after {
            content: " ▼";
            font-size: 0.9em;
            color: #1976d2;
            transition: transform 0.2s;
          }
          details[open] summary:after {
            transform: rotate(180deg);
          }
          @media (max-width: 900px) {
            .blog-section {
              padding: 18px 4px 32px 4px !important;
            }
            nav ul {
              gap: 6px !important;
            }
          }
          @media (max-width: 600px) {
            .blog-section {
              padding: 10px 2px 18px 2px !important;
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
        `}
      </style>
    </div>
  );
};

export default Blog;