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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let tmp = [k, 0];
        this.inorder(root, tmp);
        return tmp[1];
    }

    inorder(root, tmp){   
        if (!root){
            return
        }
        this.inorder(root.left, tmp);
        tmp[0]--;
        console.log(root.val, tmp[0]);
        if (tmp[0] === 0){
            tmp[1] = root.val;
            return;
        }
        this.inorder(root.right, tmp);
    }
}
