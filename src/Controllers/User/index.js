const { getAllUsersController } = require('./fetchAllUsers')
const { GetSignleUserController } = require('./getSingleUser')
const { UpdateUserProfileController } = require('./updateUserProfile')
const { uploadUserProfile } = require('./uploadUserProfile')

module.exports = {
    getAllUsersController,
    GetSignleUserController,
    UpdateUserProfileController,
    uploadUserProfile
}