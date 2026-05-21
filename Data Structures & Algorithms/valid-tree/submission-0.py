class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        # If there are more edges that nodes- cycle
        if len(edges) > (n - 1):
            return False

        #  tracked visited nodes
        visited = set()
        
        # construct our graph (graph is a tree that allows cycles and no root)
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
    
        # recursive way to detect cyles
        def dfs(node, parent):
            # if node is already visited- looped
            if node in visited:
                return False
            
            # add node to visit
            visited.add(node)
            
            # recursively check neighbours
            for nei in adj[node]:
                # undirected edges so neighbour could be parent
                if nei == parent:
                    continue
                
                # if returned a false- return false (else is true, so check other neighbours)
                if not dfs(nei, node):
                    return False

            # all is good 
            return True
        
        # dfs at node 0, no parent so just say -1. also visited should match n. cause valid tree needs all nodes to have edges if node > 1
        return dfs(0, -1) and len(visited) == n
            

