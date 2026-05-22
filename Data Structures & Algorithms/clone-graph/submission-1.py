"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        # dfs to explore all nodes
        # make a dict of all new nodes to grab them when needed
        # for each new node encountered - create a new node, add it to our dict
        # explore its neighbors, check if neighbor has been made- if not, create a node and then add it as neighbor to the new node
        if node is None:
            return None

        oldToNew = {}
        

        def dfs(node):
            if node in oldToNew: return oldToNew[node]
            
            oldToNew[node] = Node(node.val)

            for neighbor in node.neighbors:
                oldToNew[node].neighbors.append(dfs(neighbor))
            
            return oldToNew[node]

        return dfs(node)
