//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

const colorCopy = faveColors.slice()
console.log(colorCopy)
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopy.push(`blue`)
console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

const middleNums = numbers.slice(1, 4)
console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

function bigOrSmall(arr){
  let answers = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 100 ){
      answers.push(`Big`)
    } else {
      answers.push(`Small`)
    }
  }
  return answers
}

console.log(bigOrSmall([1, 200, 300, 1 ,4,5, 600]));


const bigOrSmall2 = (arr) => {
  let answers2 = []  // used let here because answers it can change
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 100) {
      answers2.push(`Big`)
    } else { 
      answers2.push(`Small`)
    }
  }
  return answers2
}
console.log(bigOrSmall2([101, 23, 600, 45, 167]))