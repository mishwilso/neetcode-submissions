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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root){
            return;
        }

        // both on the left side
        if (p.val < root.val && q.val < root.val){
            return this.lowestCommonAncestor(root.left, p, q);
        }

        // both on the right side
        if (p.val > root.val && q.val > root.val){
            return this.lowestCommonAncestor(root.right, p, q);
        }


        // this is the LCA
        return root;
    }
}
