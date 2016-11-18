(function() {
    'use strict';

    const prModuleInIIFE1 = new prRevealingModuleFactory('first');
    const prModuleInIIFE2 = new prRevealingModuleFactory('second');

    prRevealingModuleSingleton.sayHi();
    prRevealingModuleSingleton.sayHi();

    prModuleInIIFE1.sayHi();

    prModuleInIIFE2.sayHi();
    prModuleInIIFE2.sayHi();
})();