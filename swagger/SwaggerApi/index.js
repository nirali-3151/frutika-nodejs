//catagory
const GetSignleCatagoriesController = require('./Catagories/GetSignleCatagory')
const AddCatagories = require('./Catagories/AddCatagories')
const DeleteCatagories = require('./Catagories/DeleteCatagories')
const GetCatagories = require('./Catagories/GetCatagories')
const UpdateCatagories = require('./Catagories/UpdateCatagories')
const AddProducts = require('./Products/AddProducts')
const DeleteProducts = require('./Products/DeleteProducts')
const GetProducts = require('./Products/GetProducts')
const UpdateProducts = require('./Products/UpdateProducts')
const GetAllProductCatagoryId = require('./Products/GetAllProductCatagoryId')
const fetchAllUser = require('./User/fetchAllUser')
const updateUpdateProfile = require('./User/UpdateUserProfile')
const getSingleProduct = require('./Products/getSingleProduct')
const deleteCart = require('./Cart/deleteCart')
const signIn = require('./Auth_user/sign_in')
const sign_up = require('./Auth_user/signUp')
const addToCart = require('./Cart/AddToCart')
const searchProduct = require('./Products/SearchProducts')
//Address
const AddAddress = require('./Address/AddAddress')
const UpdateAddress = require('./Address/UpdateAddress')
const DeleteAddress = require('./Address/DeleteAddress')
//favourite
const AddFavourite = require('./Favourite/addFavourite')
const DeleteFavourite = require('./Favourite/deleteFavourite')
//Home
const GetAllHomeBanner = require('./Home/GetAllHomeBanner');

//product
module.exports = {
    paths: {
        //authorization
        '/sign_up': { ...sign_up },
        '/sign_in': { ...signIn },
        //catagory
        '/updateCategory': { ...UpdateCatagories },
        '/addcategory': { ...AddCatagories },
        '/singleCategory': { ...GetSignleCatagoriesController },
        '/deleteCategory': { ...DeleteCatagories },
        '/fetchAllCategories': { ...GetCatagories },
        //product
        '/fetchAllProducts': { ...GetProducts },
        '/updateProduct': { ...UpdateProducts },
        '/addproduct': { ...AddProducts },
        '/deleteProduct': { ...DeleteProducts },
        '/categoryBindWithProduct': { ...GetAllProductCatagoryId },
        '/singleProduct': { ...getSingleProduct },
        '/search': { ...searchProduct },

        '/getHomeBannerImageList': {
            ...GetAllHomeBanner
        },
        '/addFavourite': {
            ...AddFavourite
        },
        '/deleteIsFavourite': {
            ...DeleteFavourite
        },
        '/addAddress': {
            ...AddAddress
        },

        '/editAddress': {
            ...UpdateAddress
        },

        '/deleteAddress': {
            ...DeleteAddress
        },

        '/fetchAllUsers': {
            ...fetchAllUser
        },

        '/updateUserProfile': {
            ...updateUpdateProfile
        },

        '/deleteCart/{id}': {
            ...deleteCart
        },

        '/addToCart': {
            ...addToCart
        }
    }
}