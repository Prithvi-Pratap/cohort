//global catches: global catches are error handling middlewares
const express=require('express');
const app=express();

app.use(express.json());

app.post('/health-checkup',function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    res.send(`the kidneys length is ${kidneyLength}`);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.listen(3000);



