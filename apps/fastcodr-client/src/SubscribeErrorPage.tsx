import React from 'react';
import { setSubscriptionStatus } from './lib/cashfree';

export default function SubscribeErrorPage() {
  React.useEffect(() => {
    setSubscriptionStatus(false);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2 text-red-700 dark:text-red-300">Subscription Failed</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-200">There was a problem processing your payment.<br/>Please try again or contact support.</p>
        <a href="/subscribe" className="inline-block mt-4 px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Retry Payment</a>
      </div>
    </div>
  );
}
