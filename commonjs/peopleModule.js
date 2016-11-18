'use strict';

const names = require('./nameModule.js');

function getPerson() {
    return {
        name: names.getName(),
        age: Math.random()
    };
}

module.exports = getPerson;