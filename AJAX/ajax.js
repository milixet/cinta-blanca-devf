function cargaDatos(){
    $.ajax({
        method: 'GET',
        url:'https://jsonplaceholder.typicode.com/posts'
    }).done(function(datos){
        console.log(datos);
    }).fail(function(){
        alert('ya valio madres');
    });
    //programacion asincrona
}

function enviaDatos(){
    
    var titulo = document.getElementById('titulo').value;
    var b = document.getElementById('b').value;
    $.ajax({
        method: 'POST',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{
            title: titulo,
            body: b,
            userId: 2
        },

    }).done(function(response){
        console.log(response);
    }).fail(function(){
        alert('ya valio madres');
    });
}