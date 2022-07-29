// Number 1 - Sum Zero
let value = false;
function addToZero(array){
// console.log(value)
    for (let i = 0; i < array.length; i++){
        for (let z = 0; z < array.length; z++){
            if(i != z) {
                if (array[i] + array[z] === 0){
                    value = true;
                }
            }
        }
    }
    console.log(value);
}

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2])
// // -> True

// Number 2 - Unique Characters

function hasUniqueChars(word) {
    let checkChars = []
    for (let i = 0; i < word.length; i++) {
        if(checkChars.includes(word[i])){
            return false
        }else {
            checkChars.push(word[i])
        }
    }
    return true
}
    
// console.log(hasUniqueChars("Monday"))
// // -> True
// console.log(hasUniqueChars("Moonday"))
// // -> False


// Number 3 - Pangram

function isPangram(string){
    let strArr = string.toLowerCase();
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < letters.length; i++) {
      if(strArr.indexOf(letters[i]) < 0){
        return false;
      }
    }
    return true;
  }

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// // -> True

// console.log(isPangram("I like cats, but not mice"))
// // -> False


// Number 4 - Longest Word

function findLongestWord(strs) {
    let longest = '';
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > longest.length){
            longest = strs[i];
        }
    }
    return longest;
}

console.log(findLongestWord(["hi", "hello"]))
// -> 5