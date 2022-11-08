

const database = require('./database');



module.exports = function(collection_){
    if(collection_){
        const collection=database().collection(collection_)
        return collection
    }

    else{
        return null
    }
}