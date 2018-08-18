var body = document.getElementsByTagName('body')[0];

var arreglo=['liz','Luis','Lalo','Roger','Tony','Kachys','Carlos','David'];

for(var indice=0;indice<arreglo.length;indice++){
    var button = document.createElement('button');
    button.textContent = arreglo[indice];

    body.appendChild(button);
}

var numeros=[8,9,7,2,1,3,4,5,4,6,3];
console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());
