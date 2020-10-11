const { expect } = require("@jest/globals");
const crearTriangulo = require('../triangulo_test');

describe('Creación de triángulos',() => {
    test('Creación de triángulo equilátero', () => {
        expect(crearTriangulo({lado1: 7, lado2: 7, lado3: 7})).toBe('Es un triángulo equilátero.');
    });
    test('Creación de triángulo isósceles', () => {
        expect(crearTriangulo({lado1: 5, lado2: 5, lado3: 2})).toBe('Es un triángulo isósceles.');
    });
    test('Creación de triángulo escaleno', () => {
        expect(crearTriangulo({lado1: 1, lado2: 2, lado3: 3})).toBe('Es un triángulo escaleno.');
    });
    test('Creación de triángulo lados negativos', () => {
        expect(crearTriangulo({lado1: -5, lado2: -5, lado3: -2})).toBe('Los lados de un triángulo no pueden ser negativos o iguales a 0.');
    });
});