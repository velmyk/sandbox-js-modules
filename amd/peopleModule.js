define([ './nameModule' ], (names) => {
    'use strict';

    function getPerson() {
        return {
            name: names.getName(),
            age: Math.random()
        };
    }

    return {
        getPerson: getPerson
    };
});