let buscador = document.getElementById("input");
let parrafoInicial = document.getElementById("texto").innerHTML;

input.addEventListener('keyup', () =>{ 
    const input = buscador.value;
    if(input!=""){
        document.getElementById("texto").innerHTML= parrafoInicial;
        let nuevoParrafo = parrafoInicial.replace(new RegExp(input, 'gi'), `<span class="span">${input}</span>`);
        document.getElementById("texto").innerHTML= nuevoParrafo;
    } else{
        document.getElementById("texto").innerHTML= parrafoInicial;
    }
});
