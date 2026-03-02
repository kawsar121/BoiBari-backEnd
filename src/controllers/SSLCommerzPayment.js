const SSLCommerzPayment = require("sslcommerz-lts");

exports.sslPayment = async (req, res) => {
  const store_id = process.env.SSL_STORE_ID;
  const store_passwd = process.env.SSL_STORE_PASS;
  const is_live = false;

  const data = {
    total_amount: req.body.price,
    currency: "BDT",
    tran_id: new Date().getTime(),
    success_url: `${process.env.CLIENT_URL}/success`,
    fail_url: `${process.env.CLIENT_URL}/fail`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
    product_name: req.body.title,
    product_category: "Book",
    cus_name: "Customer",
    cus_email: "test@test.com",
    cus_add1: "Dhaka",
    cus_phone: "01700000000",
    shipping_method: "NO",
    product_profile: "general"
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

  sslcz.init(data).then(apiResponse => {
    res.json({ url: apiResponse.GatewayPageURL });
  });
};