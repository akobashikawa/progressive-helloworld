const HelloWorld = require ('./helloworld');

describe('El saludo es mostrado', () => {

    test('El saludo es mostrado', () => {
        const result = HelloWorld.helloworld();
        expect(result).toBe('Hello World');
    });

});