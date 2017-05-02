var express= require("express"),
    bodyParser= require("body-parser"),
    app= express();
    
    
    app.set('view engine','ejs');
    
    app.use(bodyParser.urlencoded({extended: true}));
    
    
    app.get('/',function(req,res){
        res.send('This is home page ');
    });
    
    
    
    
    
    app.listen(process.env.PORT,process.env.IP,function(){
        console.log('Server is good and running.');
    });