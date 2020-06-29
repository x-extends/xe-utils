'use strict'

var getBaseURL = require('./getBaseURL')
var locat = require('./locat')
var browse = require('./browse')
var cookie = require('./cookie')

var webMethods = {
  getBaseURL: getBaseURL,
  locat: locat,
  browse: browse,
  cookie: cookie
}

module.exports = webMethods
