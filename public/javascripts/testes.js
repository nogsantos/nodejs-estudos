
QUnit.test( "Ok test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Equal", function( assert ) {
    assert.equal(2,"2", "Equals");
});

QUnit.test( "Same", function( assert ) {
    assert.strictEqual(2 , 2 , "strict Equal");
});

QUnit.test( "asynchronous test: async input focus", function( assert ) {
    var done = assert.async();
    var input = $( "#test-input" ).focus();
    setTimeout(function() {
        assert.equal( document.activeElement, input[0], "Input was focused" );
        done();
    });
});
