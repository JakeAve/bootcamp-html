// function algo1(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//         suma = suma + arr[i];
//     }

//     return suma / arr.length;
// }

// const _1 = algo1([1,2,5,3,4,8,56]);

//3

function algo3() {
    let suma = 0;
    for (let i = 1; i <= 5000; i ++) {
        if (i % 2) suma += i;
    }
    return suma;
}

const _3 = algo3()

// 6

function algo6(arr) {
    let num = 0;
    arr.forEach((val) => {
        num = num + val;
    })

    return num / arr.length;
}

const _6 = algo6([1, 2, 5, 3, 4, 8, 56]);

function algo7() {
  const arr = [];
  for (let i = 1; i < 50; i += 2) {
      arr.push(i);
  }
  return arr;
}

const _7 = algo7();

function algo8(arr, Y) {
    return arr.filter((val) => val > Y).length
}

const _8 = algo8([1, 2, 3, 5, 4], 2);

// function algo8(arr, Y) {
//     let cuenta = 0;
//     for (let i = 0; i < arr.length; i ++) {
//         if (arr[i] > Y) cuenta += 1;
//     }
//     return cuenta;
// }

// const _8 = algo8([1, 2, 3, 5, 4], 2);


// 11

// function algo11(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const promedio = arr.reduce((acc, val) => acc += val, 0) / arr.length;
//     return [max, min, promedio]
// }


function algo11(arr) {
    let max = arr[0];
    let min = arr[0];
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        const otroNombre = arr[i];
        if (otroNombre > max) {
            max = otroNombre
        }
        if (otroNombre < min) {
            min = otroNombre
        }
        suma += otroNombre;
    }
    
    const promedio = suma / arr.length;

    return [max, min, promedio];
}

const _11 = algo11([1,7,9,12,32])

function algo13(arr) {
    return arr.map((val) => val < 0 ? 'Dojo' : val);
}

const _13 = algo13([-1,7, -8,4,5,6])


// function algo13(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) arr[i] = 'Dojo'
//     }
//     return arr;
// }

// const _13 = algo13([-1, 7, -8, 4, 5, 6])


console.log({ _3, _6, _7, _8, _11, _13 })