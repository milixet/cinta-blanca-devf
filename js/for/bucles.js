// para evitar tantas comparaciones cada que entre el ciclo ponemos el body afuera
var body = document.getElementsByTagName('body')[0];//obten el body

var contador=0;
for (var index = 0; index < 10000; index++) {
    if (index % 2 == 0) {

        var button = document.createElement('button');
        button.textContent = index;


        body.appendChild(button);//agregale el nuevo elemento como hijo
        contador++;
    }

}
alert(contador);


// event loop
