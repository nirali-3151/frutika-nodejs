const conn = require('../../Config/dbConnection')

exports.DeleteCartController = async (req, res, next) => {
    const { id } = req.params
    const sql1 = `UPDATE cart SET is_delete=(1) WHERE id = '${id}'`
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