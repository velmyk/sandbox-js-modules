'use strict';

const greeting = require('./greetingModule.js');
const getPerson = require('./peopleModule.js');
    
greeting.greet(getPerson());
