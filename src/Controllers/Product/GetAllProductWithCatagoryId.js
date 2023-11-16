const conn = require('../../Config/dbConnection')
const { authorizationFunctioon } = require('../../Utils/AuthorizationFunction')

exports.GetAllProductsWithCatagoryId = async (req, res, next) => {
    const { id } = req.query
    const userId = await authorizationFunctioon(req, res)
    const sql1 = `SELECT p.id , p.pro_cat_id ,p.name ,p.price,p.weight,p.description,p.nutrition,p.rating,p.bestseller ,p.image ,c.quantity as cart_qty ,c.weight as cart_weight, c.price as cart_price,c.id as cartId ,IF ((SELECT COUNT(*) FROM favourite as f WHERE f.product_id = p.id and f.user_id = ${userId.id}) > 0 , 1 , 0) as is_favourite from product as p Left JOIN cart as c on c.product_id = p.id and c.user_id = ${userId.id} where p.pro_cat_id = ${id} AND p.isDelete = 0`
    conn.query(sql1, function (err, data, fields) {
        if (err) {
            res.status(500).send({
                success: false,
                error: err.message,
                message: 'GET_PRODUCT_WITH_CATAGORY_ID_FAILED'
            })
        }
        else {
            const finalData = data.map((d) => {
                return {
                    "id": d.id,
                    "pro_cat_id": d.pro_cat_id,
                    "name": d.name,
                    "price": d.price,
                    "weight": d.weight,
                    "description": d.description,
                    "nutrition": d.nutrition,
                    "rating": d.rating,
                    "bestseller": d.bestseller,
                    "image": d.image,
                    "cart":
                        d.cartId ?
                            {
                                cart_qty: d.cart_qty,
                                cart_weight: d.cart_weight,
                                cart_price: d.cart_price,
                                cartId: d.cartId
                            } : {},
                    "is_favourite": d.is_favourite
                }
            })
            res.status(200).send({
                success: true,
                list: finalData,
                message: 'GET_PRODUCT_WITH_CATAGORY_ID_SUCCESS'
            });
        }
    });
}  
//  on c.product_id = p.id and c.user_id = 1