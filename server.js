var express =   require('express');
var app     =   express();
var server  =   app.listen(80, function(){
    console.log('express server has started on port 80')
});