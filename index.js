//Load express module with `require` directive

var express = require('express')

var app = express()

//Define request response in root URL (/)  
app.get('/', function (req, res) {  
 res.send('Hello World!')  //Send the message "Hello World"
})

app.post('/', function(req, res) {
  console.log(res) //Print out the content of the message sent by the respond
})

//Launch listening server on port 8081  
app.listen(8081, function () {  
  console.log('app listening on port 8081!')  
})