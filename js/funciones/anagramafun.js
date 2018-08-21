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

    if(validaInputs(palabra1,palabra2)){
        //hacemos el codigo del anagrama
        //paso 0
        var palabraOrdenada1 = palabra1.toLowerCase().split("").sort().join("");
        var palabraOrdenada2 = palabra2.toLowerCase().split("").sort().join("");

        //comparamos las palabras ordenadas
        if(palabraOrdenada1===palabraOrdenada2){
            alert('Yey, si son anagramas')
        }else{
            alert('nel compa no son anagramas')
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