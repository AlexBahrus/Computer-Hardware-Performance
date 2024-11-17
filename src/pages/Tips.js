import React from 'react';
import './Tips.css';


const Tips = () => {
  const tips = [
    { title: "What is a CPU?", description: "A CPU is the main processing unit that executes commands on a computer." },
    { title: "Why is RAM important?", description: "RAM provides space for currently used data, helping the computer work faster." },
    { title: "What is the difference between SSD and HDD?", description: "SSD is faster in reading and writing data than HDD, but it is usually more expensive." },
    // Tambahkan tips lainnya jika diperlukan
  ];

  return (
    <div className="tips-page">
      <h2>FAQ - Frequently Asked Questions</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>
            <strong>{tip.title}</strong>
            <p>{tip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;
