//functions used by html and api calls for user signup/login

function filterById(id, arr){
    const result = arr.filter(item => item.id === id)[0];
}

function createNewUser(){

}


module.exports = {filterById, createNewUser}