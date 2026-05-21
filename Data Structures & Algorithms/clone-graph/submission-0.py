"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        oldToNew = {}

        def dfs(node, oldToNew):
            if node in oldToNew:
                return oldToNew[node]

            copy = Node(node.val)
            oldToNew[node] = copy

            for neighbors in node.neighbors:
                copy.neighbors.append(dfs(neighbors, oldToNew))
            return copy

        return dfs(node, oldToNew) if node else None

    # BreatjFirstSearch
    # def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
    #     if not node:
    #         return None
        
    #     oldToNew = {}
    #     oldToNew[node] = Node(node.val)
    #     q = deque([node])

    #     while q:
    #         curr = q.popleft()
    #         for nei in curr.neighbors:
    #             if nei not in oldToNew:
    #                 copy = Node(nei.val)
    #                 oldToNew[nei] = copy
    #                 q.append(nei)
    #             oldToNew[node].neighbors.append(oldToNew[nei])
        
    #     return oldToNew[node]
                

