class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        n = len(matrix)
        m = len(matrix[0])
        left, right = 0, m - 1
        top, bottom = 0, n - 1

        res = []
        while (left <= right and top <= bottom):
            # traverse top row
            for c in range(left, right + 1):
                res.append(matrix[top][c])
            top += 1

            # traverse right column
            for r in range(top, bottom + 1):
                res.append(matrix[r][right])
            right -= 1

            # travese the bottom row
            if top <= bottom:
                for c in range(right, left - 1, -1):
                    res.append(matrix[bottom][c])
                bottom -= 1

            if left <= right:
                for r in range(bottom, top - 1, -1):
                    res.append(matrix[r][left])
                left += 1

        return res