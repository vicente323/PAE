
const model = require('./models');

class UsersController {

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