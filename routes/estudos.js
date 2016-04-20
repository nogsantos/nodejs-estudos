(function (express){
	"use strict";
    var router = express.Router();

    router.get('/', function(req, res, next) {
        res.render('estudos', { title: 'Estudos' });
    });

    module.exports = router;
}(require('express')));
