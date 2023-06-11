const { helloworld } = require ('./helloworld');

describe('El saludo es mostrado', () => {

    test('El saludo es mostrado', () => {
        const result = helloworld();
        expect(result).toBe('Hello World');
    });

});