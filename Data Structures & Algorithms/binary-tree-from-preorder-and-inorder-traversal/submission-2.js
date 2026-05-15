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

        const inorderMap = new Map();
        for (let i = 0; i < inorder.length; i++){
            inorderMap.set(inorder[i], i);
        }

        let preorderIndex = 0;

        function build(inorderStart, inorderEnd){
            if (inorderStart > inorderEnd) return null;

            // take next elem from preorder to be root
            const rootVal = preorder[preorderIndex++];
            const root = new TreeNode(rootVal);

            // Find root position in inorder to determine subtree sizes
            const inorderRootIndex = inorderMap.get(rootVal)

            root.left = build(inorderStart, inorderRootIndex - 1);
            root.right = build(inorderRootIndex + 1, inorderEnd);

            return root;
        }

        return build(0, inorder.length - 1);
 

    }
}
