var express= require("express"),
    bodyParser= require("body-parser"), 
    app= express(),
    useragent = require('express-useragent');
    
    
    app.set('view engine','ejs');
     
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(useragent.express());
    app.use(express.static(__dirname+'/public'));
    
  
    app.get('/',function(req,res){
        var headers= req.headers;
        var useragent= req.useragent;
        res.render('home',{headers: headers, useragent: useragent });
      }); 
    
    
    app.listen(3000);
    app.listen(process.env.PORT,process.env.IP,function(){
        console.log('Server is good and running.');
    });