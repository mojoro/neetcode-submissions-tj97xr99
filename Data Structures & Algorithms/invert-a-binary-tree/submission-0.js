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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root)
            return null;
        let t = root.right; 
        root.right = root.left;
        root.left = t
        this.invertTree(root.left);
        this.invertTree(root.right);
        return root;
    }

}
