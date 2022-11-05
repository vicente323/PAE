
const model = require('./models');

class NotebooksController {


    
    async createNew(req,res){
        
        let users=new model()
        
        let {course,courseName,pageNumber,pages}= req.body;
        
        let obj={course:course,courseName:courseName,pageNumber:pageNumber,pages:pages}
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

module.exports = new NotebooksController();