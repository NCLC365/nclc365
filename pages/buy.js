import { useState } from 'react';

export default function Buy() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const { id } = await res.json();

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    await stripe.redirectToCheckout({ sessionId: id });

    setLoading(false);
  };

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-3xl font-bold mb-8">Get the NCLC365 Tool List</h1>
      <p className="text-lg mb-6">One-time payment of $9 for lifetime access.</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-500 text-white px-6 py-3 rounded w-full"
        >
          {loading ? 'Processing...' : 'Pay $9'}
        </button>
      </form>
    </div>
  );
}