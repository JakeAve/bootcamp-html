// 1 

function algo1() {
    console.log('hello?')
    const arr = [-1, 3, 5, -5];
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) arr2.push('big')
        else arr2.push(arr[1])
    }

    return arr2;
}

const _1 = algo1();

// 2

function algo2(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log('Algo 2 menor', min);
    return max;
    // let min = arr[0];
    // let max = arr[0];
    // arr.forEach((val) => {
    //     if (val < min) min = val;
    //     if (val > max) max = val;
    // })
    // console.log(min);
    // return max;
}

const _2 = algo2([1, 5, 7, 6, 8, 9, 5])

function algo3(arr) {
    console.log('Algo 3 penùltimo', arr[arr.length - 2]);
    let impar;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            impar = arr[i];
            i = arr.length;
        }
    }
    return impar;
}

const _3 = algo3([2, 6, 8, 8, 12, 22, 74, 2])


function algo7(arr) {
    const arr1 = arr.map((val, i) => {
        if (i % 2 !== 0) return val + 1;
        return val;
    })
    return arr1
}

const _7 = algo7([8, 5, 7, 45, 6, 5, 6]);

// function algo7(arr) {
//     for (let i = 0; i < arr.length; i ++) {
//         if (i % 2 !== 0) {
//             arr[i] ++;
//         } 
//         console.log(arr[i])
//     }
//     console.log(arr)
//     return arr;
// }

// const _7 = algo7([8,5,7,45,6,5,6]);

function algo10(arr) {
    for (var i = 0; i <= (arr.length / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
}

const _10 = algo10([1, 2, 3, 4, 5])


console.log({ _1, _2, _3, _7, _10 })