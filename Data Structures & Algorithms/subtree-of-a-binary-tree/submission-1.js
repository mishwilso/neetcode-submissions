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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // reach end of main tree and no matches
        if (!root) return false;

        // Check if same true
        if (this.isSameTree(root, subRoot)) return true;

        // check left and right tree instead
        return this.isSubtree(root.right, subRoot) || this.isSubtree(root.left, subRoot);
    }

    isSameTree(p, q){
        if (!p && !q) return true;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
