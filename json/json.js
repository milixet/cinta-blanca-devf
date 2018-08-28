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
 * @param {Array} data
 * @see inicializa
 */

//extract value for header
//decripcion, precio,
function creaTabla(data) {

    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow();
    // TABLE ROW.
    for (var i = 0; i < col.length; i++) {
        // TABLE HEADER.
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < data.length; i++) {

        tr = table.insertRow();

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }
    debugger;
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById('container');
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}





function inicializa() {
    // obten el body

    var body = document.getElementsByTagName('body')[0];
    // pide la informacion
    var data = pideInformacion();


    //crea tabla electronicos
    var tabla = creaTabla(data.electronicos);

    //crea tabla linea blanca
    //var tabla = creaTabla(data.linea_blanca);

}
inicializa();