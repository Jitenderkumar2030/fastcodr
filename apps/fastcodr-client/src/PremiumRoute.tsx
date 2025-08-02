import React from 'react';
import { getSubscriptionStatus } from './lib/cashfree';

export function PremiumRoute({ children }: { children: React.ReactNode }) {
  if (!getSubscriptionStatus()) {
    window.location.href = '/subscribe';
    return null;
  }
  return <>{children}</>;
}
