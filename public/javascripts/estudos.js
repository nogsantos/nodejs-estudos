(function (t){
    "use strict";
    var nu = 7;

    Function.prototype.memoized = function (key) {
        this._values = this._values || {};
        return this._values[key] !== undefined ? this._values[key] : this._values[key] = this.apply(this, arguments);
    };

    function isPrime(num) {
        var prime = num != 1;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        return prime;
    }


    console.log(t);
    QUnit.test( "Tests function", function( assert ) {
        assert.ok(isPrime.memoized(nu), "Número primo"+this.nu );
        assert.ok(isPrime._values[this.nu], "Cached" );
    });

}());
