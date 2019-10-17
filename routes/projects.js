let express = require('express');
let router = express.Router();

const dummyProfile = {
  name: 'project1',
  description: 'blank',
  version: '1.1.1.1'

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