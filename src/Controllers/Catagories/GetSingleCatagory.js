const conn = require('../../Config/dbConnection')
const _ = require("lodash")

exports.GetSignleCatagoriesController = async (req, res, next) => {
    const { id } = req.query
    const sql1 = `SELECT id,name ,englishname, colorcode,categoryimage FROM ProductCategory WHERE id = '${id}' AND isDelete = 0`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.status(500).send({
                success: false,
                message: 'GET_SINGLE_CATAGORY_FAILED',
                error: err.message
            })
        }
        else {
            if (_.isEmpty(data)) {
                res.status(401).send({
                    success: false,
                    message: 'id is not exist',
                })
            }
            else {
                res.status(200).send({
                    success: true,
                    list: data,
                    message: 'GET_SINGLE_CATAGORY_SUCCESS'
                });
            }
        }
    });
}   