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
    goodNodes(root) {
        if (!root) return 0;

        let curr = root;
        let stack = [];
        let currentMax = root.val;
        let count = 0;

        while(curr || stack.length > 0){
            while (curr){
                console.log(`Node: ${curr.val}, Max: ${currentMax}`);
                
                if (curr.val >= currentMax) {
                    console.log("Increment");
                    count += 1
                }
                currentMax = Math.max(currentMax, curr.val);
                stack.push([curr, currentMax]);

                curr = curr.left;
            }
            [curr, currentMax] = stack.pop()
            curr = curr.right;
        }
        return count;
    }
}
