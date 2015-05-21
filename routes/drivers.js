var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {

    if(!req.params.id) {
        return res.send(400);
    }
    
    res.send(200, {
        "data": [{
            "id": "553ac59965094b476a817fa6",
            "type": "driver",
            "name": "Wilcox, Fitzgerald"
        }]
    });
});

router.get('/', function(req, res, next) {

    if(!req.params.id) {
        return res.send(400);
    }
    
    res.send(200, { "data": [{
        
        "id": "553ac599580b76009c7bd482",
        "type": "driver",
        "name": "Manning, Gilliam"
        
    }] });
});



module.exports = router;
