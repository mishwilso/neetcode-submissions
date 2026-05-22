class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # Need to explore from each rotten fruit
        # Need to know if there are any fresh fruit left
        # Branch from each rotten fruit - for every fruit we make rotten, decrement number of fresh fruit?
        # If fresh fruit is > 0, return -1 else return the number of steps taken?

        ROWS, COLS = len(grid), len(grid[0])
        rotten = set()
        q = deque()
        fresh = [0]
  
        # Initialization: Add all starting nodes to the queue and mark them as visited (distance 0).
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 2:
                    q.append([r, c])
                    rotten.add((r, c))
                if grid[r][c] == 1:
                    fresh[0] += 1
                    
        def rotFruit(r, c):
            if min(r, c) < 0 or  r == ROWS or c == COLS : return False 
            if grid[r][c] == 2 or grid[r][c] == 0: return False 
            if (r, c) in rotten: return False

            rotten.add((r, c))
            fresh[0] -= 1
            q.append([r, c])

            return True

        minutes = 0
        while q:
            rot = False
            for _ in range(len(q)):
                # Expansion: Pop nodes from the queue and evaluate their unvisited neighbors.
                r, c = q.popleft()
                
                # Tracking: Calculate the distance to each neighbor as \(distance = current\_node\_distance + 1\).
                grid[r][c] = 2 
                

                # Queueing: Push the newly visited neighbors into the queue.
                for dr, dc in [(1,0),(0,1),(-1,0),(0,-1)]:
                    if rotFruit(r + dr, c + dc):
                        rot = True
            
            if rot: minutes += 1

                                
        print(minutes)
        print(fresh)
        return minutes if fresh[0] == 0 else -1