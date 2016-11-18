define([], () => {
    'use strict';

    function greet(person) {
        console.log(person.name);
    }

    return {
        greet: greet
    };
});