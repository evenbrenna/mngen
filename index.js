'use strict';
var words = require('./words.json');

// Get a random word
var getRandomWord = function() {
  return words[Math.floor(Math.random() * words.length)];
};

// Join two words with a dash. False if word already contains newWord.
var dashJoin = function(word, newWord, separator) {
  if (word.indexOf(newWord) > -1) { return false; }
  return word + separator + newWord;
};

// Calculate number of possible unique list items given combos of n words
// Reaches Number.MAX_VALUE at n === 97 and returns Infinity for n >= 97
var maxLength = function(n) {
  var max = words.length;
  while (n > 1) {
    max *= words.length - n + 1;
    n--;
  }
  return max;
};

// Get a random word / word-combo
var word = function(glue, separator) {
  glue = glue || 1;
  separator = separator || '-';
  if (typeof glue !== 'number') { throw new Error('Not A Number!'); }
  var word = getRandomWord();

  if (glue > 1) {
    for (var i = 1; i < glue; i++) {
      var uniqueCombo = false;
      while (!uniqueCombo) { uniqueCombo = dashJoin(word, getRandomWord(), separator); }
      word = uniqueCombo;
    }
  }
  return word;
};

// Get an array of unique words / word-combos
var list = function(length, glue, separator) {
  if (length > maxLength(glue)) {
    throw new Error('Max list length for [glue] === ' + glue +
                    ' is ' + maxLength(glue));
  }

  length = length || 100;
  glue = glue || 1;
  separator = separator || '-';

  var returnWords = [];

  for (var i = 0; i < length; i++) {
    var newWord = word(glue, separator);
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
