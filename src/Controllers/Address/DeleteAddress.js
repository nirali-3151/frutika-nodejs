const conn = require('../../Config/dbConnection')
const { authorizationFunctioon } = require('../../Utils/AuthorizationFunction')

exports.DeleteAddressController = async (req, res, next) => {
    const { id } = req.body
    const userId = await authorizationFunctioon(req, res)

    const sql1 = `UPDATE address SET isDelete=(1) WHERE address_id = '${id}'`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.status(500).send({
                success: false,
                message: "DELETE_ADDRESS_FAILED",
                error: err.message
            })
        }
        else {
            if (data.affectedRows === 0 || data.changedRows === 0) {
                res.status(401).send({
                    success: true,
                    message: "Address with this id not exist",
                });
            }
            else {
                res.status(200).send({
                    success: true,
                    message: "DELETE_ADDRESS_SUCCESS",
                    data: { address_id: id }
                });
            }
        }
    });
}   