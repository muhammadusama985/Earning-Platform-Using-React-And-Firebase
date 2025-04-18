import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';

export default function UserTasks() {
  const [status, setStatus] = useState('Pending');
  const [proofs, setProofs] = useState({});
  const [files, setFiles] = useState({});
  const [proofStatus, setProofStatus] = useState({});

  const tasks = [
    { id: 1, title: 'Follow on Twitter', status: 'Pending' },
    { id: 2, title: 'Complete Survey', status: 'Pending' },
    { id: 3, title: 'Watch YouTube Video', status: 'Completed' },
    { id: 4, title: 'Install App', status: 'Pending' },
    { id: 5, title: 'Like Facebook Page', status: 'Completed' },
  ];

  const filteredTasks = tasks.filter(task => task.status === status);

  const icons = {
    Pending: <Clock size={18} className="text-yellow-500" />,
    Completed: <CheckCircle size={18} className="text-green-600" />
  };

  const handleProofChange = (id, value) => {
    setProofs(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (id, file) => {
    setFiles(prev => ({ ...prev, [id]: file }));
  };

  const handleSubmitProof = (id) => {
    if (!proofs[id] && !files[id]) {
      alert('Please provide a proof description or upload a file.');
      return;
    }

    // ✅ You can send `proofs[id]` and `files[id]` to your backend here
    setProofStatus(prev => ({ ...prev, [id]: 'Pending' }));
    alert('Proof submitted! Admin will review it.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
        My Tasks
      </h2>

      <div className="flex justify-center gap-4 mb-8">
        {['Pending', 'Completed'].map(tab => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStatus(tab)}
            className={`px-5 py-2 rounded-full font-semibold shadow transition-all duration-300 flex items-center gap-2 ${
              status === tab
                ? 'bg-blue-600 text-red-800'
                : 'bg-white text-blue-600 border border-blue-500'
            }`}
          >
            {icons[tab]} {tab}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={status}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filteredTasks.map(task => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl border-l-4 border-blue-400"
          >
            <h4 className="font-semibold text-blue-800 text-lg mb-2">{task.title}</h4>
            <p className="text-sm text-gray-600 mb-3">
              Status: <span className="font-bold text-blue-600">{task.status}</span>
            </p>

            {status === 'Pending' && (
              <>
                {/* 📝 Proof Description */}
                <input
                  type="text"
                  placeholder="Enter proof URL or description"
                  value={proofs[task.id] || ''}
                  onChange={(e) => handleProofChange(task.id, e.target.value)}
                  className="w-full mb-2 px-3 py-1 border border-blue-300 rounded-md text-sm focus:ring-2 focus:ring-blue-400"
                />

                {/* 📁 File Upload */}
                <label className="w-full inline-block mb-2">
  <input
    type="file"
    accept="image/*,video/*,.pdf,.doc,.docx"
    onChange={(e) => handleFileChange(task.id, e.target.files[0])}
    className="hidden"
    id={`file-input-${task.id}`}
  />
  <div className="cursor-pointer text-sm text-blue-600 border border-blue-400 py-2 px-4 rounded-md text-center hover:bg-blue-50 transition">
    📎 Upload Proof File
  </div>
</label>

{/* Show selected file name */}
{files[task.id] && (
  <p className="text-xs text-blue-800 italic truncate mb-1">
    Selected: {files[task.id].name}
  </p>
)}


                {/* 📎 Show filename */}
                {files[task.id] && (
                  <p className="text-xs text-blue-500 mb-1">📎 {files[task.id].name}</p>
                )}

                <button
                  onClick={() => handleSubmitProof(task.id)}
                  className="w-full bg-gradient-to-r from-blue-200 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
                  >
                  Submit Proof
                </button>

                {/* ✅ Proof Status */}
                {proofStatus[task.id] && (
                  <p className={`text-sm font-semibold ${
                    proofStatus[task.id] === 'Accepted' ? 'text-green-600' :
                    proofStatus[task.id] === 'Rejected' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>
                    Proof Status: {proofStatus[task.id]}
                  </p>
                )}
              </>
            )}
          </motion.div>
        ))}
        {filteredTasks.length === 0 && (
          <div className="col-span-full text-center text-gray-500 mt-4">
            No tasks under <strong>{status}</strong> right now.
          </div>
        )}
      </motion.div>
    </div>
  );
}
