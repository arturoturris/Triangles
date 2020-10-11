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