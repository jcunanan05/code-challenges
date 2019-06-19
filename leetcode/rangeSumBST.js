/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let result = 0;
  if (root === null) return 0;
  if (L <= root.val) result += root.val + rangeSumBST(root.left, L, R);
  if (R >= root.val) result += root.val + rangeSumBST(root.right, L, R);
  return result - root.val;
};

/**
 * 
 * more info: https://leetcode.com/problems/range-sum-of-bst/
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
 */
