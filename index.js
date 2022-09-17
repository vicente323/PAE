const express= require('express');
const handlebars=require('express-handlebars')
const app= express();
const apik="32f3d06407da442ab345b2f02da3fb38"
const path= require('path');
const http= require('https');
const fetch = require('node-fetch');
const e = require('express');


app.use('/src',express.static(path.join(__dirname,'src')))
app.engine('handlebars',handlebars.engine());
app.set('view engine','handlebars');
app.set('views','./views');

var newsGlobal;

const port = process.env.port|| 3000;

app.get('/new',(req,res)=>{
    var title1=req.query.title
   
    var fullnew;
    newsGlobal.forEach(element => {
        //console.log(element)
        if(element.title==title1){
            
             fullnew=element
             res.render('new',fullnew)
        }
       
    });
  
   
    
})
app.get('/search',async(req,res)=>{
    var  news;
   if(req.query.kw&&!req.query.raw){
        console.log("Not raw")
        var kw=req.query.kw
        await fetch("https://newsapi.org/v2/everything?q="+kw+"&apiKey="+apik)
        .then(res =>  res.json())
        .then(json=>{
        
            news=json.articles
            newsGlobal=news
        
            res.render('index',{data:news});// render {context [equivale a la respuesta de los articulos]}
            //res.send(200)
        })



   }
   else if(req.query.kw&&req.query.raw==1){
    console.log("raw")
    var kw=req.query.kw
    await fetch("https://newsapi.org/v2/everything?q="+kw+"&apiKey="+apik)
    .then(res =>  res.json())
        .then(json=>{
            res.send(json)
        })

   }
   else{
    console.log("Search")
    res.render('search')
   }

    //news=news.articles
    // news=res.json()
    //console.log(news)
    //res.render('index',{data:['Vicente']});// render {context [equivale a la respuesta de los articulos]}
});


app.listen(port,()=>{

    console.log("Working on port "+port);
})