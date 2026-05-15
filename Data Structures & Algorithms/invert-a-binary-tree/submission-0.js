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
     * @return {TreeNode}
     */
    invertTree(root) {
        // First Thought! BFS - swap the levels?
        // Idea is
        let queue = [];
        if (root != null){
            queue.push(root);
        }

        while(queue.length > 0){
            let queueLength = queue.length;
            for (let i = 0; i < queueLength; i++){

                // Grab current node
                let curr = queue.shift();

                // swap current nodes left and rights
                let tempRight = curr.right;
                curr.right = curr.left;
                curr.left = tempRight;

                // add left node;
                if (curr.left != null){
                    queue.push(curr.left);
                }

                // add right node;
                if (curr.right != null){
                    queue.push(curr.right);
                }
            }
        }

        return root;

    }
}
