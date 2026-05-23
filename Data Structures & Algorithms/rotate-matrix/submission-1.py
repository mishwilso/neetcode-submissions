class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        # Transpose along main diag:
        # For loop, for the unique pairs of index
        for i in range(len(matrix)):
            for j in range(i, len(matrix)):
                print(f"({i},{j})")
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        
        print(matrix)
        
        # Revese Rows
        # for i in range(len(matrix)):
        #     matrix[i].reverse()

        # Flip Along the middle axis
        for i in range(len(matrix)):
            for j in range(len(matrix) // 2):
                # equation for opposite col = (# of cols - 1) - current column index
                matrix[i][j], matrix[i][len(matrix) - 1 - j] = matrix[i][len(matrix) - 1 - j], matrix[i][j]