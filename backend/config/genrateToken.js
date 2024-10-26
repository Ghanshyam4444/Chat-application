const jwt = require("jsonwebtoken");
const genrateToken = (id) => {
  return jwt.sign({ id }, "thisisthesecretkey", {
    expiresIn: "30d",
  });
};
module.exports = genrateToken;
