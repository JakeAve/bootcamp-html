function Fib(n) {
    if (n == 1) {
        return 0;
    }
    else if (n == 2) {
        return 1;
    }
    else {
        const num1 = Fib(n - 2);
        const num2 = Fib(n - 1);
        return num1 + num2;
    }
}
const a = Fib(3);
const b = Fib(4);
const c = Fib(5);
const d = Fib(10);
console.time('a')
console.log({ a, b, c, d })
console.timeEnd('a')