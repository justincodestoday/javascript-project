### Problem 1 - Word Break
Given a string *s* and a dictionary of strings *wordDict*, return *true* if *s* can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.


##### Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]  
Output: true  
Explanation: Return true because "leetcode" can be segmented as "leet code".  

##### Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]  
Output: true  
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".  
Note that you are allowed to reuse a dictionary word.  

##### Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]  
Output: false  


##### Constraints:
- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s and wordDict[i] consist of only lowercase English letters.
- All the strings of wordDict are **unique**.





### Problem 2 - Group Anagrams
Given an array of strings *strs*, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

##### Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]  
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]  

##### Example 2:
Input: strs = [""]  
Output: [[""]]  

##### Example 3:
Input: strs = ["a"]  
Output: [["a"]]  


##### Constraints:
- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.





### Problem 3 - Remove Nth Node From End of List
Given the *head* of a linked list, remove the *nth* node from the end of the list and return its head.

##### Example 1:
![Example Picture](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)  
Input: head = [1,2,3,4,5], n = 2  
Output: [1,2,3,5]  

##### Example 2:
Input: head = [1], n = 1  
Output: []  

##### Example 3:
Input: head = [1,2], n = 1  
Output: [1]  
 

##### Constraints:
- The number of nodes in the list is sz.
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz
 

**Follow up**: Could you do this in one pass?





### Problem 4 - Jump Game
You are given an integer array *nums*. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return *true* if you can reach the last index, or *false* otherwise.

##### Example 1:
Input: nums = [2,3,1,1,4]  
Output: true  
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.  

##### Example 2:
Input: nums = [3,2,1,0,4]  
Output: false  
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.  
 

##### Constraints:
- 1 <= nums.length <= 104
- 0 <= nums[i] <= 105