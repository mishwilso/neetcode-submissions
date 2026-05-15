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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length === 0) return null;

        let rootVal = preorder.shift();
        let root = new TreeNode(rootVal, null, null);

        let splitIndex = inorder.findIndex(n => n === rootVal);

        let inorderLeft = inorder.slice(0, splitIndex);
        let inorderRight = inorder.slice(splitIndex + 1); // dont include split index

        let preorderLeft = preorder.slice(0, inorderLeft.length);
        let preorderRight = preorder.slice(inorderLeft.length);

        console.log(preorderLeft, preorderRight)

        root.left = this.buildTree(preorderLeft,inorderLeft);
        root.right = this.buildTree(preorderRight,inorderRight);
        
        return root;

    }
}
