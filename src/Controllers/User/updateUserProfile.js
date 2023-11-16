const conn = require('../../Config/dbConnection')

exports.UpdateUserProfileController = async (req, res, next) => {
    const {
        id,
        firstname,
        lastname,
        email,
        mobile,
        address,
        gender,
    } = req.body

    const {
        filename
    } = req.file
    const username = firstname + " " + lastname

    const sql = `UPDATE  signup SET username = ('${username}') , email =  ('${email}') , mobile =  ('${mobile}') , address =  ('${address}'), gender =  ('${gender}') , image =  ('${filename}')  WHERE id = ('${id}') `

    conn.query(sql, function (err, data, fields) {
        if (err) {
            res.send({
                success: false,
                error: err.message,
                message: "UPDATE_USERPROFILE_FAILED"
            })
        }
        else {
            res.send({
                success: true,
                list: {
                    "id": id,
                    "username": username,
                    "email": email,
                    "goggle_login": null,
                    "mobile": null,
                    "address": address,
                    "gender": gender,
                    "image": filename,
                },
                message: "UPDATE_USERPROFILE_SUCCESS"
            });
        }
    });
}   