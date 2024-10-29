const express = require("express");
const stripe = require("stripe")(
  "sk_test_51QDra5DFEtVBuZZoXEtjwj7BaPbfeLk00SvDTTXGjh9ZWsmAcJoKlQS4JTFGrdkR1ad9SIHHCQy708qdBz0S3wAv00HH44xShr"
);
const stripePayment = express.Router();

stripePayment.post("/create-checkout-session", async (req, res) => {
  const orderData = req.body;
  const amount = orderData.cartItems[0].price;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.json({ url: session.url });
  console.log(session.url);
  // try {
  //     const paymentIntent = await stripe.paymentIntents.create({
  //       amount: amount, // e.g., 1000 for $10.00
  //       currency: "usd",
  //     });

  //     res.json({ clientSecret: paymentIntent.client_secret });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
});

module.exports = stripePayment;
