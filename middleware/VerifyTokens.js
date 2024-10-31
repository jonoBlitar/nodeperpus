import jwt from "jsonwebtoken";

/* export const verifyToken = (req, res,next)=>{
    const autHeader=req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, (err, decoded) => {
        if(err) return res.sendStatus(403);
        req.username = decoded.username;
        next();
    })
} */

export const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).send("Access Denied");  
    try {
      const verified = jwt.verify(token,"jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225");
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send("Invalid Token");
    }
  };
