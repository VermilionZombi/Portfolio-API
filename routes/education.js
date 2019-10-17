let express = require('express');
let router = express.Router();

const education = {
    school: 'Herriman High',
    course_of_study: 'computer science',
    completed?: 'yes',
    additional_info?: 'explanation here'
};
router.get('/', (req, res) => res.json(education))

router.get('../models/education:id', (req, res) => res.json(education))

router.post('../models/education', function(req, res){ 
res.json(education)
});

router.put('../models/education:id', function(req, res){ 
    res.json(education)
});    

router.delete('../models/education:id', function(req, res){
    res.json(education)
});


module.exports = router;