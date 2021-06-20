"use strict;"

// Declare a variable named submissions that is initialized to an array with the following objects:

const submissions = [
    {
        "name": "Jane",
        "score": 95,
        "date": new Date('2020-01-24'),
        "passed": true
    }, 
    {
        "name": "Joe",
        "score": 77,
        "date": new Date('2018-05-14'),
        "passed": true
    }, 
    {
        "name": "Jack",
        "score": 59,
        "date": new Date('2019-07-05'),
        "passed": false
    }, 
    {
        "name": "Jill",
        "score": 88,
        "date": new Date('2020-04-22'),
        "passed": true
    }
];

/* Declare a function named addSubmission
    - Parameter(s): array, newName, newScore, newDate
    - Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.
*/

function addSubmission(array, newName, newScore, newDate) {
    const newEntry = {
        "name": newName,
        "score": newScore,
        "date": new Date(newDate),
        "passed": newScore >= 60 ? true:false
    };
    array.push(newEntry);
};
addSubmission(submissions, "Jim", 78, '2021-06-18');

/* Declare a function named deleteSubmissionByIndex
    - Parameter(s): array, index
    - Functionality: remove the object from the array at the specified index using the splice method. */

function deleteSubmissionByIndex(array, index) {
    array.splice([index],1);
};

/* Declare a function named deleteSubmissionByName
    - Parameter(s): array, name
    - Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method. */
function deleteSubmissionByName(array, studentName) {
    const removeIt = 
        array.findIndex(function(findIt){
            return findIt.name === studentName;
        });
    array.splice(removeIt,1);
};

/* Declare a function named editSubmission
    - Parameter(s): array, index, score
    - Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise. */
function editSubmission(array, index, score) {
    array[index].score = 91;
    if (array[index].score >= 60) {
        array[index].passed = true;
    } else {
        array[index].passed = false;
    };
};

/* Declare a function named findSubmissionByName
    - Parameter(s): array, name
    - Functionality: return the object in the array that has the provided name. Use the find method */

function findSubmissionByName(array, name) {
    return array.find(student => student.name = name);   
};

/* Declare a function named findLowestScore
    - Parameter(s): array
    - Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array. */
function findLowestScore(array) {
    
    let min_value = Infinity;
    array.forEach(element => {
        if ("score" < min_value)
        min_value = element;
    });
    console.log(min_value);
};



let numbers_array = [1,2,3,4,5]

let max_value = -Infinity
let min_value = Infinity

numbers_array.forEach(element => {
   
   // find minimum value
    if (element < min_value)
    min_value = element
                
    // find maximum value
    if (element > max_value)
    max_value = element

})

console.log(max_value)
// result => 5

console.log(min_value)
// result => 1