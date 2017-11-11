'use strict'

const test = require('ava')
const mnGen = require('./')
const words = require('./words.json')

test('basic generators', t => {
	t.assert(mnGen().length === 100)
	t.assert(mnGen(10).length === 10)
	t.assert(mnGen(1644, 2).length === 1644)
	t.assert(mnGen(1, 2)[0].indexOf('-') !== -1)
  t.assert(mnGen.word().length > 0);
  t.assert(mnGen.list().length === 100);
  t.assert(mnGen.list(10).length === 10);
  t.assert(mnGen.list(1644, 2).length === 1644);
  t.assert(mnGen.list(1, 2)[0].indexOf('-') !== -1);
  t.assert(mnGen.word(2).indexOf('-') !== -1);
  t.assert(mnGen.word(4).split('-').length === 4);
})

test('max combinations', t => {
	t.plan(1)

	try {
		mnGen(2665057, 2)
	} catch (err) {
		t.assert(new RegExp(words.length * (words.length - 1)).test(err.message))
	}

	try {
		mnGen(1644)
	} catch (err) {
		t.assert(new RegExp(words.length).test(err.message))
	}
})

test('custom separator', t => {
	const list = mnGen(1, 2, '/')[0]
	t.assert(list.indexOf('-') === -1)
	t.assert(list.indexOf('/') !== -1)
})
