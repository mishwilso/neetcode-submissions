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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = []
        this.dfsSerialize(root, result);
        return result.join(',');
    }

    dfsSerialize(root, result) {
        if (!root){
            result.push('#');
            return;
        }

        result.push(root.val.toString());
        this.dfsSerialize(root.left, result);
        this.dfsSerialize(root.right, result);
    }

        /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let vals = data.split(',')
        const i = { val: 0 };
        return this.dfsDeserialize(vals, i);
    }

    dfsDeserialize(vals, i){
        if (vals[i.val] === '#'){
            i.val++;
            return null;
        }

        const node = new TreeNode(parseInt(vals[i.val]));
        i.val++

        node.left = this.dfsDeserialize(vals, i);
        node.right = this.dfsDeserialize(vals, i);

        return node;
    }
}
