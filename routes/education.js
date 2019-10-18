let express = require('express');
let router = express.Router();

const education = {
    school: 'Herriman High',
    course_of_study: 'computer science',
    completed?: 'yes',
    additional_info?: 'explanation here'
};

router.get('../models/education', function(req, res) {
    User.find({education_schema}, function(err, data){

      if(err){
        res.json({error:"error", message: "somethings missing"})
      }
      res.send(Test);
    });
  });

router.post('../models/education', function(req, res){ 
    const education = {
        id: education.length + 1,
        school: req.body.school,
        course_of_study: req.body.course_of_study,
        completed: req.body.completed,
        additional_info: req.body.additional_info
    }
    res.json(test)
});

router.put('../models/education:id', function(req, res){ 
    res.json(education)
});    

router.delete('../models/education:id', function(req, res){
    res.json(education)
});


module.exports = router;