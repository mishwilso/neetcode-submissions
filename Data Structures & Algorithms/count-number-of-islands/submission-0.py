class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # DFS all nodes belonging to an island
        # Mark visited nodes as 0
        # count each time we encounter an island

        def dfs(grid, r, c):
            # Cases: r,c are within bounds, node is not 0
            rows, cols = len(grid), len(grid[0])
            if r < 0 or r >= rows: return
            if c < 0 or c >= cols: return
            if grid[r][c] == "0": return

            # Mark Node
            grid[r][c] = "0"

            # Explore directions
            for dr, dc in [(1,0), (0,1), (-1, 0), (0, -1)]:
                dfs(grid, r + dr, c + dc)

        count = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == "1":
                    count += 1
                    dfs(grid, r, c)
                    
        return count