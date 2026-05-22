class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Create graph edgelist (prereq)
        # We're trying to check if theres a cycle- if yes flag it!
        # Cycle detection can be done using dfs

        # have a list of in_progress courses that we're currently visiting
        # if we return to a course already in our in_progress return true
        # else, add course to our in_progress and explore its prereq
        # check if prereq has a cycle- if yes return true
        # after checking all prereqs- remove course from in_progress and return false!!

        preMap = [[] for _ in range(numCourses)]
        for crs, pre in prerequisites:
            preMap[crs].append(pre)

        in_progress = set()
        visited = set()

        def validSchedule(crs):
            if crs in in_progress: return False
            if crs in visited: return True

            in_progress.add(crs)
            
            for pre in preMap[crs]:
                if not validSchedule(pre):
                    return False

            in_progress.remove(crs)
            visited.add(crs)
            return True

        for crs in range(numCourses):
            if not validSchedule(crs):
                return False
        
        return True

         