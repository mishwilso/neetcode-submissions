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
    // Diameter of a binary tree is the longest path between two nodes.
    // (left subtree height) + (right subtree height)
    diameterOfBinaryTree(root) {
        const res = [0];
        this.dfs(root, res);
        return res[0];
    }

    dfs(root, res){
        if (root === null){
            return 0;
        }

        // get left height
        const left = this.dfs(root.left, res);

        // get right height
        const right = this.dfs(root.right, res);

        // record the diameter - get max
        res[0] = Math.max(res[0], left + right);

        // return the height to parent 
        return 1 + Math.max(left, right);
    }
}
