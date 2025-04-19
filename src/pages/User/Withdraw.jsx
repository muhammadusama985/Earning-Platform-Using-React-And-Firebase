import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Withdraw() {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('JazzCash');
  const [showToast, setShowToast] = useState(false);

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

  const handleWithdraw = () => {
    if (!accountNumber || !accountType) {
      alert('Please fill in all withdrawal details.');
      return;
    }

    console.log('Withdraw request:', { accountNumber, accountType });

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    setAccountNumber('');
    setAccountType('JazzCash');
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-x-hidden flex items-center justify-center px-4 pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white w-full max-w-xl p-6 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"
        >
          Withdraw Earnings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-6"
        >
          Enter your withdrawal details below
        </motion.p>

        <motion.input
          whileFocus={{ scale: 1.03 }}
          type="text"
          placeholder="Bank / Wallet Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="w-full px-5 py-3 border border-blue-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 placeholder:text-blue-300 shadow-sm"
        />

        <motion.select
          whileFocus={{ scale: 1.03 }}
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="w-full px-5 py-3 border border-blue-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 shadow-sm"
        >
          <option value="JazzCash">JazzCash</option>
          <option value="EasyPaisa">EasyPaisa</option>
          <option value="Bank">Bank</option>
        </motion.select>

        {/* ✅ Updated Button Color */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWithdraw}
          className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
        >
          Submit Withdrawal Request
        </motion.button>

        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg"
          >
            Your withdrawal request is pending. Upon admin approval, the amount will be transferred.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
