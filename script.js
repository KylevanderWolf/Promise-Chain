//Exercise 1 
const testNum = number => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(number + ' is greater than 10');
        } else {
            reject(number + ' is less than 10');
        }
    });
};

testNum(20)
    .then(result => console.log(result))
    .catch(error => console.log(error))

testNum(2)
    .then(result => console.log(result))
    .catch(error => console.log(error))



//Exercise 2
//Promise if every word in array is a string, then make it capital letters
//Else throw in an ERROR!
const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (
            words.every(word => typeof word === 'string')
        ) {
            resolve(
                // new promise function with capital words as parameter
                sortWords(words.map(word => word.toUpperCase()))
            );
        } else {
            reject('Strings Only');
        }
    });
};

//Promise to sort the capital words in alphabetical order
//Else throw in an ERROR!
const sortWords = (upperCaseWords) => {
    return new Promise((resolve, reject) => {
        if (upperCaseWords) {
            resolve(upperCaseWords.sort())
        }
        else {
            reject("Not a string")
        }
    })
}

//Array Lists
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

//Calling the promise
makeAllCaps(arrayOfWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))

//Calling the promise
makeAllCaps(complicatedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))


