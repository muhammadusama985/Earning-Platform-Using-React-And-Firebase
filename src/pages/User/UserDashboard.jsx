// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation, Outlet } from 'react-router-dom';
// import { User, LogOut, LayoutDashboard, Menu, Wallet, Settings, ClipboardList, Users, Gift, HelpCircle } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function UserDashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     window.history.pushState(null, '', window.location.href);
//     const handlePopState = () => {
//       window.history.pushState(null, '', window.location.href);
//     };
//     window.addEventListener('popstate', handlePopState);
//     return () => {
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 overflow-hidden relative">
//       {/* Top Navbar */}
//       <div className="sticky top-0 left-0 z-50 bg-blue-600 text-white shadow-md py-4 px-6 text-xl font-bold">
//         TaskZone
//       </div>

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <AnimatePresence>
//           {sidebarOpen && (
//             <motion.aside
//               initial={{ x: -300 }}
//               animate={{ x: 0 }}
//               exit={{ x: -300 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//               className="w-64 h-full overflow-y-auto bg-gradient-to-b from-white via-blue-50 to-purple-100 text-gray-800 p-6 flex flex-col gap-4 shadow-xl z-40"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate('/userDashboard')}
//                 className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
//                   isActive('/userDashboard') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
//                 }`}
//               >
//                 <LayoutDashboard size={18} /> Dashboard
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate('/userDashboard/profile')}
//                 className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
//                   isActive('/userDashboard/profile') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
//                 }`}
//               >
//                 <User size={18} /> Profile
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate('/userDashboard/tasks')}
//                 className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
//                   isActive('/userDashboard/tasks') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
//                 }`}
//               >
//                 <ClipboardList size={18} /> My Tasks
//               </motion.button>

//               {/* ✅ Leaderboard */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate('/userDashboard/leaderboard')}
//                 className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
//                   isActive('/userDashboard/leaderboard') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
//                 }`}
//               >
//                 <Users size={18} /> Leaderboard
//               </motion.button>

//               {/* ✅ Referral Code */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate('/userDashboard/referral')}
//                 className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
//                   isActive('/userDashboard/referral') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
//                 }`}
//               >
//                 <Gift size={18} /> Referral Code
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate('/userDashboard/withdraw')}
//                 className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
//                   isActive('/userDashboard/withdraw') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
//                 }`}
//               >
//                 <Wallet size={18} /> Withdraw
//               </motion.button>

//               {/* ✅ FAQ */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate('/userDashboard/faq')}
//                 className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
//                   isActive('/userDashboard/faq') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
//                 }`}
//               >
//                 <HelpCircle size={18} /> FAQ
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate('/login')}
//                 className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
//                   isActive('/login') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
//                 }`}
//               >
//                 <LogOut size={18} /> Logout
//               </motion.button>
//             </motion.aside>
//           )}
//         </AnimatePresence>

//         {/* Sidebar Toggle */}
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="absolute top-4 left-4 z-50 bg-white shadow p-2 rounded-full md:hidden"
//         >
//           <Menu size={20} />
//         </button>

//         {/* Main Content */}
//         <div className="flex-1 h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { User, LogOut, LayoutDashboard, Menu, Wallet, Settings, ClipboardList, Users, Gift, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only run this logic if screen width is <= 768px (mobile/tablet)
      if (window.innerWidth <= 768 && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
  
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);
  

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 overflow-hidden relative">
      {/* Top Navbar */}
      <div className="sticky top-0 left-0 z-50 bg-blue-600 text-white shadow-md py-4 px-6 text-xl font-bold flex justify-between items-center">
        <span className="text-base sm:text-xl md:text-2xl">TaskZone</span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white shadow p-2 rounded-full md:hidden"
        >
         <Menu size={20} className="text-blue-800" />

        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              ref={sidebarRef}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-64 h-full overflow-y-auto bg-gradient-to-b from-white via-blue-50 to-purple-100 text-gray-800 p-6 flex flex-col gap-4 shadow-xl z-40 fixed md:relative"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/userDashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  isActive('/userDashboard') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
                }`}
              >
                <LayoutDashboard size={18} /> Dashboard
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/userDashboard/profile')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  isActive('/userDashboard/profile') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
                }`}
              >
                <User size={18} /> Profile
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/userDashboard/tasks')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  isActive('/userDashboard/tasks') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
                }`}
              >
                <ClipboardList size={18} /> My Tasks
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/userDashboard/leaderboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  isActive('/userDashboard/leaderboard') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
                }`}
              >
                <Users size={18} /> Leaderboard
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/userDashboard/referral')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  isActive('/userDashboard/referral') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
                }`}
              >
                <Gift size={18} /> Referral Code
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/userDashboard/withdraw')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  isActive('/userDashboard/withdraw') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
                }`}
              >
                <Wallet size={18} /> Withdraw
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/userDashboard/faq')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  isActive('/userDashboard/faq') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
                }`}
              >
                <HelpCircle size={18} /> FAQ
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/login')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                  isActive('/login') ? 'bg-blue-200 text-blue-900' : 'hover:bg-blue-100 text-blue-700'
                }`}
              >
                <LogOut size={18} /> Logout
              </motion.button>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

