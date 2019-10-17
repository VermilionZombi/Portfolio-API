let express = require('express');
let router = express.Router();

const dummyProfile = {
  jobTitle: 'Work',
  companyName: 'Work.inc',
  startDate: '3/15/1995',
  endDate: '12/1/2095'

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