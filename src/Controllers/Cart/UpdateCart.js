const conn = require('../../Config/dbConnection')

exports.UpdateCartController = async (req, res, next) => {
    const { id } = req.query
    const sql1 = `UPDATE cart SET quantity = '${quantity}' WHERE cart_id = '${id}'`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.send({
                success: false,
                message: "DELETE_CART_FAILED",
                error: err.message
            })
        }
        else {
            if (data.affectedRows === 0) {
                res.send({
                    success: true,
                    message: "Cart with this id not exist",
                });
            }
            else {
                res.send({
                    success: true,
                    message: "DELETE_CART_SUCCESS",
                    data: { id }
                });
            }
        }
    });
}   