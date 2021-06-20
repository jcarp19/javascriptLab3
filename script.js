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
addSubmission(submissions, "Jim", 45, '2021-06-18');

/* Declare a function named deleteSubmissionByIndex
    - Parameter(s): array, index
    - Functionality: remove the object from the array at the specified index using the splice method. */

function deleteSubmissionByIndex(array, index) {
    array.splice([index],1);
};
deleteSubmissionByIndex(submissions, 1); // Remove Joe

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
deleteSubmissionByName(submissions, "Jane"); // Remove Jane

/* Declare a function named editSubmission
    - Parameter(s): array, index, score
    - Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise. */
function editSubmission(array, index, score) {
    array[index].score = score;
    if (array[index].score >= 60) {
        array[index].passed = true;
    } else {
        array[index].passed = false;
    };
};
editSubmission(submissions,0, 91); // update Jacks score

/* Declare a function named findSubmissionByName
    - Parameter(s): array, name
    - Functionality: return the object in the array that has the provided name. Use the find method */

function findSubmissionByName(array, name) {
    return array.find(student => student.name = name);   
};
console.log(findSubmissionByName(submissions, "Jack"));

/* Declare a function named findLowestScore
    - Parameter(s): array
    - Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array. */
function findLowestScore(array) {
    
    let min_value = 100;

    array.forEach(element => {
        var x = element.score;
        if (x < min_value)
        min_value = x;
    });
    console.log(min_value);
};
console.log(findLowestScore(submissions));


/* Declare a function named findAverageScore
    - Parameter(s): array
    - Functionality: return the average quiz score.  Use a for...of loop. */
function findAverageScore(array) {
    var count = 0, sumScore = 0;
    for (var key in array) {
        if (array.hasOwnProperty(key)) {
            if (array[key].hasOwnProperty("score")) {
            sumScore += array[key].score;
            count += 1;
            }
        }
    }

    console.log(sumScore/count); 
};
findAverageScore(submissions);



/* Declare a function named filterPassing
    - Parameter(s): array
    - Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores. */
function filterPassing(array) {
    let newArray = array.filter(function(student){
        return student.passed = true;
    }); 
    console.log(newArray)
};
filterPassing(submissions);

/* Declare a function named filter90AndAbove
    - Parameter(s): array
    -Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90. */
function filter90AndAbove(array) {
    let newArray = array.filter(function(student){
        return student.score >= 90;
    });
    console.log(newArray);
};
filter90AndAbove(submissions);


