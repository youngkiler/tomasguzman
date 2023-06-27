const jwt = require("jsonwebtoken");

const verifyToken = (req,res)=> {
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SEC, (err, user)=> {
            if(err) res.status(401).json("Token invalido!");
            req.user = user
            next()
        })

    }else{
        return res.status(401).json("No estas verificado")
    }
};

const verifyTokenAndAuthorization = (req,res,next)=> {
    verifyToken(req,res,()=> {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("No estas autorizado para hacer eso")
        }
    })
};

module.export = { verifyToken, verifyTokenAndAuthorization };