const express = require ('express')
const app = express()

//route handler
app.get('/',function(req,res){
    res.send('Hello world')
})

app.get('/newhttp',function(req,res){
    res.send('Hello this is own http server')
})

app.post('/',function(req,res){
    res.send('Hello world fron the post endpoint')
})
app.listen(3000) //Which port