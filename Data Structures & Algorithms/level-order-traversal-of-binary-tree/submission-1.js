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
        if (!root) return [];

        let queue = [root];
        let res = []

        while (queue.length){
            let level = [];
            let levelLength = queue.length;
            for (let i = 0; i < levelLength; i++){
                let node = queue.shift()
                level.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            res.push(level);
        }

        return res;
    }
}
