let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const dummyProfile = {
    _id: '39r8fh',
    name: ''
};
// THIS NEEDS MORE WORK -->
router.get('/', (req, res) => res.json) 
// HAS DUMMY DATA WILL ADD MORE LATER
router.get('/:id', (req, res) => res.json({name: "" }))

router.post('/', function(req, res){ 
res.json(dummyProfile)
});

router.put('/', function(req, res){ 
    res.json(dummyProfile)
});    

router.delete('/', function(req, res){
    res.json(dummyProfile)
});

//TODO Need to build Mongoose Schema
//TODO Need to write code that can create a new profile


module.exports = router;