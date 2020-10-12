const { expect } = require("@jest/globals");
const crearTriangulo = require('../triangulo_test');

describe('Creación de triángulos',() => {
    test('CP_1 - Creación de triángulo equilátero', () => {
        expect(crearTriangulo({lado1: 7, lado2: 7, lado3: 7})).toBe('Es un triángulo equilátero.');
    });
    test('CP_2 - Creación de triángulo isósceles', () => {
        expect(crearTriangulo({lado1: 5, lado2: 5, lado3: 2})).toBe('Es un triángulo isósceles.');
    });
    test('CP_3 - Creación de triángulo escaleno', () => {
        expect(crearTriangulo({lado1: 1, lado2: 2, lado3: 3})).toBe('Es un triángulo escaleno.');
    });
    test('CP_4 - Creación de triángulo lados con valores decimales', () => {
        expect(crearTriangulo({lado1: 1.2, lado2: 1.2, lado3: 1.2})).toBe('Los lados del triángulo no pueden tener valores decimales.');
    });
    test('CP_5 - Creación de triángulo sin lados definidos', () => {
        expect(crearTriangulo({lado1: '', lado2: '', lado3: ''})).toBe('Todos los lados del tringulo deben estar definidos.');
    });
    test('CP_6 - Creación de triángulo lados negativos', () => {
        expect(crearTriangulo({lado1: -5, lado2: -5, lado3: -2})).toBe('Los lados de un triángulo no pueden ser negativos o iguales a 0.');
    });
    
});