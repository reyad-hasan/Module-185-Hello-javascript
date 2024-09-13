// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[2]);

// const numbers = [4, 7, 12, 8, 43, 6, 1];
// const numbers_asc = numbers.sort() // not working
// const numbers_asc = [...numbers].sort(function (a, b) { return a - b })
// const numbers_dsc = [...numbers].sort(function (a, b) { return b - a })

// console.log(numbers_asc);
// console.log(numbers_dsc);

// const persons = ['rakib', 'nokib', 'sakib', 'akib', 'Pakib', 'anis', 'Anis'];
// const sortedPersons = persons.sort();
// console.log(sortedPersons);

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

// const reversed = numbers.reverse();
// console.log(reversed);

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const rev_numbers = [];

// for (const num of numbers) {
//   console.log(num);
//   rev_numbers.unshift(num);
// }
// console.log(rev_numbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversNumbers = [];

for(number of numbers){
    console.log(number)
    reversNumbers.unshift(number)
}

console.log(reversNumbers)
