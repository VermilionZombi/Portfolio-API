let express = require('express');
let router = express.Router();

const dummyProfile = {
  terms: 'blank',
  definition: 'blank',
  tags: 'JavaScript'

};
router.get('/', (req, res) => res.json(dummyProfile))

router.get('/:id', (req, res) => res.json(dummyProfile))

router.post('/', function(req, res){ 
res.json(dummyProfile)
});

router.put('/:id', function(req, res){ 
    res.json(dummyProfile)
});    

router.delete('/:id', function(req, res){
    res.json(dummyProfile)
});


module.exports = router;