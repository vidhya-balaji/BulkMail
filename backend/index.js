const express = require("express")
const app=express();
const cors=require("cors");
app.use(cors());

app.use(express.json())

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
 service:"gmail",
  auth: {
    user: "vidhyabalaji.nina@gmail.com",
    pass: "mlmy iclw epat uitq",
  },
});

app.post("/sendemail",function(req,res)
{
    console.log(req);
    
    var msg=req.body.msg;
    console.log(msg);
    
//Mail sender
transporter.sendMail(
    {
        from:"vidhyabalaji.nina@gmail.com",
        to:"jibajin402@lassora.com",
        subject:"A message from Nina food bulk mail",
        text:msg
    },
    function(error,info)
    {
        if(error)
        {
            console.log(error);
            res.send("error")
        }
        else{
            console.log(info);
            res.send("Success");
        }
    }
)
})

app.listen(5000,function()
{
    console.log("Server Started..........");
    
})