// Problem 4 - Jump Game
// Solution 1
// Time: O(n)
// Space: O(1)
// let canJump = function (nums) {
//     const memo = new Map();
//     if (memo.has(nums.length - 1)) memo.set(nums.length - 1, true);

//     function canJumpFromIndex(index) {
//         if (memo.has(index)) return memo.get(index);
//         // if I can reach the last index from the index I am on
//         if (index >= nums.length - 1) return true;
//         if (nums[index] === 0) return false;

//         for (let i = nums[index]; i >= 1; i--) {
//             if (canJumpFromIndex(index + i)) {
//                 memo.set(index, true);
//                 return true;
//             }
//         }

//         memo.set(index, false);
//         return false;
//     }

//     return canJumpFromIndex(0);
// };

// Solution 2
// Time: O(n)
// Space: O(1)
let canJump = function (nums) {
    // left most valid index will be the final index in the array
    let lastValidIndex = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastValidIndex) lastValidIndex = i;
    }

    return lastValidIndex === 0;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 0, 0])); // true