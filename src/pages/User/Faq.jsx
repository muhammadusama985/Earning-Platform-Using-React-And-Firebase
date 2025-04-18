import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How do I complete a task?',
    answer: 'Simply click on the task, follow the instructions, and submit the required proof if needed.'
  },
  {
    question: 'How do I withdraw my earnings?',
    answer: 'Go to the Withdraw section from the dashboard, enter your payment details, and click submit.'
  },
  {
    question: 'Can I refer friends and earn?',
    answer: 'Yes! Share your referral link. You earn for every successful signup using your link.'
  },
  {
    question: 'What is the minimum withdrawal amount?',
    answer: 'The minimum withdrawal amount is Rs. 100.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left font-semibold text-blue-700 hover:bg-blue-50 focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
