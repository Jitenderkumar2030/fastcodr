// Cashfree integration utility for FastCodr
// Handles plan creation, subscription session, and status check
// Uses fetch for REST API calls

const CASHFREE_BASE_URL = process.env.CASHFREE_BASE_URL || 'https://sandbox.cashfree.com/pg';
const CASHFREE_CLIENT_ID = process.env.CASHFREE_CLIENT_ID || '';
const CASHFREE_CLIENT_SECRET = process.env.CASHFREE_CLIENT_SECRET || '';
const CASHFREE_PLAN_ID = process.env.CASHFREE_PLAN_ID || '';

// Helper to get access token
export async function getCashfreeToken() {
  const res = await fetch(`${CASHFREE_BASE_URL}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-client-id': CASHFREE_CLIENT_ID,
      'x-client-secret': CASHFREE_CLIENT_SECRET,
    },
    body: JSON.stringify({ grant_type: 'client_credentials' }),
  });
  if (!res.ok) throw new Error('Failed to get Cashfree token');
  return res.json();
}

// Create a subscription link for the user
export async function createSubscriptionLink(user: { email: string, name: string }) {
  const { access_token } = await getCashfreeToken();
  const res = await fetch(`${CASHFREE_BASE_URL}/pg/subscription-plans/${CASHFREE_PLAN_ID}/subscriptions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      customer_details: {
        customer_email: user.email,
        customer_name: user.name,
      },
      subscription_note: 'FastCodr Premium Subscription',
      return_url: window.location.origin + '/subscribe/success',
      cancel_url: window.location.origin + '/subscribe/error',
    }),
  });
  if (!res.ok) throw new Error('Failed to create subscription');
  return res.json();
}

// Check subscription status (MVP: store in localStorage)
export function setSubscriptionStatus(status: boolean) {
  localStorage.setItem('fastcodr_subscription', status ? 'active' : 'inactive');
}
export function getSubscriptionStatus(): boolean {
  return localStorage.getItem('fastcodr_subscription') === 'active';
}

// For support link
export function getSupportEmail() {
  return 'support@fastcodr.com';
}
