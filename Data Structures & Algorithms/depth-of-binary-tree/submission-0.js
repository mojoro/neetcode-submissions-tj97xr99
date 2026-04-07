/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root, currDepth = 0) {
        if (!root) {
            return currDepth;
        }
        currDepth++;
        const leftDepth = this.maxDepth(root.left, currDepth)
        const rightDepth = this.maxDepth(root.right, currDepth)
        return leftDepth > rightDepth ? leftDepth : rightDepth;
    }

}
