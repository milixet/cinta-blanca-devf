/**
 *  This method return one JSON como si lo
 * estuvieramos pidiendo a servidor
 * @returns {JSON}
 */

function pideInformacion() {
    var informacion = {
        'linea_blanca': [
            {
                'nombre': 'Lavadora',
                'precio': 500,
                'stock': 10,
            },
            {
                'precio': 2500,
                'nombre': 'horno',
                'stock': 14,
            },
            {
                'nombre': 'plancha',
                'precio': 500,
                'stock': 5,
            }

        ],
        'electronicos': [
            {
                'nombre': 'Nintendo SWITCH',
                'precio': 7000,
                'stock': 10,
            },
            {
                'nombre': 'PS4',
                'preccio': 7500,
                'stock': 4,
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
    return informacion;
}



/**
 * Esta funcion crea la tabla 
 * 
 * @returns {JSON} data
 * @see inicializa
 */
debugger;
//extract value for header
//decripcion, precio,
function creaTabla(data) {

    var col = [];

    for (var index = 0; index < data.length; index++) {
        for (var key in data[index]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // create dynamic table
    var table = document.createElement("table");

    // create a dynamic html header row using the extracted heders
    //insertrow insert a row in the table
    var tr = table.insertRow(-1);

    // table row

    for (var index = 0; i < col.length; index++) {
        var th = document.createElement("th");

        //innerhtml return the html content of an element
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    //add JSON data to the table as rows
    for (var j = 0; j < data.length; j++) {

        //insertCell insert a cell in the row
        var tabCell = tr.insertCell(-1);

        tabCell.innerHTML = data[i][col[j]];

    }
    //create the table whit JSON data to a container

    var divContainer = document.getElementById('container');
    divContainer.innerHTML = "";
    divContainer.appendChild(table);



}

function inicializa() {

    // pide la informacion
    var data = pideInformacion();

    // obten el body

    var body = document.getElementsByTagName('body')[0];

    //crea tabla
    var tabla = creaTabla();

}
inicializa();