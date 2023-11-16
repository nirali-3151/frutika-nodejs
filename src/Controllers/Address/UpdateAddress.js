const conn = require('../../Config/dbConnection')
const { authorizationFunctioon } = require('../../Utils/AuthorizationFunction')

exports.UpdateAddressController = async (req, res, next) => {
    const userId = await authorizationFunctioon(req, res)
    const { address, address_id } = req.body

    const sql1 = `UPDATE address SET address = '${address}' WHERE address_id = '${address_id}' AND isDelete = 0`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.status(500).send({
                success: false,
                message: "UPDATE_ADDRESS_FAILED",
                error: err.message
            })
        }
        else {
            if (data.affectedRows === 0) {
                res.status(401).send({
                    success: true,
                    message: "Address with this id not exist",
                });
            }
            else {
                res.status(200).send({
                    success: true,
                    message: "UPDATE_ADDRESS_SUCCESS",
                    data: {
                        address_id: address_id,
                        address: address
                    }
                });
            }
        }
    });
}   