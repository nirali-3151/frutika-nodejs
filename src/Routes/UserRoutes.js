const express = require('express');
const router = express.Router();

const { GetSignleCatagoriesController, uploadCatagoryImage, GetAllCatagoriesController, UpdateAllCatagoriesController, DeleteAllCatagoriesController, AddAllCatagoriesController } = require("../Controllers/Catagories/index")
const { loginController, registerController } = require("../Controllers/Auth_User")
const { uploadProductImage, UpdateAllProductsController, SearchProductsController ,AddAllProductsController, DeleteAllProductsController, GetAllProductsController, GetAllProductsWithCatagoryId, GetSingleProductsController } = require('../Controllers/Product');
const { getAllUsersController, UpdateUserProfileController, uploadUserProfile } = require('../Controllers/User');
const { DeleteCartController, AddToCartController } = require('../Controllers/Cart');
const { AddAddressController,
    DeleteAddressController,
    UpdateAddressController } = require('../Controllers/Address');
const { DeleteFavouriteController,
    AddFavouriteController } = require('../Controllers/Favourite');
const { GetAllHomeBannerController } = require('../Controllers/Home')

//all catagories
router.get('/fetchAllCategories', GetAllCatagoriesController);
router.post('/addcategory', uploadCatagoryImage.single('image'), AddAllCatagoriesController)
router.post('/updateCategory', uploadCatagoryImage.single('image'), UpdateAllCatagoriesController)
router.post('/deleteCategory', DeleteAllCatagoriesController)
router.get('/singleCategory', GetSignleCatagoriesController)
//auth user
router.post('/sign_in', loginController)
router.post('/sign_up', registerController)
//products
router.get('/fetchAllProducts', GetAllProductsController)
router.post('/addproduct', uploadProductImage.single('image'), AddAllProductsController)
router.post('/updateProduct', uploadProductImage.single('image'), UpdateAllProductsController)
router.post('/deleteProduct', DeleteAllProductsController)
router.get('/categoryBindWithProduct', GetAllProductsWithCatagoryId)
router.get('/singleProduct', GetSingleProductsController)
router.get('/search' ,SearchProductsController)
//user
router.get('/fetchAllUsers', getAllUsersController)
router.post('/updateUserProfile', uploadUserProfile.single('image'), UpdateUserProfileController)
//cart
router.post('/deleteCart/:id', DeleteCartController)
router.post('/addToCart', AddToCartController)
//address
router.post('/addAddress', AddAddressController)
router.post('/editAddress', UpdateAddressController)
router.post('/deleteAddress', DeleteAddressController)
//favourite
router.post('/addFavourite', AddFavouriteController)
router.post('/deleteIsFavourite', DeleteFavouriteController)
//image banner
router.get('/getHomeBannerImageList', GetAllHomeBannerController)

module.exports = router;