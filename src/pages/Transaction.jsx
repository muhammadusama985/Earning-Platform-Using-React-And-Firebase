import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Transaction() {
  const [method, setMethod] = useState('');
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!method || !account || !amount || !screenshot) {
      return alert('Please fill in all fields and upload screenshot.');
    }
    alert("Payment submitted for verification. You will receive an email with your login credentials soon.");
    navigate('/login');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-repeat px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-blue-300"
      >
        {!method ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center mb-4"
            >
              <h2 className="text-xl font-semibold text-center w-full">Select Payment Method</h2>
              <button
                onClick={() => navigate('/userDashboard', { replace: true })}
                className="text-gray-500 hover:text-red-600 text-xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <button
                onClick={() => setMethod('JazzCash')}
                className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
              >
                JazzCash
              </button>
              <button
                onClick={() => setMethod('EasyPaisa')}
                className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
              >
                EasyPaisa
              </button>
              <button
                onClick={() => setMethod('Crypto')}
                className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
              >
                Crypto Wallet
              </button>
            </motion.div>
          </>
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-semibold text-center mb-4"
            >
              Pay with {method}
            </motion.h2>
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder={`${method} Account/Wallet ID`}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount Sent"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="screenshot"
                  className="cursor-pointer w-full bg-gray-100 border border-dashed border-blue-400 text-green-600 py-2 rounded-md text-center hover:bg-blue-50"
                >
                  {screenshot ? screenshot.name : "Click to Upload Screenshot"}
                </label>
                <input
                  id="screenshot"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setScreenshot(e.target.files[0])}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
              >
                Submit for Verification
              </motion.button>
            </motion.form>
            <button
              onClick={() => setMethod('')}
              className="w-full mt-4 text-sm text-gray-500 hover:underline"
            >
              Change Payment Method
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}
