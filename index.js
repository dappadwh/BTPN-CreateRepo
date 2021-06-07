var bodyParser = require('body-parser')
var express = require('express');
var UserDataRouter = require('./router/createUserDataRouter');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())
app.use('/userData', UserDataRouter)

app.listen(PORT, () =>{
    console.log(`running on port ${PORT} ...`)
  })