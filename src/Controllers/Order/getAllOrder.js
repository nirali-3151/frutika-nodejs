const conn = require('../../Config/dbConnection')

exports.GetAllCatagoriesController = async (req, res, next) => {
    const sql1 = `SELECT * FROM order_detail where isDelete = 0`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.send({
                success: false,
                error: err.message,
                message: "GET_CATAGORY_FAIL"
            })
        }
        else {
            res.send({
                success: true,
                list: data,
                message: "GET_CATAGORY_SUCCESS"
            });
        }
    });
}   