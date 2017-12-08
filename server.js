var express =   require('express');
var app     =   express();
var router  =   require('./router/main')(app);
var PhotoSwipe = require('./dist/photoswipe.js');

app.set('views',__dirname + '/website_kr');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
var server  =   app.listen(80, function(){
    console.log('express server has started on port 80')
});

app.use(express.static('website_kr'));
