define([
    './greetingModule',
    './peopleModule'
], (greeting, people) => {
    'use strict';
    
    greeting.greet(people.getPerson());
});