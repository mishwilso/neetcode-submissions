class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        # Transpose along main diag:
        # For loop, for the unique pairs of index
        for i in range(len(matrix)):
            for j in range(i, len(matrix)):
                print(f"({i},{j})")
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

        # Rotate Row
        for i in range(len(matrix)):
            matrix[i].reverse()