const express = require("express")
const app = express();
app.get("/sum/:a/:b",function(req,res){   //dynamic parameters - yeh colon ke bdd jo bhi hoga that will be the parameters 
    const a = parseInt(req.params.a)    //query ke jagh param likhna pdega aur jo hmlg sum k bd a aur b ke jagah use krenge we have to use the same here also 
    const b  = parseInt(req.params.b)
    res.json({
        ans:a+b
    })

})
app.get("/subtract/:a/:b",function(req,res){   
    const a = parseInt(req.params.a)    
    const b  = parseInt(req.params.b)
    res.json({
        ans:a+b
    })

})

app.get("/multyply/:a/:b",function(req,res){   
    const a = parseInt(req.params.a)    
    const b  = parseInt(req.params.b)
    res.json({
        ans:a+b
    })

})

app.get("/divide/:a/:b",function(req,res){   
    const a = parseInt(req.params.a)    
    const b  = parseInt(req.params.b)
    res.json({
        ans:a+b
    })

})

app.listen(3000);