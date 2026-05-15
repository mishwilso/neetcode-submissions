class Solution {
public:
    bool isValid(string s) {
        stack<char> stack;
        std::unordered_map <char, char> bracketPairs  =
        {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };

        for (char c: s){
            if (bracketPairs.count(c)){
                if (!stack.empty() && stack.top() == bracketPairs[c]){
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.empty();
    }
};
