function reverso(arr) {
    return arr.reverse();
}

console.log(reverso([1,2,3,4,5,6]))

function reverseNumber(n) {
    const neg = n < 0;
    const rev = Math.abs(n).toString().split('').reverse().join('');
    const num = Number(rev);
    return neg ? num * -1 : num;
  }

console.log(reverseNumber(-123))