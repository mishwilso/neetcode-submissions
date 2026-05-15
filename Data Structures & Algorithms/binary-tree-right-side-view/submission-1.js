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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root){
            return []
        }

        const queue = [root];
        const result = [];

        while (queue.length > 0){
            const levelLength = queue.length;
            for (let i = 0; i < levelLength; i++){
                const curr = queue.shift()

                if (i === levelLength - 1){
                    result.push(curr.val);
                }

                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);

            }
        }
        console.log(result);
        return result;
    }
}
