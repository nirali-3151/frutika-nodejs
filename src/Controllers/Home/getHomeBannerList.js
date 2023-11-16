const conn = require('../../Config/dbConnection')

exports.GetAllHomeBannerController = async (req, res, next) => {
    const sql1 = `SELECT * FROM banner`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.send({
                success: false,
                error: err.message,
                message: "GET_BANNER_FAILED"
            })
        }
        else {
            res.send({
                success: true,
                list: data,
                message: "GET_BANNER_SUCCESS"
            });
        }
    });
}   