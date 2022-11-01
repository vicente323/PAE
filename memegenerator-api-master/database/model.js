const collection = require("./collection")

class BaseModell{



    collection
    constructor(name){
        this.collection=collection(name)

    }

    findAll(params){
        this.collection.find({}).toArray(params)
    }
}

module.exports= BaseModell