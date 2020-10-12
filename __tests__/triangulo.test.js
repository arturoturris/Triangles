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
        expect(crearTriangulo({lado1: 4, lado2: 2, lado3: 5})).toBe('Es un triángulo escaleno.');
    });
    test('CP_4 - Creación de triángulo lados con valores decimales', () => {
        expect(crearTriangulo({lado1: 1.2, lado2: 1.2, lado3: 1.2})).toBe('Los lados del triángulo no pueden tener valores decimales.');
    });
    test('CP_5 - Creación de triángulo sin lados definidos', () => {
        expect(crearTriangulo({lado1: '', lado2: '', lado3: ''})).toBe('Todos los lados del tringulo deben estar definidos.');
    });
    test('CP_6 - Creación de triángulo lados negativos', () => {
        expect(crearTriangulo({lado1: -5, lado2: -5, lado3: -2})).toBe('Los lados de un triángulo no pueden ser negativos.');
    });
    test('CP_7 - Creación de triángulo lados conteniendo 0.', () => {
        expect(crearTriangulo({lado1: 3, lado2: 2, lado3: 0})).toBe('Los lados de un triángulo no pueden ser iguales a 0.');
    });
    test('CP_8 - Creación de triángulo con lados inválidos.', () => {
        expect(crearTriangulo({lado1: 3, lado2: 2, lado3: 7})).toBe('Las medidas dadas no pueden formar un triángulo.');
    });
 
});