const md5 = require('md5');
const db = require('../../Config/dbConnection');

exports.registerController = async (req, res, next) => {

    const {
        username,
        mobile,
        email,
        password
    } = req.body

    if (!username || !mobile|| !email || !password) {
        return res.status(400).send({
            success: false,
            message: 'Please Enter Valid Data',
        });
    }
    else {
        db.query(
            `SELECT * FROM signup WHERE LOWER(email) = LOWER(${db.escape(
                email
            )});`,
            (err, result) => {
                if (result.length) {
                    return res.status(409).send({
                        success: false,
                        message: 'This user is already in use!',
                    });
                } else {
                    const user = {
                        username,
                        mobile,
                        email,
                        password: md5(password)
                    }
                    db.query(
                        `INSERT INTO signup (username,mobile,email,password) VALUES ('${username}','${mobile}' , ${db.escape(
                            req.body.email
                        )}, ${db.escape(user.password)})`,
                        (err, result) => {
                            if (err) {
                                throw err;
                                return res.status(400).send({
                                    msg: err
                                });
                            }
                            return res.status(200).send({
                                success: true,
                                message: 'The user has been registerd with us!',
                                list: {
                                    "id": result.insertId,
                                    "username": username,
                                    "email": email,
                                }
                            });
                        }
                    );
                }
            }
        );
    }
}