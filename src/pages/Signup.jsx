import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RefreshCcw } from 'lucide-react';

const generatedCodes = new Set();

function generateReferralCode() {
  let code;
  do {
    code = 'REF-' + Math.random().toString(36).substring(2, 8).toUpperCase();
  } while (generatedCodes.has(code));
  generatedCodes.add(code);
  return code;
}

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState(generateReferralCode());
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('Referral Code:', referralCode);

    setMessage({ type: 'success', text: 'Account created successfully!' });

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const handleGoogleSignup = () => {
    alert('Google signup coming soon!');
  };

  const refreshReferralCode = () => {
    setReferralCode(generateReferralCode());
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-white to-blue-100 flex items-start justify-center px-4 py-16 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-3xl shadow-xl mt-12 mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Create Your Account
        </motion.h2>

        {/* 🔔 Alert Message */}
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

        <form onSubmit={handleSignup} className="space-y-6">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <motion.div whileFocus={{ scale: 1.02 }} className="relative">
            <input
              type="text"
              value={referralCode}
              readOnly
              className="w-full px-4 py-1 border border-blue-500 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-800"
            />
            <button
              type="button"
              onClick={refreshReferralCode}
              className="absolute top-1/2 right-3 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-xs text-red-500 border border-red-500 rounded-full bg-white leading-none"
              title="Regenerate Code"
            >
              <RefreshCcw size={12} />
            </button>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
          >
            Sign Up
          </motion.button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoogleSignup}
          className="w-full bg-white text-red-600 py-1 rounded-md font-bold hover:bg-white hover:text-red-600 transition"
        >
          Sign Up with Google
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Facebook signup coming soon!')}
          className="w-full bg-white text-blue-800 py-1 rounded-md font-bold hover:bg-blue-700 transition mt-3"
        >
          Sign Up with Facebook
        </motion.button>

        <p className="text-center mt-2 text-sm text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
