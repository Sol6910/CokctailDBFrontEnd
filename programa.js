document.getElementById('botonBuscar').addEventListener('click',buscarDatos);

function buscarDatos(){
    let Cokctail = document.getElementById('botonBuscar').value;

    fetch("https://www.cocktailDBclone.somee.com/api/cocktail/buscar")
.then((response => response.json()))
.then((data)=> console.log(data));
}


