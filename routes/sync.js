var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // var fs = require('fs');
    // for(var i = 1; i <= 5; i++) {
    //     var file = "sync-txt" + i + ".txt";
    //     var out = fs.writeFileSync("./docs/"+file, "Hello Node.js!");
    //     console.log(out);
    // }
    // res.json("fim");
    //
    var https = require('https');
    var fs = require('fs');
    var arquivo = "./node.exe";
    var stream = fs.createWriteStream(arquivo);
    var download = "https://nodejs.org/dist/v5.9.0/node-v5.9.0-x64.msi";
    https.get(download, function(res) {
        console.log("Fazendo download do Node.js");
        res.on('data', function(data){
            stream.write(data);
        });
        res.on('end', function(){
            stream.end();
            console.log("Download finalizado!");
            leituraSync(arquivo);
        });
    });
    var leituraSync = function(arquivo){
        console.log("Fazendo leitura síncrona");
        var inicio = new Date().getTime();
        fs.readFileSync(arquivo);
        var fim = new Date().getTime();
        console.log("Bloqueio síncrono: "+(fim - inicio)+ "ms");
    };
    res.json("fim");
});

module.exports = router;
