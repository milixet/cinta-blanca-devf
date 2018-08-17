
//resultado = ('hola como estas');
//alert('hola mundo');
function pregunta(){
    var edad = prompt('escribe tu edad');

    resultado = (edad);
    //resultado = (edad * 2);

    // alert('vamos a google');
    //window.location='https://www.google.com';
    //resultado = (window.location);
    //caso 0
    var resultado;
    if (edad>18) {
        resultado = ('ya es mayor de edad');
        //caso a
        if(edad>23){
            //caso b
            if(edad>26){
                //caso c
                if(edad>30){
                    //caso d
                    if(edad>45){
                        //caso e
                        if(edad>60){
                            resultado='eres un abuelito';
                        }else{
                            resultado='eres un adulto mayor';
                        }
                    }else{
                        resultado='eres un señor';
                    }
                }else {
                    resultado='estas en doctorado';
                }
            }else{
                resultado='estas en la maestria';
            }
        }else{
            resultado='estas en la universidad';
        }
    } else {
        resultado = ('aun estas chavo');
        //caso 1
        if (edad < 15) {
            //caso 2
            if (edad < 12) {
                //caso 3
                if (edad < 6) {
                    resultado = ('estas en el kinder');
                } else {
                    resultado = ('estas en la primaria');
                }
            } else {
                resultado='estas en la secudaria';
            }
        } else {
                resultado='estas en la prepa';
        }
    }

    var encabezado = document.createElement('h1'); // ya tengo un h1 en memoria
    encabezado.textContent = edad +' - '+ resultado; //<h1>uni<h1>

    var body = document.getElementsByTagName('body')[0];//obten el body
    body.appendChild(encabezado);//agregale el nuevo elemento como hijo
}