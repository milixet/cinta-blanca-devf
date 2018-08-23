/**
 * this fuction recived one value then show the tables of multipl
 * @author milixet
 * @since V1.0
 * @see cambiarColor
 */


function creaTabla() {
    //debugger;
    //primero voy a recibir los datos del input
    var numero = document.getElementById('numero').value;


    if (numero > 0) {

        //creo dos variable que me serviran para crear mis tablas
        //creo dos bucles para crear mis tablas
        var body = document.getElementsByTagName('body')[0];//body
        //creo contador para cambiar el color
        var a = 0;
        for (var indice = 1; indice <= numero; indice++) {
            
            //genero la tabla
            var tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');
            
            //creo arreglo de colores
            var colores = ['rojo', 'azul', 'verde'];

            //valido que el contador para cambiar el color sea menor que el arreglo
            if(a<=colores.length){
                //incremento contador
                a++;
                   }else{
                       a = 0;
                   }
                 
                tarjeta.classList.add(colores[a]); 
                
                
                //aqui tengo que agragar el color
                // tarjeta.classList.add('red');

                for (var multiplo = 1; multiplo < 11; multiplo++) {
                    //genero el contenido de la tarjeta
                    var linea = document.createElement('h4');
                    linea.textContent = indice + ' x ' + multiplo + ' = ' + indice * multiplo;
                    tarjeta.appendChild(linea);


                }
                //agrego la tarjeta al DOM=>HTML

                body.appendChild(tarjeta);
            }

        
    }
}
/**
 * funcion para cambiar de color
 * @author milixet
 */
