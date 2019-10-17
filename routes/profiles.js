let express = require('express');
let router = express.Router();

const profiles = {
    _id: '1234',
    name: 'dakota'
};

router.get('/', (req, res) => res.json(profiles))

router.get('/:id', (req, res) => res.json(profiles))

router.post('/', function(req, res){ 
res.json(profiles)
});

router.put('/:id', function(req, res){ 
    res.json(profiles)
});    

router.delete('/:id', function(req, res){
    res.json(profiles)
});


//TODO Need to write code that can create a new profile


module.exports = router;