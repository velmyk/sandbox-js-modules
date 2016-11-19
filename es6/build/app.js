'use strict';

var _greetingModule = require('./greetingModule.js');

var _peopleModule = require('./peopleModule.js');

var _peopleModule2 = _interopRequireDefault(_peopleModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _greetingModule.greet)((0, _peopleModule2.default)());