let express = require('express');
let router = express.Router();
const Project = require('../models/project');

// const projects = {
//   name: 'project1',
//   description: 'blank',
//   version: '1.1.1.1'

// };
router.get('/', (req, res) => res.json(project))

router.get('/:id', (req, res) => res.json(project))

router.post('/', function(req, res){ 
res.json(project)
});

router.put('/:id', function(req, res){ 
    res.json(project)
});    

router.delete('/:id', function(req, res){
    res.json(project)
});


module.exports = router;