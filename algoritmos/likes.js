// function likes(names) {
//     if (names.length === 0) return `no one likes this`
//     if (names.length === 1) return `${names[0]} likes this`
//     if (names.length === 2) return `${names[0]} and ${names[1]} like this`
//     if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// }

function likes(arr) {
  let res = "";
  if (arr.length == 0) {
    res = "no one";
  } else {
    for (let i = 0; i < arr.length; i++) {
      res += (i > 0 ? (i == arr.length - 1 ? " and " : ", ") : "") + arr[i];
    }
  }

  const likeOLikes = arr.length < 2 ? ' likes' : ' like'

  return res + likeOLikes + " this";
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
