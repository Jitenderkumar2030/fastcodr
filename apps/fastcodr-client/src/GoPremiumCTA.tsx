import React from 'react';
import { getSubscriptionStatus } from './lib/cashfree';

export function GoPremiumCTA() {
  if (getSubscriptionStatus()) return null;
  return (
    <a
      href="/subscribe"
      className="inline-block px-4 py-2 rounded bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition"
    >
      Go Premium
    </a>
  );
}
