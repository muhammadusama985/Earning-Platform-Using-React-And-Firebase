import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    // Simulate password reset link
    setMessage(`Password reset link sent to ${email}`);
    setTimeout(() => navigate('/login'), 2500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-white to-blue-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-blue-200"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Forgot Password
        </motion.h2>

        {message && (
          <div className="mb-4 px-4 py-2 rounded text-sm font-medium bg-blue-100 text-blue-700 border border-blue-300">
            {message}
          </div>
        )}

        <form onSubmit={handleReset} className="space-y-6">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="flex items-center gap-2 px-4 py-2 border border-blue-500 bg-transparent rounded-md focus-within:ring-2 focus-within:ring-blue-400"
          >
            <Mail className="text-blue-500" size={18} />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
          >
            Send Reset Link
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
