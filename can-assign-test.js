var assign = require('./can-assign');
var QUnit = require('steal-qunit');

QUnit.module("can-assign");

QUnit.test("Assign all properties to an object", function(){
	var a = {a: 1, b: 2, d: 3};
	var b = {a: 1, b: 3, c: 2};
	var expected =  {a: 1, b: 3, c: 2, d: 3};
	var actual = assign(a, b);

	for (var prop in actual){
		equal(expected[prop], actual[prop]);
	}
});