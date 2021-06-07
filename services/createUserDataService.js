const Collection = require("../database/connection")

class UserDataService{
    
    async insertData(user){
        const userData = await Collection('userData')
        return userData.insertOne(user)
    }
}

module.exports = UserDataService;