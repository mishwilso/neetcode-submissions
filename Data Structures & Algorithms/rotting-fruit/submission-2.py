class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        # Thinking dfs grid traversal
        # Since we need to make sure we rot every banana, we need to first check how many bananas are there
        # With that we can also make a queue of rotten bananas to visit
        # Then deque each rotten banana. rot the adjacent bananas and add them to our queue and decrement our total bananas
        # Increment a minute for each banana in cue

        ROWS, COLS = len(grid), len(grid[0])
        q = collections.deque()
        fresh = 0

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 2:
                    q.append((r,c))
                if grid[r][c] == 1:
                    fresh += 1

        def rotFruit(r, c):
            nonlocal fresh

            if r >= ROWS or r < 0: return
            if c >= COLS or c < 0: return
            if grid[r][c] == 0 or grid[r][c] == 2: return 

            # Mark fruit a rotten
            grid[r][c] = 2

            q.append((r,c))
            fresh -= 1


            print("rot")

        minutes = 0
        while q and fresh > 0:
            # increment by each phase of bananas
            for _ in range(len(q)):
                r, c = q.popleft()

                for dr, dc in [(1,0), (0,1), (-1,0), (0,-1)]:
                    rotFruit(r + dr, c + dc)

            minutes += 1 

        return -1 if fresh else minutes           