import React from 'react';
import { setSubscriptionStatus } from './lib/cashfree';

export default function SubscribeSuccessPage() {
  React.useEffect(() => {
    setSubscriptionStatus(true);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">Subscription Successful!</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-200">Thank you for subscribing to <b>FastCodr Premium</b>.<br/>Premium features are now unlocked.</p>
        <a href="/" className="inline-block mt-4 px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Go to Dashboard</a>
      </div>
    </div>
  );
}
