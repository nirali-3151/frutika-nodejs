const { UpdateAllProductsController } = require('./UpdateProduct')
const { AddAllProductsController } = require('./AddProduct')
const { DeleteAllProductsController } = require('./deleteProduct')
const { GetAllProductsController } = require('./getAllProduct')
const { uploadProductImage } = require('./UploadProductImages')
const { GetAllProductsWithCatagoryId } = require('./GetAllProductWithCatagoryId')
const { GetSingleProductsController } = require('./getSingleProduct')
const {SearchProductsController} = require('./searchProduct')

module.exports = {
    UpdateAllProductsController,
    AddAllProductsController,
    DeleteAllProductsController,
    GetAllProductsController,
    uploadProductImage,
    GetAllProductsWithCatagoryId,
    GetSingleProductsController,
    SearchProductsController
}