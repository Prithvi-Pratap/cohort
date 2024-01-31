const express=require('express')
const app=express();
const port=3000;

app.get('/health-checkup',(req, res) => {
    const username=req.headers.username;
    const password=req.headers.password;

    if(username!="prithvi" || password!="pass5021"){
        res.status(411).send(`invalid username or password`);
    }
    else
    res.send(`you are successfully logged in`);

})

app.listen(port)