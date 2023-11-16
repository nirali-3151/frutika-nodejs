const conn = require('../../Config/dbConnection')
const { authorizationFunctioon } = require('../../Utils/AuthorizationFunction')
exports.AddAddressController = async (req, res, next) => {
    const {
        address
    } = req.body

    const userId = await authorizationFunctioon(req, res)
    const sql1 = `Insert into address(address ,id ) VALUES ('${address}' , '${userId.id}')`

    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.status(500).send({
                success: false,
                message: "ADD_ADDRESS_FAILED",
                error: err.message
            })
        }
        else {
            if (data.insertId === 0) {
                res.status(401).send({
                    success: false,
                    message: "wrong request send by client",
                });
            }
            else {
                res.status(200).send({
                    success: true,
                    message: "ADD_ADDRESS_SUCCESS",
                    data: {
                        address_id: data.insertId,
                        address: address,
                        id:userId.id
                    }
                });
            }
        }
    });
}   