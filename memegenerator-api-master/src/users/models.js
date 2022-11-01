const mod= require("../../database/model")
class User extends mod {
    
   constructor(){
    super("users")
   }
}

module.exports = User;