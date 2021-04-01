function copiar(arr) {
  const arr1 = [];
  arr.forEach((item) => {
    arr1.push(item, item);
  });
  return arr1;
}

console.log(copiar([1, 2, 3, 4]));
