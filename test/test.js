
var a = require('../a.js');
var assert = require('assert');

describe('test', function () {
    it.only('return 2', function () {
        assert(3 === a(1));
    });
})