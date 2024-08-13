import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RequestPasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestReset = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/auth/request-reset', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error requesting password reset', error);
      setMessage('Failed to send password reset email');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRequestReset} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center text-2xl font-bold mb-4">Request Password Reset</h2>
        {message && <p className="text-green-500 text-xs italic mb-4">{message}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Request Reset
          </button>
          {message && (
            <Link
              to="/"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Back to Home
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default RequestPasswordReset;
