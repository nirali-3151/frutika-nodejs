const conn = require('../../Config/dbConnection')

exports.DeleteAllProductsController = async (req, res, next) => {
    const { id } = req.body
    const sql1 = `UPDATE product SET isDelete=(1) WHERE id = '${id}'`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.send({
                success: false,
                error: err.message,
                message: "DELETE_FAILED",
            })
        }
        else {
            res.send({
                success: true,
                message: "DELETE_SUCCESSFULLY",
                list: {
                    id
                }
            });
        }
    });
}