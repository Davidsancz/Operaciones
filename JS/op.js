// CUADRADO

let boton1 = document.getElementById("Btndareac"); 

boton1.addEventListener("click", areac);

function areac(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("basec").value);
    varnumero2 = Number(document.getElementById("alturac").value);

    varresultado = varnumero1 * varnumero2;

    let imprimir = document.getElementById("imprimirresultadoarea");

    imprimir.innerText = varresultado;

}

// RECTANGULO

let boton2 = document.getElementById("Btndarear"); 

boton2.addEventListener("click", arear);

function arear(){

    let varnumero1;
    let varnumero2;
    let varresultado;

    varnumero1 = Number(document.getElementById("baser").value);
    varnumero2 = Number(document.getElementById("alturar").value);

    varresultado = (varnumero1 * varnumero2)/2;

    let imprimir = document.getElementById("imprimirresultadoarear");

    imprimir.innerText = varresultado;

}

// Descuento

const botonprecio = document.getElementById("Btndes").addEventListener("click", descuento);



function descuento(){

    const precioarticulo= Number (document.getElementById("precio").value);

    const divres = document.getElementById("ResDescuento");

   

    if (precioarticulo >1000){

        descuento = precioarticulo * .30;

        precio = precioarticulo -descuento;



        divres.innerText = precio;

    } else {

        descuento = precioarticulo * .10;

        precio = precioarticulo -descuento;



        divres.innerText = precio;

    }


}

// NUMEROS DESCENDENTES

const botonascendente = document.getElementById("Btnnumeros").addEventListener("click", numeros);

function numeros(){

    const imprimirnumeros = document.getElementById("imprimirresultadonúmeros");
    imprimirnumeros.innerHTML = " ";

    for(let x=100; x>=0; x--){

        const lista = document.createElement("li");
        lista.setAttribute("class", "list-group-item");
        lista.innerText = x;
        imprimirnumeros.appendChild(lista);
    }
}

// PAR IMPAR


let botonP = document.getElementById("Btnp"); 

botonP.addEventListener("click", parimpar);

function parimpar(){

    let varnumero1;
    let varresultado;

    varnumero1 = Number(document.getElementById("num").value);

    if(varnumero1%2==0){
        
        alert("El número "+varnumero1+" es par");
    
    }else{
        
        alert("El número "+varnumero1+" es impar");
        
    }


    let imprimir = document.getElementById("imprimirresultadop");

    imprimir.innerText = varresultado;

}


