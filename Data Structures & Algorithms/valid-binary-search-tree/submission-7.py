# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=, NoDefault0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def isValid(node, minLimit, maxLimit):
            if not node:
                return True

            if not minLimit < node.val < maxLimit:
                return False

            return isValid(node.left, minLimit, node.val) and isValid(node.right, node.val, maxLimit)

        return isValid(root, float("-inf"), float("inf"))