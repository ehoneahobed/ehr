const jwt = require('jsonwebtoken');

// verify if the user trying to access a given resource has a valid token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                res.status(403).json("Token is not valid");
            }
            else {
                req.user = user;
                next();
            }
        })
    }
    else {
        return res.status(401).json("You are not allowed to take this action!");
    }
}

// verify the user and see if they have the right authority to perform a given action
const verifyTokenAndAuthorization = (req, res, next) => {
    // verifyToken(req, res, () => {
    //     if (req.user.id === req.params.id || req.user.isAdmin) {
    //         next();
    //     }
    //     else {
    //         res.status(403).json("You don't have the requisite permissions!");
    //     }
    // })
}


// verify if the action is being taken by an Admin
const verifyTokenAndAdmin = (req, res, next) => {
    // verifyToken(req, res, () => {
    //     if (req.user.isAdmin) {
    //         next();
    //     }
    //     else {
    //         res.status(403).json('You are not allowed to do that');
    //     }
    // })
}

// module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }

module.exports = { verifyToken }