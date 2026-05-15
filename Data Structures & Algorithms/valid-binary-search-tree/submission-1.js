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
        isValidBST(root) {
        return this.isValid(root)
    }

    // Base case root is null return true
    // Case 1 : root is not greater than left or root is not less than right: RETURN FALSE
    // Case 2 : it is fine! move on :)
    isValid(root, min = -Infinity, max = Infinity){
        if (!root){
            // Case root is null? nothing there so its valid
            return true;
        }

        if (root.val <= min || root.val >= max){
            return false;
        }

        return this.isValid(root.left, min, root.val) &&
        this.isValid(root.right, root.val, max);
    }

}
