class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map ([
            [')', '('],
            ['}', '{'],
            [']', '['],
        ]);

        let stack = [];

        for (let char of s){
            // Add all open parenthesis to the stack
            if (!map.has(char)){
                stack.push(char);
            } else {
            // else its a closing parenthesis
                // If stack is empty - invalid pattern
                if (stack.length === 0){
                    return false;
                }

                // If the closing parenthesis doesn't pair with the open
                // return false
                if ( stack[stack.length - 1] !== map.get(char)){
                    return false;
                } else {
                // Else pop the match from the stack
                    stack.pop();
                }
            }

            // return true if all pairs are made
        }
        return stack.length === 0;
    }
}
