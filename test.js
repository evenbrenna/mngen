'use strict';

var test = require('ava');
var mnGen = require('./');
var words = require('./words.json');

test(function (t) {
	t.assert(mnGen.word().length > 0);
	t.assert(mnGen.list().length === 100);
	t.assert(mnGen.list(10).length === 10);
	t.assert(mnGen.list(1644, 2).length === 1644);
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
		t.assert(new RegExp(words.length).test(err.message));
	}

	t.end();
});

test(function(t) {
	t.plan(1);

	try {
		mnGen.list(2665057, 2);
	} catch (err) {
		t.assert(new RegExp(words.length * (words.length - 1)).test(err.message));
	}

	t.end();
});

test('custom separator', function (t) {
	const word = mnGen.word(2, '/');
	const list = mnGen.list(1, 2, '/')[0];
	t.assert(word.indexOf('-') === -1);
	t.assert(word.indexOf('/') !== -1);
	t.assert(list.indexOf('-') === -1);
	t.assert(list.indexOf('/') !== -1);
	t.end();
});