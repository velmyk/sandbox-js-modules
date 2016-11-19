const prRevealingModuleSingleton = (function() {
    let counter = 1;
    const privateVar = 'RevealingModuleSingleton';

    function sayHi() {
        const privateGuest = 'Guest';

        console.log(`Hi, ${privateVar}. ${counter++} time.`);
    }

    return {
        sayHi: sayHi
    };
})();