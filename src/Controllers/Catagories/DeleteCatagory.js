const conn = require('../../Config/dbConnection')

exports.DeleteAllCatagoriesController = async (req, res, next) => {
    const { id } = req.body
    const sql1 = `UPDATE ProductCategory SET isDelete=(1) WHERE id = '${id}'`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.status(500).send({
                success: false,
                message: "DELETE_FAIL",
                error: err.message
            })
        }
        else {
            if (data.changedRows === 0) {
                res.status(400).send({
                    success: false,
                    message: "Plese Enter valid id",
                })
            }
            else {
                res.status(200).send({
                    success: true,
                    message: "DELETE_SUCCESS",
                    data: { id }
                });
            }
        }
    });
}   