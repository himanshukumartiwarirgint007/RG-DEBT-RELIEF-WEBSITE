import React from "react";

const clientStories = [
  {
    id: 1,
    name: "Sarah T.",
    story:
      "I was drowning in credit card debt and didn't know where to turn. RG Debt Relief helped me create a manageable plan and supported me every step of the way. Now, I'm debt-free and finally able to save for my future!"
  },
  {
    id: 2,
    name: "James R.",
    story:
      "After losing my job, I struggled to keep up with my bills. The team at RG Debt Relief was understanding and worked with me to find the best solution. Their guidance made all the difference."
  },
  {
    id: 3,
    name: "Maria L.",
    story:
      "Thanks to RG Debt Relief, I was able to consolidate my debts and lower my monthly payments. The process was simple, and their staff was always available to answer my questions."
  }
];

const ClientStories = () => {
  return (
    <div className="client-stories-page">
      <h1>Client Stories</h1>
      <p>
        Read how we've helped people just like you overcome debt and achieve financial freedom.
      </p>
      {clientStories.map((client) => (
        <div key={client.id} className="client-story">
          <blockquote>"{client.story}"</blockquote>
          <p className="client-name">- {client.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientStories;