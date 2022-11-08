const jwt = require("jsonwebtoken")
const jwtKey = "my_secret_key"
function validateToken(req,res,next){
    const token = req.body.token
    console.log(token)
    if (!token) {
        return res.status(401).end()
    }
    var payload
    try {
            payload = jwt.verify(token, jwtKey)
    } catch (e) {
        
        
        if (e instanceof jwt.JsonWebTokenError) {
            
            return res.status(401).end()
        }
        
        return res.status(400).end()
    }
    console.log(`Welcome ${payload.Expedient}!`)

    next()
}

module.exports={validateToken}