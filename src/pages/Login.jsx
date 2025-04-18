import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage({ type: 'error', text: 'Please enter both email and password.' });
      return;
    }

    setMessage({ type: 'success', text: 'Login successful! Redirecting...' });

    setTimeout(() => {
      navigate('/userDashboard');
    }, 1500);
  };

  const handleClose = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-white to-blue-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-blue-200"
      >
        {/* ❌ Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-1 text-gray-500 hover:text-red-600 text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Login to Your Account
        </motion.h2>

        {/* 🔔 Alert Box */}
        {message.text && (
          <div
            className={`mb-4 px-4 py-2 rounded text-sm font-medium ${
              message.type === 'error'
                ? 'bg-red-100 text-red-700 border border-red-300'
                : 'bg-green-100 text-green-700 border border-green-300'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="flex items-center gap-2 px-4 py-2 border border-blue-500 bg-transparent rounded-md focus-within:ring-2 focus-within:ring-blue-400"
          >
            <Mail className="text-blue-500" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="flex items-center gap-2 px-4 py-2 border border-blue-500 bg-transparent rounded-md focus-within:ring-2 focus-within:ring-blue-400"
          >
            <Lock className="text-blue-500" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          {/* Forgot Password Link */}
          <div className="text-right text-sm">
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline font-semibold"
            >
              Forgot Password?
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center mt-4 text-black">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
