var {Router} = require('express')
var UserDataService = require('../services/createUserDataService')
var commonResponse = require('../utils/commonResponse')
 
const userDataService = new UserDataService()
const UserDataRoute = Router()
    .post('/', async(req, res) => {
        try {
            const data = await userDataService.insertData(req.body)
            res.json(commonResponse('success', req.body, 'Data has been created!'))
        } catch (error) {
            res.json(commonResponse('error', null, error))
        }
    })
    

module.exports = UserDataRoute;