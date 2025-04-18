

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Transaction from './pages/Transaction';
import UserDashboard from './pages/User/UserDashboard';
import Home from './pages/Home';
import Profile from './pages/User/Profile';
import DashboardTasks from './pages/User/DashboardTasks';
import Withdraw from './pages/User/Withdraw';
import ForgotPassword from './pages/User/ForgetPassword';
import UserTasks from './pages/User/UserTasks';
import Leaderboard from './pages/User/LeaderBoard';
import ReferralPage from './pages/User/ReferalPage';
import FAQ from './pages/User/Faq';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ✅ Nest routes inside /userDashboard layout */}
        <Route path="/userDashboard" element={<UserDashboard />}>
  <Route index element={<DashboardTasks />} />
  <Route path="profile" element={<Profile />} />
  <Route path="withdraw" element={<Withdraw />} />
  <Route path="tasks" element={<UserTasks />} />
  <Route path="leaderboard" element={<Leaderboard />} />
  <Route path="referral" element={<ReferralPage />} />
  <Route path="faq" element={<FAQ />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
