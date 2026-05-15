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
        
        return this.dfs(root, root.val);

        l
    }

    dfs(root, maxSoFar){
        if (!root) {
            return 0;
        }

        let isGood = root.val >= maxSoFar ? 1 : 0;
        let newMax = Math.max(maxSoFar, root.val);


        return isGood + this.dfs(root.left, newMax) + this.dfs(root.right, newMax);
    }

    // Cases
    // Root is null - return 0

    // if good add 1 else 0
    // max = max(maxSoFar, node, val)

    // return 1 + leftTree + RightTree
    
}
