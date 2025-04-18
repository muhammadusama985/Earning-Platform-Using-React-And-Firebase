import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Avatar1 from '../../assets/avatar1.png';
import Avatar2 from '../../assets/avatar2.png';
import Avatar3 from '../../assets/avatar3.png';
import Avatar4 from '../../assets/avatar4.png';

export default function Profile() {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(Avatar1);
  const [name, setName] = useState('Ebrahim Gillani');
  const [email, setEmail] = useState('ebrahim@example.com');

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

  const userStats = {
    tasksCompleted: 12,
    totalEarnings: 'Rs. 350',
  };

  const avatars = [
    Avatar1, Avatar2, Avatar3, Avatar4,
    Avatar1, Avatar2, Avatar3, Avatar4,
  ];

  const handleSaveProfile = () => {
    console.log('Updated Name:', name);
    console.log('Updated Email:', email);
    console.log('Avatar saved:', selectedAvatar);
    alert('Profile updated successfully!');
  };

  return (
<div className="min-h-screen w-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-x-hidden pl-40 pr-4 pt-20 pb-12 flex items-center">
<motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-2xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Your Profile
        </motion.h2>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          src={selectedAvatar}
          alt="Selected Avatar"
          className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-blue-500"
        />

        {/* Editable Fields */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border border-blue-300 rounded-md text-center text-blue-900 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-blue-300 rounded-md text-center text-blue-900 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-around my-8">
          <div className="text-center">
            <h4 className="text-3xl text-purple-600 font-extrabold">{userStats.tasksCompleted}</h4>
            <p className="text-sm text-gray-600">Tasks Done</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl text-green-600 font-extrabold">{userStats.totalEarnings}</h4>
            <p className="text-sm text-gray-600">Earnings</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-4 text-blue-700">Choose Your Avatar</h4>
        <div className="flex overflow-x-auto gap-4 py-2 justify-center">
          {avatars.map((avatar, index) => (
            <motion.img
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              src={avatar}
              alt="avatar"
              onClick={() => setSelectedAvatar(avatar)}
              className={`w-16 h-16 rounded-full cursor-pointer border-4 transition-all duration-300 ${
                selectedAvatar === avatar ? 'border-blue-600' : 'border-gray-300'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSaveProfile}
          className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:shadow-lg transition"
        >
          Update Profile
        </motion.button>
      </motion.div>
    </div>
  );
}
