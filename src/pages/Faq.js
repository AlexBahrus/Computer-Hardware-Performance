import React from 'react';
import './Faq.css'; // Import the CSS file here

const FAQ = () => {
  const faqs = [
    { question: "What is a CPU?", answer: "A CPU is the main processing unit that executes commands on a computer." },
    { question: "Why is RAM important?", answer: "RAM provides space for currently used data, helping the computer work faster." },
    { question: "What is the difference between SSD and HDD?", answer: "SSD is faster in reading and writing data than HDD, but it is usually more expensive." },
    // Add more questions as needed
  ];

  return (
    <div className="faq-page">
      <h2>FAQ - Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
