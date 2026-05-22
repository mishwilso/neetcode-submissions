class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) > (n - 1):
            return False
        
        # A valid tree has no cycle, no abandoned nodes
        graph = [[] for _ in range(n)]
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()

        def hasCycle(node, parent):
            if node in visited: 
                return True

            visited.add(node)

            for nei in graph[node]:
                if nei == parent:
                    continue

                if hasCycle(nei, node):
                    return True

            return False

        return not hasCycle(0, -1) and n == len(visited)