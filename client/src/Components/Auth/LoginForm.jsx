import React from 'react';

function LoginForm() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-200 mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-200 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-200 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
