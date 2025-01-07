import React, { useState } from 'react';
import { UserIcon, MailIcon, LockIcon } from 'lucide-react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="container mx-auto px-4 py-8 max-w-7xl min-h-[80vh] flex items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </h2>
          <p className="text-sm text-gray-600">
            Please {state === 'Sign Up' ? 'sign up' : 'login'} to book appointment
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-lg font-medium text-gray-900 mb-4 block">
              Full Name
            </label>
            <div className="relative">
              <UserIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className="w-full px-4 py-3 pl-10 text-sm rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-gray-900 mb-4 block">
              Email
            </label>
            <div className="relative">
              <MailIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="w-full px-4 py-3 pl-10 text-sm rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-gray-900 mb-4 block">
              Password
            </label>
            <div className="relative">
              <LockIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="w-full px-4 py-3 pl-10 text-sm rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={onSubmitHandler}
            className="w-full mt-8 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          <button
            type="button"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
            className="w-full text-sm text-gray-600 hover:text-gray-800 mt-4 text-center"
          >
            {state === 'Sign Up'
              ? 'Already have an account? Login'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;