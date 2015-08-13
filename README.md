# mnGen - Mnemonic Word Generator

Spits out random words from
[this](http://web.archive.org/web/20091003023606/http://tothink.com/mnemonic)
word list.

The word list consists of 1633 words that are easy to read, say, understand and
remember. They are also easy to distinguish from one another.

> "... suitable for transmission or storage by voice, handwriting, memorization
> or other non-computerized means."


You could use it to generate easy-to-remember passwords or name your servers.
Or dogs. Sometimes you just need a few top-notch words thrown at you.


## Install

`$ npm install --save mngen`


## Usage

```js

var mnGen = require('mngen');

mnGen.word();     // => 'tokyo'
mnGen.word(3);    // => "office-piano-fabric"

mnGen.list(3);    // => ['canoe', 'amigo', 'kermit']
mnGen.list(3, 2); // => ['fuji-visa', 'kilo-lemon', 'baker-echo']

mngen.list(2665057, 2); // => ERR: Max list length for [glue] === 2 is 2665056
```

## API


### .word([glue])

Returns: `String`

* Get a single random word
* Give an integer `glue` to make it a dash-joined combo of multiple words.

```js
mnGen.word();  // => "eagle"
mnGen.word(3); // => "office-piano-fabric"
```


### .list([length, [glue]])

Returns: `Array`

* Get an array of random words.
* Default `length` is 100
* Array entries are unique.
* Specify `glue` to make entries dash-joined combos of multiple words.
* Throws error if `length` > possible unique entries given `glue`
  (See Usage for example)

```js
nmGen.list();     // => An array of 100 unique words
mnGen.list(3);    // => ['canoe', 'amigo', 'kermit']
mnGen.list(3, 2); // => ['fuji-visa', 'kilo-lemon', 'baker-echo']
```



## CLI

`$ npm install --global mngen`

```shell
$ mngen
# => tokyo

$ mngen --glue 2
# => "english-legal"

$ mngen --list 3
# => canoe amigo kermit

$ mngen --list 2 --glue 3
# => oxford-soviet-rubber shave-deal-freddie

```
## TODO

* Add options:
   * Choose "glue" character
   * Choose entry separator for list in cli (comma, newline, space, etc)
   * Custom word-lists

## Thanks

Inspired by [Sindre Sorhus](https://github.com/sindresorhus/yes-no-words)
