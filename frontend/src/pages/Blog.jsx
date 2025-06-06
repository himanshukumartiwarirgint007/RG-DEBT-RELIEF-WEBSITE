import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Manage Your Debt Effectively",
    date: "June 1, 2025",
    excerpt:
      "Struggling with debt? Discover five practical tips to help you take control of your finances and reduce your debt burden.",
    content:
      "Managing debt can feel overwhelming, but with the right strategies, you can regain control. Start by creating a budget, prioritize high-interest debts, avoid unnecessary expenses, seek professional advice, and stay consistent with your payments. Remember, small steps can lead to big changes over time."
  },
  {
    id: 2,
    title: "Understanding Debt Relief Options",
    date: "May 20, 2025",
    excerpt:
      "Not sure which debt relief option is right for you? Learn about the different solutions available and how to choose the best one for your situation.",
    content:
      "Debt relief comes in many forms, including debt consolidation, settlement, and counseling. Each option has its pros and cons, so it's important to assess your financial situation and consult with experts before making a decision."
  },
  {
    id: 3,
    title: "How to Rebuild Your Credit After Debt Settlement",
    date: "May 10, 2025",
    excerpt:
      "Settled your debts? Here’s how you can start rebuilding your credit score and regain financial stability.",
    content:
      "After settling your debts, focus on paying bills on time, keeping credit card balances low, and monitoring your credit report regularly. Responsible financial habits will help you rebuild your credit over time."
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <h1>Debt Relief Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p className="blog-date">{post.date}</p>
          <p>{post.excerpt}</p>
          {/* You can add a "Read More" button or expand/collapse for full content */}
        </div>
      ))}
    </div>
  );
};

export default Blog;