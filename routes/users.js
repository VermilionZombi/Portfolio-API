let express = require('express');
let router = express.Router();
const User = require('../models/users');


router.get('/', function(req, res){
  //The variable below will find and pull data to it.
  User.find({}, function(err, data){
  //Everything below this needs to be varified, it may not be right.
    if(err){
      res.json({error:"error", message: "somethings missing"})
    }
    res.json(data);
  });
});

router.post('../models/users', function(req, res){ 
  const User = {
    id: User.length + 1,
    email: req.body.email,
    phone_number: req.body.phone_number,
    first_name: req.body.first_name,
    last_name: req.body.last_name
}
User.push(User);
res.json(User);
});

router.put('../models/users:id', function(req, res){ 
  // const  = req.params.id;
  let users = users.filter(users => {
    return users.id == req.Id;
  })[0]
  res.json()
});    

router.delete('../models/users:id', function(req, res){
  const requestId = request.params.id;
  let users = contacts.filter(users => {
    return users.id == requestId;
  })[0]
  // const index = users.indexOf(users);
  res.json({error:"error", message: "User ${requestId}$ deleted." });
});


module.exports = router;
