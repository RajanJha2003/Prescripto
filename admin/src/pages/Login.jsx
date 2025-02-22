import React, { useContext, useState } from 'react';
import { UserIcon, MailIcon, LockIcon } from 'lucide-react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { setAdminToken, backendUrl } = useContext(AdminContext);
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password
        });
        
        if (data.success) {
          localStorage.setItem('adminToken', data.token);
          setAdminToken(data.token);
          toast.success('Login successful!');
        } else {
          toast.error(data.message || 'Login failed');
        }
      } 
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <form className="container mx-auto px-4 py-8 max-w-7xl min-h-[80vh] flex items-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {state} Login
          </h2>
          <p className="text-lg text-gray-600">
            Enter your credentials to access the admin panel
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-xl font-medium text-gray-900 mb-4 block">
              Email
            </label>
            <div className="relative">
              <MailIcon className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="w-full px-4 py-4 pl-12 text-lg rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="text-xl font-medium text-gray-900 mb-4 block">
              Password
            </label>
            <div className="relative">
              <LockIcon className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="w-full px-4 py-4 pl-12 text-lg rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={onSubmitHandler}
            className="w-full mt-8 bg-blue-600 text-white py-5 px-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setState(state === 'Admin' ? 'Doctor' : 'Admin')}
              className="text-lg text-gray-600 hover:text-gray-800 hover:underline transition-colors"
            >
              Switch to {state === 'Admin' ? 'Doctor' : 'Admin'} Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;