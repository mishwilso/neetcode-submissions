class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let msg = '';
        
        for (let str of strs){
            msg += (str.length + '#' + str);
        }

        return msg;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let msgArr = [];
        let i = 0;


        // Use a two pointer approach to substring the message
        while (i < str.length){
            let j = i;

            while(str[j] !== '#'){
                j++;
            }

            let length = parseInt(str.substring(i, j));

            // From j + 1 to j + length, grab string and add to msgArr. 
            // substring
            i = j + 1;;
            j = i + length;

            msgArr.push(str.substring(i, j))

            // Move i to end of substring, j
            i = j;
        }

        // return responses.
        return msgArr;

    }
}
