const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

app.post("/sum",function suumHandler(req,res){
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        ans:a+b
    });

});

app.listen(5000,() =>console.log("Server running on port 5000"));


/*
Notes:
- To use cors first we have to do npm install cors
- Then we write the second line
- If we want to allow all frontend to send the request then we will write it as :
        - app.use(cors())
- Agar if we want like sirf is is frontend se request ana chahiye then we will specify that :
a       -app.use(cors({
            Domain:["https://google.com", "https://hdfcbank.com"]
        }))
*/