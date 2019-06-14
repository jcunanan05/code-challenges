/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let isPairFound = false;
  let result = [];
  for (let i = 0; i < nums.length && !isPairFound; i++) {
    let potentialPair = target - nums[i];
    let hasPair =
      nums.includes(potentialPair) && nums.lastIndexOf(potentialPair) !== i;
    if (hasPair) {
      result = [i, nums.lastIndexOf(potentialPair)];
      isPairFound = true;
      break;
    }
  }
  return result;
};

/**
 * 
 * full description https://leetcode.com/problems/two-sum/
 * Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
 */
