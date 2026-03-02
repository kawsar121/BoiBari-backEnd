const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET);

exports.createStripeSession = async (title, price) => {
  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: title },
        unit_amount: price * 100
      },
      quantity: 1
    }],
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`
  });
};