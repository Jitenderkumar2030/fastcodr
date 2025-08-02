import React, { useState } from 'react';
import { createSubscriptionLink } from './lib/cashfree';

const PLAN = {
  name: 'FastCodr Premium',
  price: '$10/month',
  features: [
    'Unlock all premium features',
    'Priority support',
    'Early access to new tools',
  ],
};

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    setLoading(true);
    setError('');
    try {
      // For MVP, use dummy user info or fetch from profile
      const user = { email: 'user@example.com', name: 'FastCodr User' };
      const res = await createSubscriptionLink(user);
      if (res && res.subscription_link) {
        window.location.href = res.subscription_link;
      } else {
        setError('Failed to get payment link.');
      }
    } catch (e: any) {
      setError(e.message || 'Payment initiation failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-2 text-center text-blue-700 dark:text-blue-300">{PLAN.name}</h1>
        <div className="text-center text-3xl font-extrabold text-purple-700 dark:text-purple-300 mb-4">{PLAN.price}</div>
        <ul className="mb-6 space-y-2">
          {PLAN.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
              {f}
            </li>
          ))}
        </ul>
        <button
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow hover:from-blue-700 hover:to-purple-700 transition"
          onClick={handleSubscribe}
          disabled={loading}
        >
          {loading ? 'Redirecting...' : 'Subscribe Now'}
        </button>
        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
      </div>
    </div>
  );
}
