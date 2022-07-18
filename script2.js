// Problem 2
// Solution 1
// Time: O(n * n log n)
// Space: O(n)
// let groupAnagrams = function (strs) {
//     if (strs.length === 0) return [];
//     if (strs.length === 1) return [strs];
//     // create a hash
//     /* sort each string, use that as key in map and when new sorted string matches a key we add it to that */
//     let hash = {};

//     // loop through the values of strs array
//     for (let str of strs) {
//         // convert the values and place them under a new variable
//         // e.g. 'eat' turns into 'e','a','t', then sorted into 'a','e','t' and then joined into 'aet
//         // we do this so the sorted anagram key will always be the same. Other related anagrams will have the same key
//         const anagramGroup = str.split("").sort().join("");

//         // if we have a mapping/hash that exists for the anagram group, push the item/value to that group, 
//         // else create a new array and append the str
//         hash[anagramGroup] ? hash[anagramGroup].push(str) : hash[anagramGroup] = [str];
//     }

//     // returns all the hash as a unified array.
//     return Object.values(hash);
// };

// Solution 2
// Time: O(n * n log n)
// Space: O(n)
let groupAnagrams = function (strs) {
    let hash = new Map();

    for (let str of strs) {
        let anagramGroup = str.split('').sort().join('');

        // has(key) method returns true if a key exists in a Map
        // get(key) method gets the value of a key in a Map
        // set(key, value) method can add Map values or change existing Map values
        if (hash.has(anagramGroup)) hash.get(anagramGroup).push(str);
        else hash.set(anagramGroup, [str]);
    }
    return [...hash.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); //[[""]]
console.log(groupAnagrams(["a"])); //[["a"]]