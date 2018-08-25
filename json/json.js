/**
 *  This method return one JSON como si lo
 * estuvieramos pidiendo a servidor
 * @returns {JSON}
 */
function pideInformacion(){
    var informacion = {
        'linea_blanca' : [
            {
                'nombre':'Lavadora',
                'precio': 500,
                'stock' : 10,
            },
            {
                'precio' : 2500,
                'nombre' : 'horno',
                'stock' : 14,
            },
            {
                'nombre' : 'plancha',
                'precio' : 500,
                'stock' : 5,
            }

        ],
        'electronicos' : [
            {
                'nombre' : 'Nintendo SWITCH',
                'precio' : 7000,
                'stock' : 10,
            },
            {
                'nombre' : 'PS4',
                'preccio' : 7500,
                'stock' : 4,
            },

        ]
    }
    /* imprimir JSON
    console.log(informacion);
    console.log(informacion.linea_blanca);
    console.log(informacion.linea_blanca[2]);
    console.log(informacion.linea_blanca[1].nombre);
    console.log(informacion.linea_blanca[1].precio);
    */
}
pideInformacion();

/**
 * Esta funcion 
 * 
 */
function creaTabla(jsonObj){

    

}
 
function inicializa(){
    var header = document.querySelector("header");
    var section = document.querySelector("section");
    pideInformacion();
    creaTabla();
}
