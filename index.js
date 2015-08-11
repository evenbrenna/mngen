'use strict';
var words = require('./words.json');

// Get a random word
var getRandomWord = function() {
  return words[Math.floor(Math.random() * words.length)];
};

// Join to words with a dash. False if word already contains newWord.
var dashJoin = function(word, newWord) {
  if (word.indexOf(newWord) > -1) { return false; }
  return word + '-' + newWord;
};

// Get a random word / word-combo
var word = function(numCombine) {
  numCombine = numCombine || 1;
  if (typeof numCombine !== 'number') { throw new Error('Not A Number!'); }
  var word = getRandomWord();

  if (numCombine > 1) {
    for (var i = 1; i < numCombine; i++) {
      var uniqueCombo = false;
      while (!uniqueCombo) { uniqueCombo = dashJoin(word, getRandomWord()); }
      word = uniqueCombo;
    }
  }
  return word;
};

// Get an array of unique words / word-combos
var list = function(length, numCombine) {
  length = length || 100;
  numCombine = numCombine || 1;

  var wordArray = [];

  for (var i = 0; i < length; i++) {
    var newWord = word(numCombine);
    if (wordArray.indexOf(newWord) === -1) {
      wordArray.push(newWord);
    } else {
      i--;
    }
  }
  return wordArray;
};

exports.word = word;
exports.list = list;
