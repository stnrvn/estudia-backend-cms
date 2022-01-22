const axios = require('axios')

class PaymentController{
  static snapTransactionToken(req, res){
    const {
      nama,
      email,
      handphone,
      address
    } = req.body

    const gross_amount = req.body.gross_amount
    let getCurrentTimestamp = () => {
        return "" + Math.round(new Date().getTime() / 1000);
      };
      axios({
          url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Basic " + Buffer.from("SB-Mid-server-vWk_z105h8EhejUVqEejPcv1").toString("base64")
            // Above is API server key for the Midtrans account, encoded to base64
          },
          data: {
            transaction_details: {
              order_id: "order-est-" + getCurrentTimestamp(),
              gross_amount,
            },
            credit_card: {
              secure: true
            },
            customer_details: {
              first_name: nama,
              last_name: "",
              email,
              phone: handphone,
              billing_address: {
                "first_name": nama,
                "last_name": "",
                "email": email,
                "phone": handphone,
                "address": address
              },
            }
          }
        }
      ).then( snapResponse => { 
        let snapToken = snapResponse.data.token;
        // Pass the Snap Token to frontend, render the HTML page
        // res.send(getMainHtmlPage(snapToken, handleMainRequest));
        res.json(snapToken)
      })

  }
}

module.exports = PaymentController