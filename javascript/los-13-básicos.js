// 6

function algo6(arr) {
    let num = 0;
    arr.forEach((val) => {
        num = num + val;
    })

    return num / arr.length;
}

const _6 = algo6([1, 2, 5, 3, 4, 8, 56]);

// function algo1(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//         suma = suma + arr[i];
//     }

//     return suma / arr.length;
// }

// const _1 = algo1([1,2,5,3,4,8,56]);

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


console.log({ _6, _8, _13 })