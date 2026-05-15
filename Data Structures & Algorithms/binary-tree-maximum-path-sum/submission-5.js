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
        let sum = [root.val];
        console.log(this.postorder(root, sum));

        return sum[0]
    }

    postorder(root, sum){
        if (!root){
            return 0;
        }

        console.log(`curr node ${root.val}`)

        let left = this.postorder(root.left, sum)
        let right = this.postorder(root.right, sum)

        let contribution = root.val + Math.max(left, right);
        let local = root.val + left + right;

        console.log(`Self: ${root.val}  Gift: ${contribution}  Local: ${local}`);
        sum[0] = Math.max(sum[0], local, root.val, contribution);

        return Math.max(root.val, contribution);
    }
}
