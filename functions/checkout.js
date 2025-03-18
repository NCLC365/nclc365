const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { email } = JSON.parse(event.body);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'NCLC365 Tool List' },
        unit_amount: 900, // $9 in cents
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://www.nclc365.com/success',
    cancel_url: 'https://www.nclc365.com/buy',
    customer_email: email,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  };
};