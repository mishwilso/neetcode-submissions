class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int length = nums.size();
        int l = 0;
        int r = 0;

        while (r < length){
            nums[l] = nums [r];
            while (r < length && nums[l] == nums[r]){
                r++;
            }
            l++;
        }
        return l;
    }
};