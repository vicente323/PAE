
// version tarea 6 con login 

const model = require('./models'); 
const jwt = require("jsonwebtoken")
const jwtKey = "my_secret_key"
const jwtExpirySeconds = 300

class UsersController {
    update(req,res){
        let users=new model()
        let{name,name2}=req.body
        let search={name:name}
        let updates={$set:{Expedient:name2}}
        let options={}
        try{
            users.update(search,updates)
        }
        catch(e){
            console.log(e)
        }
        
        res.send({status:200})
    }
    async createNew(req,res){
        
        let users=new model()
        
        let {id,name,Expedient,user_img,description,degree }= req.body;
        
        let obj={name:name,Expedient:Expedient,user_img:user_img,description:description,degree:degree}
        console.table(obj)
        try{
            await users.insert(obj)
        }catch(e){
            console.log(e)
        }
        res.send({status:"200"})
    }
    
    async delete(req, res)
    {
        let user= new model()
        let {id}=req.body
        await user.deleteF({id:id})
        res.send({status:200})
    }
    getAll(req, res) {
        let users= new model()
        users.findAll((err,result)=>{
            if(err){
                res.send({error:"DB error"})
            }
            else{
                res.send(result)
            }
        });
      //  console.log("Find all")
        
    } 

async login(req,res){
        
        let{ Expedient,password}=req.body
        const query={Expedient: Expedient}
            
        if(!Expedient||!password){
            res.status(400)
            res.send({error:"400 bad request insuficient arguments"})
        }
        else{
            let users= new model()
            
            users.findOne(query).then((result)=>{
                console.log(result)
                if(!result){
                    
                    res.send({error:"404 user not found"})
                }
                else{
                    let Expedient=result.Expedient
                    const token= jwt.sign({Expedient},jwtKey,{algorithm:"HS256" ,expiresIn:jwtExpirySeconds})
                    //console.log(token)
                   //res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
                    res.send(token)
                }
            })
        }
    }
    validateToken(req,res){
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
                // if the error thrown is because the JWT is unauthorized, return a 401 error
                return res.status(401).end()
            }
            // otherwise, return a bad request error
            return res.status(400).end()
        }
        console.log(payload.inf)
	    res.send(`Welcome ${payload.inf}!`)
    }


}



module.exports = new UsersController();