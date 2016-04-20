/**
 * [Estudos description]
 * @type {Object}
 */
var Estudos = {
    nome : 'Fabricio Nogueira',
    email : 'nogsantos@gmail.com',
    administrador : true,
    alomundo : function(){
        return ('dizendo alô para o mundo! ' + this.nome).toUpperCase();
    },
    /**
     * Função onde se passa algum parâmetro
     * @param  {String} p entrada de algum dado.
     * @return {Object}   saída de um objeto
     */
    passandoParametro : function(p){
        return p;
    },
    /**
     * Calcular alguma coisa
     * @param  {Number} a número um
     * @param  {Number} b número dois
     * @return {Number}   valor calculado.
     */
    somar : function(a, b){
        return a + b;
    },
    /**
     * Calcula o resultado da soma mais o valor do novo parâmetro
     * @param  {[Number]} p mais esse valor
     * @return {[Number]}  a soma do método somar mais o novo valor.
     */
    testeArray : function(){
        var a = ['a', 'b', 'c'];
        var b = ['d', 'e', 'f'];

        a.push('f');

        var s = a.concat(b).join("-");
        return s;
    }

};

module.exports = Estudos;
