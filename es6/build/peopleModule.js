'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getPerson;

var _nameModule = require('./nameModule.js');

var _nameModule2 = _interopRequireDefault(_nameModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPerson() {
    return {
        name: (0, _nameModule2.default)(),
        age: Math.random()
    };
}