class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let keyArr = this.keyStore.get(key) || [];
        let l = 0;
        let r = keyArr.length - 1;
        let res = "";

        
        while (l <= r){
            let mid = Math.floor((l + r) / 2);

            if (keyArr[mid][1] <= timestamp){
                res = keyArr[mid][0]
                l++;
            } else {
                r--;
            }
        }

        return res;
    }
}
