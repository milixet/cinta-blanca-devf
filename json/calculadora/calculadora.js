/**
 * funcion menu operaciones
 * 
 */

function operaciones(op) {

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));

        },
        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },
        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }

    };

    var operacion;

    switch (op) {
        //recibimos primer valor
        case 'sumar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "+";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "suma";
            break;

        case 'restar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "-";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "resta";
            break;

        case 'multiplicar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "*";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "multiplicacion";
            break;

        case 'dividir':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "/";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "division";
            break;

        case 'igual':
            operacion = document.getElementById("resultado").value;

            //guarda en memoria para hacer operacion    
            var memoriaop = document.getElementById("memoria").value;

            switch (memoriaop) {
                case 'suma':
                    var operandos = operacion.split("+");
                    var resultado = ops.sumar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'resta':
                    var operandos = operacion.split("-");
                    var resultado = ops.restar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'multiplicacion':
                    var operandos = operacion.split("*");
                    var resultado = ops.multiplicar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'division':
                    var operandos = operacion.split("/");
                    var resultado = ops.dividir(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;

            }
            break;


    }

}
function escribir1(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 1
    } else {
        var str2 = '1';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}
function escribir2(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 2
    } else {
        var str2 = '2';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}
function escribir3(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 3
    } else {
        var str2 = '3';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}
function escribir4(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 4
    } else {
        var str2 = '4';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}
function escribir5(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 5
    } else {
        var str2 = '5';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}
function escribir6(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 6
    } else {
        var str2 = '6';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}
function escribir7(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 7
    } else {
        var str2 = '7';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}

function escribir8(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 8
    } else {
        var str2 = '8';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}

function escribir9(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 9
    } else {
        var str2 = '9';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}

function escribir0(n) {
    var str1 = document.getElementById('resultado').value;
    if (str1 == '0') {
        document.getElementById('resultado').value = 0
    } else {
        var str2 = '0';
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res;
    }
}