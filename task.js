// task -1 reverse colors names
// const colors = ["red", "blue", "green", "yellow", "orange"];
// console.log(colors);
// const reverseColor = [];

// for (color of colors) {
//   reverseColor.unshift(color);
// }
// console.log(reverseColor);

// task -2 get even number from array
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumber = [];

// for (const number of numbers) {
//     // console.log(number);
//   if (number / 2 === 0) {
//     evenNumber.push(number);
//   }
// }
// console.log(evenNumber);

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumber = [];

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     evenNumber.push(number);
//   }
// }
// console.log(evenNumber);

// const numbers2 = [12, 98, 5, 41, 23, 78, 46];
// const oddNumber = [];

// for (const number2 of numbers2) {
//   // console.log(number2)
//   if (number2 % 2 === 1) {
//     oddNumber.push(number2);
//   }
// }

// console.log(oddNumber);

// task -3 how to string array concatenate
// const friends = ["Tom", "Tim", "Tin", "Tik"];
// let friendString = "";
// // console.log(names);

// for (const friend of friends) {
//   //   console.log(friend);
//   friendString += friend;
// }
// console.log(friendString);

// task -4 heard
// const statement = "I am a hard working person";
// const word = statement.split(" ");
// console.log(word);

// const reversWord = word.reverse();
// console.log(reversWord);

// const reversStatement = reversWord.join(" ");
// console.log(reversStatement);

const statement = "I am a hard working person";
const words = statement.split(" ");

const reversWord = [];
for (const word of words) {
  reversWord.unshift(word);
}

const reversStatement = reversWord.join(" ");
console.log(reversStatement);
