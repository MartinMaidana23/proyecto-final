const mercadopago = require('mercadopago')

// Agrega credenciales (ACCESS TOKEN - Del vendedor)
mercadopago.configure({
    access_token: 'TEST-5840650845306044-120119-8b1aa2a398102c63f5dd40fde4f8586b-1252941424',
});

console.log('----- configuración de SDK de mercadopago ok! -----')

const feedBack = (req,res) => {
    let infoPago = {
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    };

    console.log('prueba', infoPago)

    res.redirect('/')
}

module.exports =  {
    feedBack
}