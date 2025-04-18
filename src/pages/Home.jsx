import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import marketingImg from '../assets/marketing.png';
import { motion, useInView } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-screen min-h-screen flex flex-col bg-gradient-to-b from-blue-100 via-white to-blue-50"
    >
      {/* Navbar */}
      <nav className="bg-blue-200 shadow px-10 py-6 flex justify-between items-center sticky top-0 z-50">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-blue-700 glow"
        >
          TaskZone
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate('/login')}
          className="bg-blue-300 text-blue-900 px-6 py-2 rounded-md text-base font-bold hover:bg-blue-400 transition shadow-md"
        >
          Login
        </motion.button>
      </nav>

      {/* Hero Section */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-white to-blue-50"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={marketingImg}
          alt="Earn with tasks"
          className="w-full h-[300px] object-cover mb-8 rounded-xl shadow-lg"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-extrabold text-blue-800 mb-6 leading-tight"
        >
          <span className="inline-block h-6 text-blue-800">
            <CustomTypewriter words={['Earn Money Online', 'Complete Simple Tasks', 'Get Paid Instantly']} />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg sm:text-xl text-blue-700 max-w-3xl mb-8"
        >
          Join thousands who are earning real rewards by doing what they already do—watching videos,
          filling surveys, installing apps, and more. No investment, no experience needed.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/signup')}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 text-lg rounded-md font-bold border border-blue-600 hover:shadow-xl transition"
        >
          Get Started Now
        </motion.button>
        <div ref={scrollRef} className="mt-12 animate-bounce text-blue-500">↓ Scroll Down</div>
      </motion.main>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-blue-50 py-16 px-6 text-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-blue-800 mb-10"
        >
          Why TaskZone?
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{ title: '10K+', subtitle: 'Active Users Earning' }, { title: '150K+', subtitle: 'Tasks Completed' }, { title: 'PKR 2M+', subtitle: 'Paid to Our Users' }].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <h4 className="text-4xl font-extrabold text-blue-700 mb-2">{stat.title}</h4>
              <p className="text-blue-600">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-blue-100 py-16 px-6 text-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-blue-800 mb-6"
        >
          Our Mission
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-blue-700 text-lg"
        >
          At TaskZone, our goal is simple: empower everyday people to earn from their phone or computer without any barriers. We believe everyone deserves a fair opportunity to benefit from the digital economy. Our platform makes earning accessible, flexible, and rewarding.
        </motion.p>
      </motion.section>

      {/* Articles Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white py-16 px-6 text-center"
      >
        <h3 className="text-3xl font-bold text-blue-800 mb-10">Latest Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{ title: '5 Easy Ways to Earn Online', desc: 'Start earning with simple daily tasks from your phone.', date: 'April 2025' }, { title: 'The Rise of Microtasks Economy', desc: 'Why more people are turning to task-based income.', date: 'March 2025' }, { title: 'Your First 100 Rupees Online', desc: 'A complete beginner’s guide to making your first earnings.', date: 'February 2025' }].map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg text-left hover:scale-[1.02] transition-transform"
            >
              <h4 className="text-xl font-bold text-blue-700 mb-2">{article.title}</h4>
              <p className="text-sm text-blue-600 mb-2">{article.date}</p>
              <p className="text-blue-700">{article.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-200 border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} TaskZone. All rights reserved.
      </footer>
    </motion.div>
  );
}

// ✅ Custom Typewriter Component (React 19+ Compatible)
function CustomTypewriter({ words, delay = 150 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) return setIndex(0);

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );

      if (!deleting && subIndex === words[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, deleting ? 50 : delay);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, delay]);

  return <span>{words[index].substring(0, subIndex)}<span className="animate-pulse">|</span></span>;
}
