// remove at particular index
const array = [1, 2, 3, 4, 5, 3, 3];
function remove(array, index) {
  return array.splice(index, 1);
}

remove(array, 2);

// return odd number array
const array1 = [1, 2, 3, 8, 10];
function oddList(array1) {
  return array1.filter((number) => number % 2 !== 0);
}
oddList(array1);

// remove duplicates
const array3 = [1, 2, 3, 4, 5, 3, 3];
const newArray = [];
array3.map((item) => {
  if (!newArray.includes(item)) {
    newArray.push(item);
  }
});
console.log(newArray);

// move all zeros at the end
const array4 = [1, 2, 3, 4, 0, 6, 0, 3, 9];
array4.sort();

//Palindrome
function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

checkPalindrome("madam");

// Occurence of element
const occurence = [1, 2, 2, 5];
const a = {};

for (let i = 0; i <= occurence.length; i++) {
  if (!a[occurence[i]]) {
    a[occurence[i]] = 0;
  }
  ++a[occurence[i]];
}

console.log(a);
// 2nd way
const occurence1 = [1, 2, 2, 5];
const a1 = {};

occurence.forEach((item) => {
  if (item in a1) {
    ++a1[item];
  } else {
    a1[item] = 1;
  }
});
console.log(a1);

// Object iteration
const obj = {
  name: "Prarthana",
  age: 30,
  email: "prarthana@gmail.com",
};

for (let [key, value] in Object.entries(obj)) {
  console.log(key);
}

// Reverse each word

const str = "welcome to here";
const data = str.split(" ").reverse().join(" ");
const data1 = data.split("").reverse().join("");

// 2 way
const str1 = str.split(" ");

const newStr = str1.map((item) => item.split("").reverse().join(""));
console.log(newStr.join(" "));

//closure example

function createClosure() {
  return function innerFunc(y) {
    return x * y;
  };
}

const closureInstance = createClosure(9);
closureInstance(3);

// currying

function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
alert(curriedSum(1)(2)); // 3
