// Se ejecuta al cargar la página completa
window.addEventListener('load', function() {
    //Llamada a la función foco()
    //Observe como puede estar la declaración abajo de la llamada.
    foco();
})

function foco() {
    //Le agrega una clase al body
    document.querySelector('body').classList.add('oscuridad');
    //Agrege el título
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = `Desarrollo de Sistemas Web ${anio}`;
    document.body.appendChild(titulo);
    const img = document.createElement("img"); //crea elemento HTML imagen
    img.classList.add('foco'); //le agrega una clase
    img.setAttribute('src', 'images/foco-apagado.jpg');
    //agregamos una función en el evento click
    img.addEventListener('click', () => {
        //busca si la cadena 'apagado' esta en el atributo src
        if (img.src.indexOf("apagado") > 0) {
            //cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-prendido.jpg');
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        } else {
            //cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-apagado.jpg');
            document.body.classList.remove('luz');
            document.body.classList.add('oscuridad');
        }
    })
    //agrega la imagenm al dom
    document.body.appendChild(img);
}