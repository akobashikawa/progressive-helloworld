const { helloworld } = require ('./helloworld');

test('El saludo es mostrado', () => {
    const result = helloworld();
    expect(result).toBe('Hello World');
})