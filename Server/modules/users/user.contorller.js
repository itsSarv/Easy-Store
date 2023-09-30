const Model = require("./user.model");

const create = (payload)=>{
    return Model.create(payload)
}
const getById = (id)=>{
    return Model.findOne({_id:id})
}
const list = ()=>{
    return Model.find();
}

module.exports = {list, getById, create};