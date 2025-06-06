import React from "react";

const resources = [
  {
    title: "Debt Relief Options",
    description:
      "Learn about different debt relief solutions such as debt consolidation, settlement, and management plans to find what works best for you.",
    link: "https://www.nationaldebtrelief.com/resources/debt-relief-options/"
  },
  {
    title: "Budgeting Tips",
    description:
      "Discover practical budgeting tips and tools to help you manage your finances and stay on track with your debt repayment goals.",
    link: "https://www.nationaldebtrelief.com/resources/budgeting-tips/"
  },
  {
    title: "Credit Score Basics",
    description:
      "Understand how your credit score works, how debt impacts it, and steps you can take to improve your credit health.",
    link: "https://www.nationaldebtrelief.com/resources/credit-score-basics/"
  },
  {
    title: "Debt Settlement Guide",
    description:
      "A comprehensive guide to debt settlement, including the pros, cons, and what to expect from the process.",
    link: "https://www.nationaldebtrelief.com/resources/debt-settlement-guide/"
  },
  {
    title: "Financial Calculators",
    description:
      "Use free calculators to estimate your monthly payments, savings, and more to make informed financial decisions.",
    link: "https://www.nationaldebtrelief.com/resources/financial-calculators/"
  }
];

const Resources = () => {
  return (
    <div className="resources-page">
      <h1>Debt Relief Resources</h1>
      <p>
        Explore helpful articles, guides, and tools to support your journey to financial freedom.
      </p>
      <ul className="resources-list">
        {resources.map((resource, idx) => (
          <li key={idx} className="resource-item">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;