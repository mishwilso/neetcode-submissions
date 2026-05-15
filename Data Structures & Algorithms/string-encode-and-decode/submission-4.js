class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // loop throught he strings in strs

        // delim (#) + length + word

        let res = "";
        for (let str of strs){
            res += `${str.length}#${str}`;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        // while (i < str.length){

        //     let j = i;
        //     while (str[j] !== '#'){
        //         j++;
        //     }

        //     let len = parseInt(str.substring(i, j));
        //     i = j + 1;
        //     j = i + len;

        //     res.push(str.substring(i, j));
        //     i = j;
        // }

        let j = i;
        for (let i = 0; i < str.length; i++){
            if (str[i] === '#'){
                let len = parseInt(str.substring(j, i))
                let start = i + 1;
                i = start + len;

                res.push(str.substring(start, i))
                j = i;
            }
        }

        return res;
    }
}


