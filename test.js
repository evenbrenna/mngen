'use strict';

var test = require('ava');
var mnGen = require('./');
var words = require('./words.json');

test(function (t) {
	t.assert(mnGen.word().length > 0);
	t.assert(mnGen.list().length === 100);
	t.assert(mnGen.list(10).length === 10);
	t.assert(mnGen.list(1, 2)[0].indexOf('-') !== -1);
	t.assert(mnGen.word(2).indexOf('-') !== -1);
	t.assert(mnGen.word(4).split('-').length === 4);
	t.end();
});

test(function(t) {
	t.plan(1);

	try {
		mnGen.list(1644);
	} catch (err) {
		t.assert(err.message === 'Max list size is ' + words.length);
	}

	t.end();
});
