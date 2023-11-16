const conn = require('../../Config/dbConnection')

exports.UpdateAllCatagoriesController = async (req, res, next) => {
    const {
        name,
        englishname,
        colorcode,
        id } = req.body

    let sql;
    if (name === "" || englishname === "" || id === "" || colorcode === "" || !id) {
        res.status(400).send({
            success: false,
            message: "every feild are required"
        })
    }

    else {
        if (!req.file) {
            sql = `UPDATE  ProductCategory SET name = ('${name}'),englishname =  ('${englishname}'),colorcode =  ('${colorcode}') WHERE id = ('${id}') AND isDelete = 0`
        }
        else {
            const {
                filename
            } = req.file
            sql = `UPDATE  ProductCategory SET name = ('${name}'),englishname =  ('${englishname}'),colorcode =  ('${colorcode}'),categoryimage = ('${filename}') WHERE id = ('${id}') AND isDelete = 0`
        }

        conn.query(sql, function (err, data, fields) {
            if (err) {
                res.status(500).send({
                    success: false,
                    error: err.message,
                    message: "UPDATE_CATAGORY_FAILED"
                })
            }
            else {
                if (data.affectedRows === 0) {
                    res.status(400).send({
                        success: false,
                        message: "Please enter valid data"
                    })
                }
                else {
                    res.status(200).send({
                        success: true,
                        list: {
                            id: id,
                            name,
                            englishname,
                            colorcode,
                            categoryimage: !req.file ? null : req.file.filename,
                        },
                        message: "UPDATE_CATAGORY_SUCCESS"
                    });
                }
            }
        });
    }
}