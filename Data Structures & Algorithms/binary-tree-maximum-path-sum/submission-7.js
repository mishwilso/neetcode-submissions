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
    maxPathSum(root) {
        let sum = [-Infinity];
        console.log(this.postorder(root, sum));

        return sum[0]
    }

    postorder(root, sum){
        if (!root){
            return 0;
        }

        console.log(`curr node ${root.val}`)

        // if contribution is less than 0, refuse it
        let left = Math.max(this.postorder(root.left, sum), 0);
        let right = Math.max(this.postorder(root.right, sum), 0);

        // if larger- it will increase our curr path sum (aka the local path)
        let currentPathSum  = root.val + left + right;

        // compare curr max, with local path
        sum[0] = Math.max(sum[0], currentPathSum);

        // return subtree contribution to parent
        return root.val + Math.max(left, right);
    }
}
