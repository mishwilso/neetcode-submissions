class Twitter {
    constructor() {
        this.count = 0;
        this.followMap = new Map();
        this.tweetMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap.get(userId)){
            this.tweetMap.set(userId, []);
        }
        this.tweetMap.get(userId).push([this.count, tweetId]);
        this.count++;
        console.log("New Tweet: ", this.tweetMap);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const feed = [];

        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set());
        }

        this.followMap.get(userId).add(userId);
        const heapFeed = new MaxPriorityQueue((tweet) => tweet[0]);

        for (const followeeId of this.followMap.get(userId)){
            console.log("Follows Test:", followeeId);
            if (this.tweetMap.has(followeeId)){
                const tweets = this.tweetMap.get(followeeId);
                const idx = tweets.length - 1; // get their latest tweet
                const [count, tweet] = tweets[idx]; 
                // tweetCount, tweet, id, nextIdx
                heapFeed.enqueue([count, tweet, followeeId, idx - 1]); 
            }
        }

        while (heapFeed.size() && feed.length < 10){
            const [count, tweetId, followeeId, nextIdx] = heapFeed.dequeue();
            feed.push(tweetId);

            // check if followee has a next tweet to add
            if (nextIdx >= 0){
                const [olderCount, olderTweet] = this.tweetMap.get(followeeId)[nextIdx];
                heapFeed.enqueue([olderCount, olderTweet, followeeId, nextIdx - 1]);
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
        console.log("Follow: ", this.followMap);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.get(followerId)){
            this.followMap.get(followerId).delete(followeeId);
        }
        console.log("Unfollow: ", this.followMap);
    }
}
