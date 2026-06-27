# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def dfs(node):
            # If we reach end? return true
            if not node:
                return [True, 0]

            # Get depth of left and right
            right = dfs(node.right)
            left = dfs(node.left)

            # Check depth of left and right are isBalanced
            balanced = right[0] and left[0] and abs(right[1] - left[1]) <= 1

            # return balanced and max height
            return [balanced, 1 + max(right[1], left[1])]
            
        return dfs(root)[0]