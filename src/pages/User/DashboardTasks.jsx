import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Zap, Award } from 'lucide-react';

export default function DashboardTasks() {
  const [selectedCategory, setSelectedCategory] = useState('Basic');
  const [showToast, setShowToast] = useState(false);
  const [isPaid, setIsPaid] = useState({
    Basic: false,
    Advance: false,
    Professional: false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const allTasks = [
    { id: 1, title: 'Watch YouTube Video', description: 'Watch a 2-minute video and like it.', reward: 'Rs. 20', category: 'Basic' },
    { id: 2, title: 'Install App', description: 'Download and install an app from Play Store.', reward: 'Rs. 50', category: 'Basic' },
    { id: 3, title: 'Rate an App', description: 'Rate a mobile app on Play Store.', reward: 'Rs. 30', category: 'Basic' },
    { id: 4, title: 'Visit a Website', description: 'Stay on the homepage for 30 seconds.', reward: 'Rs. 25', category: 'Basic' },
    { id: 5, title: 'Subscribe to Newsletter', description: 'Subscribe to our mailing list.', reward: 'Rs. 15', category: 'Basic' },
    { id: 6, title: 'Join Telegram Group', description: 'Join our official Telegram group.', reward: 'Rs. 20', category: 'Basic' },
    { id: 7, title: 'Instagram Follow', description: 'Follow our partner account on Instagram.', reward: 'Rs. 15', category: 'Advance' },
    { id: 8, title: 'Complete Survey', description: 'Answer 5 quick questions about a product.', reward: 'Rs. 30', category: 'Advance' },
    { id: 9, title: 'Refer a Friend', description: 'Invite a friend who completes at least one task.', reward: 'Rs. 60', category: 'Advance' },
    { id: 10, title: 'App Review', description: 'Write a 5-star review for an app.', reward: 'Rs. 35', category: 'Advance' },
    { id: 11, title: 'Comment on Video', description: 'Leave a comment on a partner’s video.', reward: 'Rs. 20', category: 'Advance' },
    { id: 12, title: 'Join Webinar', description: 'Attend a short 10-minute live session.', reward: 'Rs. 50', category: 'Advance' },
    { id: 13, title: 'Like Facebook Page', description: 'Like and follow a business page on Facebook.', reward: 'Rs. 10', category: 'Professional' },
    { id: 14, title: 'Retweet Post', description: 'Retweet a post from a verified partner account.', reward: 'Rs. 15', category: 'Professional' },
    { id: 15, title: 'Create Instagram Story', description: 'Post a branded story with mention.', reward: 'Rs. 40', category: 'Professional' },
    { id: 16, title: 'Post Review on Blog', description: 'Write a short review on your personal blog.', reward: 'Rs. 70', category: 'Professional' },
    { id: 17, title: 'YouTube Comment + Like', description: 'Engage with a sponsored video.', reward: 'Rs. 25', category: 'Professional' },
    { id: 18, title: 'Follow Twitter Space', description: 'Follow a live Twitter space for 5 mins.', reward: 'Rs. 30', category: 'Professional' }
  ];

  const categoryPrices = {
    Basic: 50,
    Advance: 100,
    Professional: 200,
  };

  const categoryColors = {
    Basic: 'from-blue-100 via-white to-blue-50',
    Advance: 'from-blue-100 via-white to-blue-50',
    Professional: 'from-blue-100 via-white to-blue-50',
  };

  const categoryAnimations = {
    Basic: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    Advance: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    Professional: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
  };

  const CategoryIcons = {
    Basic: <Layers size={16} className="inline-block mr-1" />,
    Advance: <Zap size={16} className="inline-block mr-1" />,
    Professional: <Award size={16} className="inline-block mr-1" />,
  };

  const handleStartTask = (taskId) => {
    if (!isPaid[selectedCategory]) {
      setShowToast(true);
    } else {
      navigate(`/task/${taskId}`);
    }
  };

  const handleToastOk = () => {
    setShowToast(false);
    navigate(`/transaction?category=${selectedCategory}&amount=${categoryPrices[selectedCategory]}`);
  };

  const tasks = allTasks
    .filter((task) => task.category === selectedCategory)
    .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-x-hidden overflow-y-auto px-4 pb-10 pt-6">
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 border border-yellow-400 text-yellow-800 px-6 py-3 rounded shadow z-50 flex flex-col items-center"
        >
          <p className="mb-2">
            Please complete the Rs.{categoryPrices[selectedCategory]} payment to unlock {selectedCategory} tasks.
          </p>
          <button
            onClick={handleToastOk}
            className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-yellow-600 text-sm"
          >
            OK
          </button>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {['Basic', 'Advance', 'Professional'].map((cat) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md flex items-center gap-1 text-sm sm:text-base ${
              selectedCategory === cat
                ? 'bg-white text-blue-800 ring-2 ring-blue-400'
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            {CategoryIcons[cat]} {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* 🔍 Search Bar */}
      <div className="mt-6 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
        />
      </div>

      <main className="px-2 sm:px-6 py-8 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 text-center">
          {selectedCategory} Tasks
        </h2>
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={categoryAnimations[task.category].initial}
              animate={categoryAnimations[task.category].animate}
              transition={{ duration: 0.4, delay: task.id * 0.1 }}
              className={`bg-gradient-to-br ${categoryColors[task.category]} p-5 rounded-xl shadow-xl hover:shadow-2xl transition-all border border-blue-200`}
            >
              <h3 className="font-semibold text-lg mb-2 text-blue-800">{task.title}</h3>
              <p className="text-sm text-blue-600 mb-2">{task.description}</p>
              <p className="text-sm text-blue-900 font-medium mb-4">Reward: {task.reward}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-2 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
                onClick={() => handleStartTask(task.id)}
              >
                Start Task
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
