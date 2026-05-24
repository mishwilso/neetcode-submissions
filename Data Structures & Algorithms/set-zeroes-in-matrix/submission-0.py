class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        ROWS, COLS = len(matrix), len(matrix[0])
        rowZero = False

        # Loop through index and mark cols and rows for zeroes 
        # If r is 0, mark rowZero as true, so we know to zero out that row based on the indicator

        for r in range(ROWS):
            for c in range(COLS):
                # Mark cols
                if matrix[r][c] == 0:
                    matrix[0][c] = 0
                    if r > 0:
                        matrix[r][0] = 0
                    else:
                        rowZero = True

        # Zero out inner cells based on indicators
        for r in range(1, ROWS):
            for c in range(1, COLS):
                if matrix[0][c] == 0 or matrix[r][0] == 0:
                    print(f"({r},{c})")
                    matrix[r][c] = 0

        # Zero out cols
        if matrix[0][0] == 0:
            for r in range(ROWS):
                matrix[r][0] = 0

        # zero out rowZero if needed
        if rowZero:
            for c in range(COLS):
                matrix[0][c] = 0
        
        