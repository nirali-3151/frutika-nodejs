const conn = require('../../Config/dbConnection')
const { authorizationFunctioon } = require('../../Utils/AuthorizationFunction')

exports.AddFavouriteController = async (req, res, next) => {
    const {
        product_id } = req.body
    const userId = await authorizationFunctioon(req, res)

    if (!userId && !product_id) {
        return res.status(401).send({
            success: false,
            message: 'Please Enter Valid Data',
        });
    }
    else {
        const sql1 = `Insert into favourite(product_id , user_id) VALUES ('${product_id}' , '${userId.id}')`

        conn.query(sql1, function (err, data, fields) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'FAVOURITE_ADD_FAILED',
                    error: err.message
                })
            }
            else {
                res.status(200).send({
                    success: true,
                    message: 'FAVOURITE_ADD_SUCCESS',
                    data: {
                        id:product_id
                    }
                });
            }
        });
    }
}   