const collection = require("./collection")

class BaseModell{



    collection
    constructor(name){
        this.collection=collection(name)

    }
    
    findAll(params){
        this.collection.find({}).toArray(params)
    }

    insert(params){
        this.collection.insertOne(params);
    }
    deleteF(params){
        this.collection.deleteOne(params)
    }
    update(params,param2){
        this.collection.updateOne(params,param2)
    }
    findOne(filters){
        
        return this.collection.findOne(filters);
        
        
    }
}

module.exports= BaseModell