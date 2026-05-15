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
    diameterOfBinaryTree(root) {
        // our counter
        const diameter = [0];

        // get the depth using dfs
        this.dfs(root, diameter);

        return diameter[0];
    }

    dfs(root, diameter){
        if (root === null){
            return 0;
        }

        let leftTree = this.dfs(root.left, diameter);
        let rightTree = this.dfs(root.right, diameter);

        // diameter = left + right
        // we want the largest diameter
        // do Max, cause we dont want to over write the diameter with smaller values
        diameter[0] = Math.max(diameter[0], leftTree + rightTree);

        // return height to parent
        return 1 + Math.max(leftTree, rightTree);
    }
}
