const jwt = require('jsonwebtoken')

const verify = (req, res, next) => {
    const authHeader = req.headers.token;
    console.log(" auth Header is : ", authHeader)
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      console.log("the token is: ", token);
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json("Token is not valid!");
        console.log("err we got : ", err);
        console.log("the user we got", user);
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
}

module.exports = verify;