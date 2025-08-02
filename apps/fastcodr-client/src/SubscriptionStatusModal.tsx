import React from 'react';
import { getSubscriptionStatus, getSupportEmail, setSubscriptionStatus } from './lib/cashfree';

export function SubscriptionStatusModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;
  const isActive = getSubscriptionStatus();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-gray-900 rounded-lg w-[400px] relative p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-200 transition-colors"
        >
          <span className="text-xl">×</span>
        </button>
        <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Subscription Status</h2>
        <div className="mb-4">
          <span className={isActive ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-red-600 dark:text-red-400 font-semibold'}>
            {isActive ? 'Active (Premium)' : 'Inactive (Free)'}
          </span>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            {isActive
              ? 'You have access to all premium features.'
              : 'Upgrade to premium to unlock all features.'}
          </p>
        </div>
        <div className="mb-4">
          <a href={`mailto:${getSupportEmail()}`} className="text-blue-600 hover:underline text-sm">Contact Support</a>
        </div>
        {isActive && (
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to cancel your subscription?')) {
                setSubscriptionStatus(false);
                alert('Subscription cancelled. You will lose premium access.');
                onClose();
              }
            }}
            className="w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded transition-colors mb-2"
          >
            Cancel Subscription
          </button>
        )}
        <button
          onClick={onClose}
          className="w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
