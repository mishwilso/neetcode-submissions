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
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) return true;

        // Base case balance
        let left = this.height(root.left) + 1;
        let right = this.height(root.right) + 1;

        if (Math.abs(left - right) > 1) return false;

        // recursively check for all the other nodes
        return this.isBalanced(root.left) && this.isBalanced(root.right);

    }

    height(root){
        if (root === null){
            return 0;
        }

        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
}
