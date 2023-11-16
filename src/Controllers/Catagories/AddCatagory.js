const conn = require('../../Config/dbConnection')

exports.AddAllCatagoriesController = async (req, res, next) => {
    const {
        name,
        englishname,
        colorcode } = req.body

    if (!req.file || !name || !englishname || !colorcode) {
        res.status(401).send({
            success: false,
            message: 'every feild are required',
        })
    }
    else {
        const {
            filename
        } = req.file

        const sql1 = `Insert into ProductCategory(name ,englishname,colorcode, categoryimage) VALUES ('${name}' , '${englishname}' , '${colorcode}' , '${filename}')`

        conn.query(sql1, function (err, data, fields) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'RECORD_ADD_FAILED',
                    error: err.message
                })
            }
            else {
                if (data.insertId === 0) {
                    res.status(401).send({
                        success: false,
                        message: 'bad request',
                        error: err.message
                    })
                }
                else {
                    res.status(200).send({
                        success: true,
                        message: 'RECORD_ADD_SUCCESS',
                        data: {
                            id: data.insertId,
                            name,
                            englishname,
                            colorcode,
                            categoryimage: filename,
                        }
                    });
                }
            }
        });
    }
}   