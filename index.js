const express= require('express');
const handlebars=require('express-handlebars')
const app= express();

app.engine('handlebars',handlebars.engine());
app.set('view engine','handlebars');
app.set('views','./views');

const port = process.env.port|| 3000;

app.get('/',(req,res)=>{

    res.render('index',{});
});


app.listen(port,()=>{

    console.log("Working on port "+port);
})