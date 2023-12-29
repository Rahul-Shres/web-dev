const { default: axios } = require("axios")
const Order = require("../../../model/orderSchema")

exports.initiateKhaltiPayment = async(req,res)=>{
    const {orderId,amount}  = req.body 
    if(!orderId || !amount){
        return res.status(400).json({
            message : "Please provide orderId,amount"
        })
    }
    const data = {
        return_url : "http://localhost:8000/api/payment/success", // your backend url
        purchase_order_id : orderId,
        amount : amount,
        website_url : "http://localhost:8000/", // your backend url
        purchase_order_name : "orderName_" + orderId
    }
const response =     await axios.post("https://a.khalti.com/api/v2/epayment/initiate/",data,{
        headers : {
            'Authorization' : 'key 6137cf98a1ab431eaa087c590ac2c19a'
        }
    }
    )

    console.log("response", response);

let order = await Order.findById(orderId)
 order.paymentDetails.pidx = response.data.pidx 
 await order.save()
   res.redirect(response.data.payment_url)

}

exports.verifyPidx = async(req,res)=>{
    const pidx = req.query.pidx
   const response =  await axios.post("https://a.khalti.com/api/v2/epayment/lookup/",{pidx },{
    headers : {
        'Authorization' : 'key 6137cf98a1ab431eaa087c590ac2c19a'

    }
   })
   if(response.data.status == 'Completed'){
    // database ma modification 
   let order = await Order.find({'paymentDetails.pidx' : pidx})
   
   order[0].paymentDetails.method = 'khalti'
   order[0].paymentDetails.status = "paid"
   await order[0].save()

    // notify to frontend 
    res.redirect("http://localhost:8000")
   }else{
    // notify error to frontend
    res.redirect("http://localhost:8000/errorPage")
   }

}
