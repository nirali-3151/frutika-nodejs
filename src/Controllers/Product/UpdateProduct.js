const conn = require('../../Config/dbConnection')

exports.UpdateAllProductsController = async (req, res, next) => {
    const {
        pro_cat_id,
        name,
        price,
        weight,
        description,
        nutrition,
        rating,
        id
    } = req.body

    const {
        filename
    } = req.file

    const sql = `UPDATE product SET description =  ('${description}'),nutrition =  ('${nutrition}') ,rating =  ('${rating}'), name = ('${name}'),pro_cat_id =  ('${pro_cat_id}'),price =  ('${price}'),weight =  ('${weight}'),image = ('${filename}') WHERE id = ('${id}') `
    conn.query(sql, function (err, data, fields) {
        if (err) {
            res.send({
                success: false,
                error: err.message,
                message: 'PRODUCT_UPDATE_FAILED'
            })
        }
        else {
            res.send({
                success: true,
                data: {
                    "id": id,
                    "pro_cat_id": pro_cat_id,
                    "name": name,
                    "price": price,
                    "weight": weight,
                    "description": description,
                    "nutrition": nutrition,
                    "rating": rating,
                    "bestseller": 0,
                    "is_favourite": 0,
                    "is_addTocart": 0,
                    "image": filename,
                    "isDelete": 0
                },
                message: 'PRODUCT_UPDATE_SUCCESS'
            });
        }
    });
}   