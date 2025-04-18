import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ReferralPage() {
  const [referralLink, setReferralLink] = useState('');
  const [referralCount, setReferralCount] = useState(0);
  const [referralEarnings, setReferralEarnings] = useState(0);

  useEffect(() => {
    // Simulated user ID and fetching logic (replace with real user and backend)
    const userId = 'user123';
    const generatedLink = `${window.location.origin}/signup?ref=${userId}`;
    setReferralLink(generatedLink);

    // Simulated fetch data (replace with real API calls)
    setReferralCount(8); // e.g., 8 users joined via referral
    setReferralEarnings(240); // Rs. 240 earned
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
        Referral Program
      </h2>

      <div className="bg-white max-w-2xl mx-auto rounded-2xl shadow-lg p-8">
        <h4 className="text-xl font-semibold mb-4 text-blue-700">Your Unique Referral Link</h4>
        <div className="flex items-center justify-between bg-blue-50 border border-blue-300 px-4 py-2 rounded-md mb-6">
          <span className="text-sm text-blue-800 break-all">{referralLink}</span>
          <button
            onClick={() => navigator.clipboard.writeText(referralLink)}
            className="ml-4 px-3 py-1 text-sm bg-white-600 text-blue-800 rounded-md hover:bg-blue-600"
          >
            Copy
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-3xl text-purple-600 font-bold">{referralCount}</p>
            <p className="text-gray-600">Referrals Joined</p>
          </div>
          <div className="text-center">
            <p className="text-3xl text-green-600 font-bold">Rs. {referralEarnings}</p>
            <p className="text-gray-600">Earnings from Referrals</p>
          </div>
        </div>
      </div>
    </div>
  );
}
