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
        const isBalanced = [true];
        this.dfs(root, isBalanced);

        return isBalanced[0];
    }

    dfs(root, isBalanced) {
        if (root === null){
            return 0;
        }

        let left = this.dfs(root.left, isBalanced);
        let right = this.dfs(root.right, isBalanced);

        if (Math.abs(left - right) > 1){
            isBalanced[0] = false
        }
        console.log(`At node ${root.val}, height of left is ${left} and right ${right}`);

        // return the tallest value
        return 1 + Math.max(left, right);
    }

    // Thought? inorder traversal, check if mid is root?
}
