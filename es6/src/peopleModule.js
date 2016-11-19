import getName from './nameModule.js';

export default function getPerson() {
    return {
        name: getName(),
        age: Math.random()
    };
}
