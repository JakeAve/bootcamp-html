const users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

users.forEach((val) => {
    console.log(`${val.name} - ${val.age}`);
})

console.log(' ')

for (let i = 0; i < users.length; i ++) {
    const val = users[i];
    console.log(`${val.name} - ${val.age}`);
}