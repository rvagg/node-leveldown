const test = require('tape')
const testCommon = require('./common')
const abstract = require('abstract-leveldown/test/get-test')

abstract.all(testCommon.factory, test)
