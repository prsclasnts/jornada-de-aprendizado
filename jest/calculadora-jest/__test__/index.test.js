const calc = require('../index.js');

describe ('calculadora', () => {

    it ('devera retornar a soma entre dois numeros', () => {
        expect(calc.sum(2,1)).toBe(3);
    })

    it ('devera retornar a subtracao entre dois numeros', () => {
        expect(calc.sub(2,1)).toBe(1);
    })

    it ('devera retornar a multiplicacao entre dois numeros', () => {
        expect(calc.mult(2,1)).toBe(2);
    })

    it ('devera retornar a divisao entre dois numeros', () => {
        expect(calc.div(3,2)).toBe(1.5);
    })

})