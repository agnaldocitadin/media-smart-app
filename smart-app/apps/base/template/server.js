var express = require('express');
var app = express();
var path = require('path');

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

app.use(express.static(__dirname + '/'));

app.get('/',  function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, "0.0.0.0", () => console.log('Server running. Port 3000.'));

//https://www.youtube.com/watch?v=R36UuAjQmK4