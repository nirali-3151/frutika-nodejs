const conn = require('../../Config/dbConnection')

exports.getAllUsersController = async (req, res, next) => {
    const sql1 = `SELECT * FROM signup`
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
                message: 'DELETE_SUCCESS',
                list: data
            });
        }
    });
}   