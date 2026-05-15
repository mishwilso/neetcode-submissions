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
        if (!root) return false;
        console.log(`Root: ${root.val}, SubRoot: ${subRoot.val}`);

        if (this.isSameTree(root, subRoot)) return true;

        // if not sameTree with curr node / try the left or the right
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(p, q){
        if (!p && !q) return true;
        if (!p || !q) return false;

        // All must be true to be same: curr val, lefttree and righttree
        return p.val === q.val
        && this.isSameTree(p.left, q.left)
        && this.isSameTree(p.right, q.right);
    }
}
