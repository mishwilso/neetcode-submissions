class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = new Map([
            [')', '('],
            [']', '['],
            ['}', '{'],
        ]);

        let stack = [];

        for (const char of s){
            if (!map.has(char)){
                stack.push(char);
            } else {
                if (stack.length === 0){
                    return false;
$0
                }

                let match = stack.pop();

                if (match !== map.get(char)){
                    return false;
                }
            }
        }

        return stack.length === 0;

    }
}
