const conn = require('../../Config/dbConnection')

exports.GetAllCatagoriesController = async (req, res, next) => {
    const sql1 = `SELECT id,name ,englishname, colorcode,categoryimage  FROM ProductCategory where isDelete = 0`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.status(500).send({
                success: false,
                error: err.message,
                message: "GET_CATAGORY_FAIL"
            })
        }
        else {
            res.status(200).send({
                success: true,
                list: data,
                message: "GET_CATAGORY_SUCCESS"
            });
        }
    });
}   