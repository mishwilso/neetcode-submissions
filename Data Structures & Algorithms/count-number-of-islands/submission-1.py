class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(grid, r, c):
            rows, cols = len(grid), len(grid[0])
            if r >= rows or r < 0: return
            if c >= cols or c < 0: return
            if grid[r][c] == "0": return

            # Mark cell 
            grid[r][c] = "0"
            
            for dr, dc in [(1,0), (0,1), (-1,0), (0,-1)]:
                dfs(grid, r + dr, c + dc)
                
            

        islands = 0
        for r in range(len(grid)):
            for c in range(len(grid[r])):
                if grid[r][c] == "1":
                    dfs(grid, r, c)
                    islands += 1

        return islands
