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
    goodNodes(root) {        
        function dfs(node, maxSoFar){
            if (!node) return 0;

            let count = 0

            // curr node is good, cause its >= maxSoFar
            if (node.val >= maxSoFar){
                count = 1;
            }

            let newMax = Math.max(maxSoFar, node.val);

            // add good nodes from the left and right side
            count += dfs(node.left, newMax);
            count += dfs(node.right, newMax);

            return count;
        }

        return dfs(root, root.val);
    }
}
