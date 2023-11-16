const conn = require('../../Config/dbConnection')

exports.AddAllProductsController = async (req, res, next) => {
    const {
        pro_cat_id,
        name,
        price,
        weight,
        description,
        nutrition,
        rating,
        user_id
    } = req.body


    const {
        filename
    } = req.file

    const sql1 = `Insert into product(pro_cat_id ,name,price, weight,description,nutrition,rating,image,user_id) VALUES ('${pro_cat_id}' , '${name}' , '${price}' , '${weight}' , '${description}' , '${nutrition}', '${rating}','${filename}' ,'${user_id}')`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.send({
                success: false,
                error: err.message,
                message: 'PRODUCT_ADD_FAILED'
            })
        }
        else {
            res.send({
                success: true,
                message: 'PRODUCT_ADD_SUCCESS',
                data: {
                    "id": data.insertId,
                    "user_id": user_id,
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
                }
            });
        }
    });
}