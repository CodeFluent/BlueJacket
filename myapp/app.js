var express = require('express');
var instagram = require('./instagram');
var app = express();

app.use(express.static(__dirname + '/instagram'));
app.use(express.static(__dirname + '/public'));




app.use(express.static('public'));



app.get('/instagram',function(req,res){


     res.sendFile('index.js');
     res.sendFile('index.html');
     res.sendFile('gallery.html');
     res.sendFile('contact.html');


});



app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});

module.exports = app;
