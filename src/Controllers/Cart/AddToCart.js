const conn = require('../../Config/dbConnection')
const { authorizationFunctioon } = require('../../Utils/AuthorizationFunction')
exports.AddToCartController = async (req, res, next) => {
    const {
        product_id, quantity, weight, price
    } = req.body

    const userId = await authorizationFunctioon(req , res)
    const sql1 = `Insert into cart(product_id ,quantity	,weight	, price ,user_id) VALUES ('${product_id}' , '${quantity}' , '${weight}' , '${price}' , '${userId.id}')`

    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.send({
                success: false,
                message: "ADD_TO_CART_FAILED",
                error: err.message
            })
        }
        else {
            if (data.insertId === 0) {
                res.send({
                    success: true,
                    message: "wrong request send by client",
                });
            }
            else {
                res.send({
                    success: true,
                    message: "ADD_TO_CART_SUCCESS",
                    data: {
                        id: data.insertId,
                        quantity: quantity,
                        weight: weight,
                        price: price,
                        product_id: product_id
                    }
                });
            }
        }
    });
}   