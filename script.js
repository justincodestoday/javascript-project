// Problem 1 - Word Break
// Solution 1
// Time: O(2^n)
// Space: O(1)
// let wordBreak = function (s, wordDict) {
//     return verifyBreak(s, wordDict, 0, []);
// };

// // start or end is the index position
// function verifyBreak(word, dictionary, start, memo) {
//     // if the starting point is at the end of the word, it is thus true
//     if (start === word.length) return true;

//     // memo[start] memorises the step that has been computed before to avoid repetition
//     if (memo[start] !== undefined) return memo[start];

//     for (let end = start + 1; end <= word.length; end++) {
//         // slice out the word with substring(start, end) method
//         let wordGuess = word.substring(start, end); //leet

//         /*
//         check to see if the word, e.g. leet, is in the dictionary
//         if the word exists in the dictionary, return true
//         and invoke itself again (recursive) and pass in index end as the new index start
//         */
//         if (dictionary.includes(wordGuess) && verifyBreak(word, dictionary, end, memo)) {
//             return memo[start] = true;
//         }
//     }

//     return memo[start] = false;
// }

// Solution 2
// Time: O(n^2)
// Space: O(1)
let wordBreak = function (s, wordDict) {
    // dynamic programming
    if (wordDict == null || wordDict.length === 0) return false;

    const table = new Array(s.length + 1).fill(false);
    table[0] = true;

    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            const word = s.slice(start, end);
            if (table[start] === true && wordDict.includes(word)) {
                table[end] = true;
                break;
            }
        }
    }

    return table[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"])); //true
console.log(wordBreak("applepenapple", ["apple", "pen"])); //true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); //false