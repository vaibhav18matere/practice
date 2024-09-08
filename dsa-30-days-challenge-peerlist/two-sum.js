// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

//Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2, 7, 11, 15];
const target = 9;

// var twoSum = function (nums, target) {
//      const map = new Map()

//      for (const i in nums) {
//           const requireNum = target - nums[i]
//           if (map.has(requireNum)) return [i, map.get(requireNum)]
//           map.set(nums[i], i)
//      }
// };


function twoSum() {
     const track = {};

     for (let i = 0; i < nums.length; i++) {
          const reqNum = target - nums[i];

          if (track[reqNum] !== undefined) {
               return [track[reqNum, i]]
          }

          track[nums[i]] == i;
     }
     return []
}