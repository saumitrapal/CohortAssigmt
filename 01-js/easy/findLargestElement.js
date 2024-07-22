/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  
    let number = numbers[0];
    for (let i = number; i < number.length; i++){
        if (number[i] > number.length){
                number = number[i];
        }
    }
    return number;
}

module.exports = findLargestElement;