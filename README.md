# Attempt to finaly understand JavaScript modules

### Module patterns in ES5:
#### IIFE:
``` javascript
(function() {
    const privateVar = 'secret';

    console.log(privateVar);
})();
```
- encapsulates variables (avoids global scope polution)
- runs its body immediately when executes
- `privateVar` not exposed to global scope

#### Revealing module pattern - Singleton:
``` javascript
const revealingModuleSingletonCounter = (function(name = 'unnamed') {
    const counter = 1;

    function increaseCounter() {
        console.log(`${name} counter has value: ${counter++}`);
    }

    return {
        increaseCounter: increaseCounter
    };
})();

revealingModuleSingletonCounter.increaseCounter(); // 1
revealingModuleSingletonCounter.increaseCounter(); // 2
```
- encapsulates variables (avoids global scope polution)
- runs its body immediately when executes and returns public API
- revealing module singleton creates one singleton counter in global scope when executes

#### Revealing module pattern - Factory: 
``` javascript
const RevealingModuleFactoryCounter = function(name = 'unnamed') {
    const counter = 1;

    function increaseCounter() {
        console.log(`${name} counter has value: ${counter++}`);
    }

    return {
        increaseCounter: increaseCounter
    };
}

const myCounterFoo = new RevealingModuleFactoryCounter('foo');
const myCounterBar = new RevealingModuleFactoryCounter('bar');

myCounterFoo.increaseCounter(); // 1
myCounterBar.increaseCounter(); // 1
```
- encapsulates variables (avoids global scope polution)
- returns an object with public API each time it called
- RevealingModuleFactoryCounter creates new counters 
- `myCounterFoo` and `myCounterBar` are independant
- RevealingModuleFactoryCounter lives in global scope


### AMD module definition:
``` javascript
define(['./names'], (names) => {
    console.log(names.getName()); // Bob
});

define([], () => {
    'use strict';

    function getName() {
        return 'Bob';
    }

    return {
        getName: getName
    };
});
```
- no native support, just a syntax require.js understands
- needs modules loader - RequireJS
- `define` if a function from RequireJS
- encapsulates logic
- no variables insted require function itself
- dependencies management
- modules loads in browser one by one in order they required

### CommonJS module
``` javascript
// file.js
'use strict';

const names = require('./names');

console.log(names.getName()); // Bob

----------------

// anotherFile.js
    'use strict';

function getName() {
    return 'Bob';
}

exports.getname = getName;
```
- no native support in browser, just a syntax that loader understands
- native support for CommonJS module in NodeJS environment
- file is a module
- defining properties on `exports` object makes them as publik API f the module
    - `exports` nearly equivalent to `module.exports`
    - ✓ exports.method = method
    - ✓ module.exports.method = method (same as above)
    - ⨉ exports = {};
    - ⨉ exports = function() {}
    - ✓ module.exports = {};
    - ✓ module.exports = function() {}
- `require` is another function that CommonJS module loader understands
- CommonJS modules loaders are `SystemJS`
- pretty similar to AMD approach but is more optimised for browser in some way