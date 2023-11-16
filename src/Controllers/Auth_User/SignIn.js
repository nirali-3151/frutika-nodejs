const db = require('../../Config/dbConnection');
const jwt = require('jsonwebtoken');
const md5 = require('md5')

exports.loginController = async (req, res) => {
  db.query(
    `SELECT * FROM signup WHERE email = ${db.escape(req.body.email)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(409).send({
          success: false,
          message: 'Email is incorrect!'
        });
      }
      if (md5(req.body.password) === result[0]['password']) {
        db.query(
          `Select address_id  , address from address where id=${db.escape(result[0].id)} And isDelete = 0`,
          (err, addressResult) => {
            if (err) {
              throw err;
            }
            else {
              const finalData = {
                ...result[0],
                address: addressResult
              }

              const token = jwt.sign({ id: result[0].id }, 'the-super-strong-secrect');
              return res.status(200).send({
                success: true,
                message: "LOGIN_SUCCESS",
                list: finalData,
                token
              });
            }
          }
        );
      }
      else {
        return res.status(409).send({
          success: false,
          message: 'Password is incorrect!'
        });
      }
    })
};
