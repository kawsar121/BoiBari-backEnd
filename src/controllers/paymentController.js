const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET);

exports.stripePayment = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: req.body.title },
        unit_amount: req.body.price * 100
      },
      quantity: 1
    }],
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`
  });

  res.json({ id: session.id });
};