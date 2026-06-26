# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = 0

        def dfs(node):
            nonlocal res

            if not node:
                return 0

            right = 0
            left = 0

            if node.right:
                right = dfs(node.right)

            if node.left:
                left = dfs(node.left)

            res = max(res, right + left)
            return 1 + max(right, left)

        dfs(root)
        return res