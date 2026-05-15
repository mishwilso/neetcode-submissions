class Twitter {
    constructor() {
        this.count = 0
        this.followMap = new Map();
        this.tweetMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)){
            this.tweetMap.set(userId, []);
        }

        this.tweetMap.get(userId).push([this.count, tweetId]);
        this.count++;

    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const feed = [];

        if (!this.followMap.has(userId)){
            this.followMap.set(userId, new Set());
        }
        
        this.followMap.get(userId).add(userId);
        const feedHeap = new MaxPriorityQueue((item) => (item[0]));

        for (const followeeId of this.followMap.get(userId)) {
            if (this.tweetMap.has(followeeId)){
                const tweets = this.tweetMap.get(followeeId);
                const idx = tweets.length - 1;
                const [count, tweetId] = tweets[idx];

                feedHeap.enqueue([count, tweetId, followeeId, idx - 1]);
            }
        }

        while (feedHeap.size() && feed.length < 10){
            const [count, tweetId, followeeId, nextIdx] = feedHeap.dequeue();
            feed.push(tweetId);

            if (nextIdx >= 0) {
                const [olderCount, olderTweet] = this.tweetMap.get(followeeId)[nextIdx];
                feedHeap.enqueue([olderCount, olderTweet, followeeId, nextIdx - 1]);
            }
        }

        return feed;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)){
            this.followMap.set(followerId, new Set());
        }

        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
       if (this.followMap.has(followerId)){
            this.followMap.get(followerId).delete(followeeId);
        } 
    }
}
