
const model = require('./models');

class TasksController {

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

    async delete(req, res)
    {
        let user= new model()
        let {id}=req.body
        await user.deleteF({id:id})
        res.send({status:200})
    }

    async createNew(req,res){
        
            let users=new model()
            
            let {id,taskName,dueDate,Status,Description}= req.body;
            
            let obj={name:taskName,dueDate:dueDate,Status:Status,description:Description}
            try{
                await users.insert(obj)
            }catch(e){
                console.log(e)
            }
            res.send({status:"200"})
        }

    

    // getOne(req, res) {
    //     res.send('llegaste al get one endpoint ' + req.params.id);
    // }

}

module.exports = new TasksController();