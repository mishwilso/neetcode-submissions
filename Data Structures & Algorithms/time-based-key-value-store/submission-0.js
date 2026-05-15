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
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([timestamp, value]);
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
        let val = "";

        while(l <= r){
            let mid = Math.floor((r + l) / 2);

            if (keyArr[mid][0] <= timestamp){
                val = keyArr[mid][1];
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return val;


    }
}
