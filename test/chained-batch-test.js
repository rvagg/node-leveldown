const test = require('tape')
const leveldown = require('..')
const abstract = require('abstract-leveldown/test/chained-batch-test')

abstract.all(leveldown, test)
