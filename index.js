'use strict';
var words = require('./words.json');

// Get a random word
var getRandomWord = function() {
  return words[Math.floor(Math.random() * words.length)];
};

// Join two words with a dash. False if word already contains newWord.
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

  if (length > words.length) {
    throw new Error('Max list size is ' + words.length);
  }

  length = length || 100;
  numCombine = numCombine || 1;

  var returnWords = [];

  for (var i = 0; i < length; i++) {
    var newWord = word(numCombine);
    if (returnWords.indexOf(newWord) === -1) {
      returnWords.push(newWord);
    } else {
      i--;
    }
  }
  return returnWords;
};

exports.word = word;
exports.list = list;
