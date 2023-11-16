const conn = require('../../Config/dbConnection')
const { authorizationFunctioon } = require('../../Utils/AuthorizationFunction')

exports.DeleteFavouriteController = async (req, res, next) => {
    const { product_id } = req.body
    const userId = await authorizationFunctioon(req, res)

    if (!product_id) {
        return res.status(401).json({
            message: "Product id is required",
            success: false,
        })
    }
    else {
        const sql1 = `UPDATE favourite SET isDelete=(1) WHERE product_id = '${product_id}' AND user_id = '${userId.id}'`
        conn.query(sql1, function (err, data, fields) {
            if (err) {
                res.status(401).send({
                    success: false,
                    message: "DELETE_FAIL",
                    error: err.message
                })
            }
            else {
                res.status(200).send({
                    success: true,
                    message: "DELETE_SUCCESS",
                    data: { id: product_id }
                });
            }
        });
    }
}