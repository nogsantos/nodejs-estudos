(function (){
    "use strict";
        
    window.onload = function(){
        var t = 10;
        var relogio = document.getElementById("relogio");
        var regressiva = document.getElementById("regressiva");
        var hello = document.getElementById("hello");
        var hostName = window.location.hostname;
        /**
        * verifica se existe o cookie
        */
        checkCookie();
        /**
        * seta o valor do cookie
        */
        var cookieName = getCookie(hostName);
        /**
        * mostra um relógio na tela
        */
        setInterval(function(){
            var tempo = new Date();
            var horas = tempo.getHours() +'h'+tempo.getMinutes()+'m'+tempo.getSeconds()+'s';
            regressiva.innerHTML = '<h3>'+horas+'</h3>';
        }, 1000);
        /**
        * seta o intervalo da regressiva de 1 em 1 segundo
        */
        setInterval(function(){
            relogio.innerHTML = '<h2>'+t--+'<h2>';
            if(t < 0){
                clearInterval(this);
                relogio.innerHTML = "<h2>Expirou!</h2>";
            }
        }, 1000);
        /**
        * seta o cookie
        */
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }
        /**
        * recupera o cookie
        */
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            var count = ca.length;
            var i = 0;
            for(i ; i < count ; i++) {
                var c = ca[i];
                while (c.charAt(0)===' '){
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length,c.length);
                }
            }
            return "";
        }
        /**
        * verifica se existe o cookie
        */
        function checkCookie() {
            var username = getCookie(hostName);
            if (username !== null) {
                hello.innerHTML = "<h1>Bem vindo <strong>" + username+"!</strong></h1>";
            }else{
                username = prompt("Informe seu nome:", "");
                if (username !== "" && username !== null) {
                    setCookie(hostName, username, 1);
                }
            }
        }
    };
}());
