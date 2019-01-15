var express = require('express');
var bodyParser = require('body-parser');
var { UserClient } = require('./UserClient')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'KBA'});
});

router.post('/',function(req, res){
  var data = req.body.write;
  console.log(data)
  var client = new UserClient();
  client.send_data([data]);
  res.send({message: "Data " +data+" successfully added"});
})

router.post('/state',function(req,res){
  console.log('index')
var client = new UserClient();
var getData = client._send_to_rest_api(null);
console.log(getData)
getData.then(result => {res.send({ balance : result });});
})
module.exports = router;
