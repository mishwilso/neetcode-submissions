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
    maxDepth(root) {
        if (root === null){
            return 0
        }

        // Recursively computer left Depth which maxDepth(root.left)
        // same for rightDepth
        // to keep incrementing we return the depth of the child counting up
        // plus 1
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }
}
