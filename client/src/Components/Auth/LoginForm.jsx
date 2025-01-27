import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, checkAuth } from '../../Slices/AdminAuthSlice.js'; 
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = { staffEmail: email, staffPassword: password };

    dispatch(login(credentials))
    .unwrap()
    .then(() => {
      dispatch(checkAuth());
  
      // Redirect to dashboard or home on successful login
      navigate('/admin/dashboard'); 
    })
    .catch((error) => {
      // Handle any errors from the login
      console.error('Login failed:', error);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-200 mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} 
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-200 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-200 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading} // Disable button while loading
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
