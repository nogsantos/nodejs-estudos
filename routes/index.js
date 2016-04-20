(function (){
    "use strict";
    var express = require('express');
    var router = express.Router();
    var a = require('./objestudos');

    /* GET home page. */
    router.get('/', function(req, res, next) {

        var s = [
            a.alomundo(),
            a.nome+' '+a.email,
            a.passandoParametro('parametro'),
            a.somar(1.8,1),
            a.testeArray()
        ];
        s.push(TEST);
        if(true){
            let bloco = 'um';
        }
        var c = 'alguma coisa';
        var bloco = `dois ${c}`;
        s.push(bloco);
        // res.render('index', { title: 'Express' });
        var erro = new Error("errado");
        res.json(erro.toString());
    });

    module.exports = router;

}());
