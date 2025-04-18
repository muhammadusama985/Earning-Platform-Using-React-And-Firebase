import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Leaderboard() {
  const [filter, setFilter] = useState('All-time');

  const leaderboardData = {
    'All-time': [
      { username: 'Ebrahim', earnings: 1200, referrals: 15 },
      { username: 'Ayesha', earnings: 1050, referrals: 12 },
      { username: 'Ali', earnings: 950, referrals: 10 },
    ],
    'Monthly': [
      { username: 'Ayesha', earnings: 450, referrals: 5 },
      { username: 'Ebrahim', earnings: 400, referrals: 4 },
      { username: 'Ali', earnings: 375, referrals: 3 },
    ],
    'Weekly': [
      { username: 'Ali', earnings: 150, referrals: 2 },
      { username: 'Ebrahim', earnings: 130, referrals: 1 },
      { username: 'Ayesha', earnings: 120, referrals: 2 },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">Leaderboard</h2>

      <div className="flex justify-center gap-4 mb-6">
        {['Weekly', 'Monthly', 'All-time'].map((period) => (
          <motion.button
            key={period}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(period)}
            className={`px-5 py-2 rounded-full font-semibold shadow transition-all duration-300 flex items-center gap-2 ${
              filter === period
                ? 'bg-white-600 text-red-800'
                : 'bg-white text-blue-600 border border-blue-500'
            }`}
          >
            {period}
          </motion.button>
        ))}
      </div>

      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="w-full text-left border-collapse rounded shadow overflow-hidden">
          <thead className="bg-blue-200 text-blue-800">
            <tr>
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Earnings</th>
              <th className="py-3 px-4">Referrals</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-blue-100">
            {leaderboardData[filter].map((user, index) => (
              <tr key={index} className="hover:bg-blue-50">
                <td className="py-3 px-4 font-bold text-blue-700">#{index + 1}</td>
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">Rs. {user.earnings}</td>
                <td className="py-3 px-4">{user.referrals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
