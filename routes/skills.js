let express = require('express');
let router = express.Router();

const skills = {
  rank: 'plat2',
  name: 'siege',
  type: 'shooter'
};

router.get('/', (req, res) => res.json(skills))

router.get('/:id', (req, res) => res.json(skills))

router.post('../models/skills', function(req, res){ 
res.json(skills)
});

router.put('/:id', function(req, res){ 
    res.json(skills)
});    

router.delete('/:id', function(req, res){
    res.json(skills)
});


module.exports = router;