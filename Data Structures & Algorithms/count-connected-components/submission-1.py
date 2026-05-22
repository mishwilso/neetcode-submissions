class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:        
        # A valid tree has no cycle, no abandoned nodes
        graph = [[] for _ in range(n)]
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()

        def dfs(node, parent):
            if node in visited: 
                return 

            visited.add(node)

            for nei in graph[node]:
                if nei == parent:
                    continue

                if dfs(nei, node):
                    return 

        count = 0
        for i in range(n):
            if i not in visited:
                dfs(i, -1)
                count += 1
            

        return count