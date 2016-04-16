var assign = require('can-util/js/assign/');
var QUnit = require('steal-qunit');

QUnit.module("can-util/js/assign")

QUnit.test("Assign all properties to an object", function(){
	var a = 		{a: 1, b: 2, 	   d: 3},
		b = 		{a: 1, b: 3, c: 2}
		expected =  {a: 1, b: 3, c: 2, d: 3},
		actual = assign(a, b);

	for (var prop in actual){
		equal(expected[prop], actual[prop]);
	}
});
