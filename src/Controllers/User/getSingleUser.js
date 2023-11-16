const conn = require('../../Config/dbConnection')

exports.GetSignleUserController = async (req, res, next) => {
    const { id } = req.query
    const sql1 = `SELECT * FROM signup WHERE id = '${id}'`
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
                list: data,
                message: 'DELETE_SUCCESS'
            });
        }
    });
}   