class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        ROWS, COLS = len(grid), len(grid[0])
        visited = set()
        q = deque()
  
        # Initialization: Add all starting nodes to the queue and mark them as visited (distance 0).
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 0:
                    q.append([r, c])
                    visited.add((r, c))

        dist = 0
        
        while q:
            for _ in range(len(q)):
                # Expansion: Pop nodes from the queue and evaluate their unvisited neighbors.
                r, c = q.popleft()
                
                # Tracking: Calculate the distance to each neighbor as \(distance = current\_node\_distance + 1\).
                grid[r][c] = dist 

                # Queueing: Push the newly visited neighbors into the queue.
                for dr, dc in [(1,0),(0,1),(-1,0),(0,-1)]:
                    nr = r + dr
                    nc = c + dc

                    if nr < 0 or  nr == ROWS or nc < 0 or nc == COLS : continue 
                    if (nr, nc) in visited : continue 
                    if grid[nr][nc] == -1 : continue 

                    visited.add((nr,nc))
                    q.append([nr, nc])
                

            dist += 1
        
        

