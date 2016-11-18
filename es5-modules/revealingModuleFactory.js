const prRevealingModuleFactory = function(name) {
    let counter = 1;
    const privateVar = 'RevealingModuleFactory';

    function sayHi() {
        console.log(`Hi, ${privateVar} ${name}. ${counter++} time.`);
    }

    return {
        sayHi: sayHi
    };
};