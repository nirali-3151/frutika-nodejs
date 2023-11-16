const { GetAllCatagoriesController } = require('./GetAllCatagories')
const { UpdateAllCatagoriesController } = require('./UpadateCatagory')
const { DeleteAllCatagoriesController } = require('./DeleteCatagory')
const { AddAllCatagoriesController } = require('./AddCatagory')
const { uploadCatagoryImage } = require('./UploadCatagoryImages')
const { GetSignleCatagoriesController } = require('./GetSingleCatagory')

module.exports = { uploadCatagoryImage, GetAllCatagoriesController, UpdateAllCatagoriesController, DeleteAllCatagoriesController, AddAllCatagoriesController, GetSignleCatagoriesController }