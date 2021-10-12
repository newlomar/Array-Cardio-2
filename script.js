// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?
const currentYear = new Date().getFullYear()

const isAtLeastOneNineteenOrOlder = people.some(people => currentYear - people.year >= 19)
console.log(`is at least one person 19 or older?`, isAtLeastOneNineteenOrOlder)


// Array.prototype.every() // is everyone 19 or older?
const isEveryOneNineteenOrOlder = people.every(person => currentYear - person.year >= 19)
console.log(`is everyone 19 or older?`, isEveryOneNineteenOrOlder)


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const find = comments.find(comment => comment.id === 823423)
console.log('find the comment with the ID of 823423', find)


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIndex = comments.findIndex(comment => comment.id === 823423)
console.log('Find index of the comment with this ID',  findIndex)

// método não funcional
// comments.splice(findIndex, 1)
// console.log(comments)

const newComments = [
  ...comments.slice(0, 1),
  ...comments.slice(2, comments.length)
]

console.table(newComments)