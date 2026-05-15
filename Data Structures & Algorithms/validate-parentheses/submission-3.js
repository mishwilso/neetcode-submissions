class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length <= 1) return false;

        let closing = new Map([
            [')', '('],
            [']', '['],
            ['}', '{'],
        ]);

        let stack = [];

        for (const char of s){
            if (!closing.has(char)){
                stack.push(char);
            } else {
                if (stack.length === 0){
                    return false;
                }

                let opening = stack.pop();

                if (opening !== closing.get(char)){
                    return false;
                }
            }
        }

        return stack.length === 0;

    }
}
