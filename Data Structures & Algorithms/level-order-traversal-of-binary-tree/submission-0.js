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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root){
            return [];
        }

        const queue = [root]
        const results = []

        while (queue.length > 0){
            const levelLength = queue.length;
            const currLevel = []
            for (let i = 0; i < levelLength; i++){
                const curr = queue.shift();

                currLevel.push(curr.val);

                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);

            }
            results.push([...currLevel]);
        }

        return results;

    }
}
