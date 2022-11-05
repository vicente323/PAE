
const model = require('./models'); 

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
    // getOne(req, res) {
    //     res.send('llegaste al get one endpoint ' + req.params.id);
    // }

}

module.exports = new UsersController();