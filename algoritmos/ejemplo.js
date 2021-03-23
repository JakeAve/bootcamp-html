const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const button1 = document.querySelector('#button-1');
const result = document.querySelector('#result');


// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function clickParaEjecutar() {
    console.log('hello?')
    const arr = [-1, 3, 5, -5];
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0)  arr2.push('big')
        else arr2.push(arr[1])
    }

    console.log(arr2)
    result.innerHTML = arr2;
}