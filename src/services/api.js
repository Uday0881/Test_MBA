const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export async function submitContact(payload) {
  const response = await fetch(`${BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || 'Failed to submit contact form.');
  }

  return response.json();
}

export async function fetchSiteContent() {
  const response = await fetch(`${BASE_URL}/content`);
  if (!response.ok) {
    throw new Error('Failed to load website content.');
  }
  return response.json();
}
