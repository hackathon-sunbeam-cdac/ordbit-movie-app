const express = require("express");
const bcrypt = require("bcrypt");
// const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

const pool = require("../db/db");
const result = require("../utils/result");
const config = require("../utils/config");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, phone, birth } = req.body;
  const encryptedPassword = await bcrypt.hash(password, config.saltRounds);

  const sql = `INSERT INTO users(first_name, last_name, email, password, mobile, birth) VALUES(?,?,?,?,?,?)`;
  pool.query(
    sql,
    [firstName, lastName, email, encryptedPassword, phone, birth],
    (error, data) => {
      res.send(result.createResult(error, data));
    }
  );
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ?`;

  pool.query(sql, [email], (error, data) => {
    console.dir(data);
    if (data) {
      if (data.length != 0) {
        const isValid = bcrypt.compare(password, data[0].password);
        if (isValid) {
          const payload = {
            userId: data[0].id,
          };
          const token = jwt.sign(payload, config.secret);
          const body = {
            token: token,
            firstName: data[0].first_name,
            lastName: data[0].last_name,
          };
          console.dir(body);
          res.send(result.createSuccessResult(body));
        } else res.send(result.createErrorResult("Invalid password"));
      } else res.send(result.createErrorResult("Invalid email or password"));
    } else res.send(result.createErrorResult(error));
  });
});

module.exports = router;
