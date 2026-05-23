# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        
        def dfs(root):
            if not root: 
                return False

            if root.val == subRoot.val:
                if sameTree(root, subRoot):
                    return True

            return dfs(root.right) or dfs(root.left)


        def sameTree(p, q):
            if not p and not q:
                return True

            if not p or not q or p.val != q.val:
                return False

            return sameTree(p.right, q.right) and sameTree(p.left, q.left)

        return dfs(root)