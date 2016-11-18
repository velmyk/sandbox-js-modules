# Attempt to finaly understand JavaScript modules

### Module patterns in ES5:
##### IIFE:
``` javascript
(function() {
    const privateVar = 'secret';

    console.log(privateVar);
})();
```
- encapsulates variables (avoids global scope polution);
- runs its body immediately when executes;
- `privateVar` not exposed to global scope; 

##### Revealing module pattern - Singleton:
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
- encapsulates variables (avoids global scope polution);
- runs its body immediately when executes and returns public API;
- revealing module singleton creates one singleton counter in global scope when executes;

##### Revealing module pattern - Factory: 
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
- encapsulates variables (avoids global scope polution);
- returns an object with public API each time it called;
- RevealingModuleFactoryCounter creates new counters; 
- `myCounterFoo` and `myCounterBar` are independant;
- RevealingModuleFactoryCounter lives in global scope; 