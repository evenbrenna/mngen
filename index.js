'use strict'

const assert = require('assert')
const words = require('./words.json')

const getUniqueWords = (n) => {
  const uniqueWords = []
  do {
    const word = words[Math.floor(Math.random() * words.length)]
    if (uniqueWords.indexOf(word) === -1) uniqueWords.push(word)
  } while (uniqueWords.length < n)
  return uniqueWords
}

// Calculate number of possible unique list items given combos of n words
// Reaches Number.MAX_VALUE at n === 97 and returns Infinity for n >= 97
const maxLength = (n) => {
  let max = words.length
  while (n > 1) {
    max *= words.length - n + 1
    n--
  }
  return max
}

// Get an array of unique words / Comword-combos
const gen = (length = 100, glue = 1, separator = '-') => {
  assert(
    length <= maxLength(glue),
    new Error(`Max list length for [glue] === ${glue} is ${maxLength(glue)}`)
  )
  const wordCombos = []
  do {
    const word = getUniqueWords(glue).join(separator)
    if (wordCombos.indexOf(word) === -1) wordCombos.push(word)
  } while (wordCombos.length < length)
  return wordCombos
}

gen.list = gen
gen.word = (glue, separator) => gen(1, glue, separator)[0]

module.exports = gen
