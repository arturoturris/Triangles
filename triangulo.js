const crearTriangulo = (propiedades) => {
    if(!estanDefinidosLosLados(propiedades))
        return 'Todos los lados del tringulo deben estar definidos.';
    if(sonLadosIgualesACero(propiedades))
        return 'Los lados de un triángulo no pueden ser iguales a 0.';
    if(!sonLadosPositivos(propiedades))
        return 'Los lados de un triángulo no pueden ser negativos.';
    if(!numerosDecimales(propiedades))
        return 'Los lados del triángulo no pueden tener valores decimales.';
    if(esEquilatero(propiedades))
        return 'Es un triángulo equilátero.';
    else if(esIsosceles(propiedades))
        return 'Es un triángulo isósceles.';
    else if(esEscaleno(propiedades))
        return 'Es un triángulo escaleno.';
}

const estanDefinidosLosLados = (propiedades) => {
    return (propiedades.lado1 !== '' && propiedades.lado2 !== '' && propiedades.lado3 !== '');
}

const sonLadosIgualesACero = (propiedades) => {
    return (propiedades.lado1 == 0 || propiedades.lado2 == 0 || propiedades.lado3 == 0);
}

const sonLadosPositivos = (propiedades) => {
    return (propiedades.lado1 > 0 && propiedades.lado2 > 0 && propiedades.lado3 > 0);
}

const esEquilatero = (propiedades) => {
    return (propiedades.lado1 === propiedades.lado2 && propiedades.lado2 === propiedades.lado3);
}

const esIsosceles = (propiedades) => {
    return (propiedades.lado1 === propiedades.lado2 && propiedades.lado2 !== propiedades.lado3);
}

const esEscaleno = (propiedades) => {
    return (propiedades.lado1 !== propiedades.lado2 && propiedades.lado2 !== propiedades.lado3 && propiedades.lado1 !== propiedades.lado3);
}

const numerosDecimales = (propiedades) => {
    return (Number.isInteger(propiedades.lado1) && Number.isInteger(propiedades.lado2) && Number.isInteger(propiedades.lado3));
}

const trianguloValido = (propiedades) =>{
    return (propiedades.lado1 < (propiedades.lado2 + propiedades.lado3) && propiedades.lado2 < (propiedades.lado1 + propiedades.lado3) && propiedades.lado3 < (propiedades.lado1 + propiedades.lado2));
}


const formularioTriangulos = document.querySelector('#FT');

const main = () => {
    formularioTriangulos.addEventListener('submit', (e) => {
        e.preventDefault();
        const propiedades = {
            lado1: formularioTriangulos.querySelector('input[name=lado1]').value,
            lado2: formularioTriangulos.querySelector('input[name=lado2]').value,
            lado3: formularioTriangulos.querySelector('input[name=lado3]').value
        };
    
        document.querySelector("#mensaje").innerHTML = crearTriangulo(propiedades);
    });
}

main();