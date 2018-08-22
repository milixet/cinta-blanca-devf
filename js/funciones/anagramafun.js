/**
 * This fuction validates if two given string are Anagrams or not
 * @author milixet
 * @since v1.0
 * @see validaInputs
 */
function validaAnagrama(){
    //debugger;
    //primer paso validar la entrada del usuario
    var palabra1 = document.getElementById('palabra1').value;
    var palabra2 = document.getElementById('palabra2').value;
    
    //validar la entrada del usuario
    if(validaInputs(palabra1,palabra2)){
        //hacemos el codigo del anagrama
        //paso 0
        var palabraOrdenada1 = palabra1.toLowerCase().split("").sort().join("");
        var palabraOrdenada2 = palabra2.toLowerCase().split("").sort().join("");

        //comparamos las palabras ordenadas
        if(palabraOrdenada1===palabraOrdenada2){
            creaTarjeta(palabra1+" - "+palabra2,false);
        }else{
            creaTarjeta(palabra1+" - "+palabra2,true);
        }
        
    }else{
        //mostrar error de inputs
        alert('nel compa no son anagramas')
    }

}
/**
 * this fuction will validate in the inputs are not empty
 * @argument {string} texto1
 * @argument {string} texto2
 * 
 * @returns {boolean}
 */

function validaInputs(texto1,texto2){
    return texto1.length>0 && texto2.length>0;
}
function creaTarjeta(texto, erroneo){
    //creo la tarjeta
    var tarjeta = document.createElement('div');
    //Creo el texto de la tarjeta
    var h3 = document.createElement('h3');
    //Le asigno el texto que recibo por parametro
    h3.textContent=texto;
    //Le agrego el H3 a la tarjeta
    tarjeta.appendChild(h3);
    tarjeta.classList.add('tarjeta');

    //Valido si es erroneo o no
    if(erroneo)
        tarjeta.classList.add('erroneo');   //En caso de que si, le pongo la clase error
    else
        tarjeta.classList.add('correcto');
 
    var resultado = document.getElementsByClassName('resultados')[0];
    resultado.appendChild(tarjeta);

    // Limpio los dos inputs
    document.getElementById('palabra1').value='';
    document.getElementById('palabra2').value='';
}