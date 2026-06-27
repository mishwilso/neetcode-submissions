# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root and not subRoot:
            return True

    
        def isSameTree(p, q):
            if not p and not q:
                return True

            if not p or not q:
                return False

            if p.val != q.val:
                return False

            return isSameTree(p.right, q.right) and isSameTree(p.left, q.left)

        def dfs(root, subRoot):
            if not root:
                return False

            if root.val == subRoot.val and isSameTree(root, subRoot):
                return True

            return dfs(root.right, subRoot) or dfs(root.left, subRoot)

        return dfs(root, subRoot)