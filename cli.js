#!/usr/bin/env node
'use strict'

const meow = require('meow')
const mnGen = require('./')

const help = `
Examples
	$ mngen
	tokyo

	$ mngen --glue 2
	english-legal

	$ mngen --glue 2 --separator /
	dexter/toronto

	$ mngen --list 3
	canoe amigo kermit

	$ mngen --list 2 --glue 3
	oxford-soviet-rubber shave-deal-freddie

Options,
	--list [number]  Get a whitespace separated list of words
	--glue [number]  Make each word a dash-joined combo of words
	--separator [string]  Character used to join combo of words`

const cli = meow({ help })

const {
	list = 1,
	glue = 1,
	separator = '-',
} = cli.flags

console.log(mnGen(list, glue, separator).join(' '))