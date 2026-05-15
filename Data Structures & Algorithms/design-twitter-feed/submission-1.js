class Twitter {
    constructor() {
        this.time = 0;
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

        // arrays are mutable
        this.tweetMap.get(userId).push([tweetId, this.time]);
        this.time++;
        console.log("New Tweet: " + tweetId);
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

        const heapFeed = new MaxPriorityQueue((item) => item[0])

        for (const followeeId of this.followMap.get(userId)){
            // first round to add everyones latest tweets
            if (this.tweetMap.has(followeeId)){
                let tweets = this.tweetMap.get(followeeId);
                let idx = tweets.length - 1;
                let [tweet, time] = tweets[idx]
                heapFeed.enqueue([time, tweet, followeeId, idx - 1]);
            }
        }

        while (heapFeed.size() && feed.length < 10) {
            const [time, tweetId, followeeId, nextIdx] = heapFeed.dequeue();
            feed.push(tweetId);

            if (nextIdx >= 0) {
                let [olderTweet, olderTime] = this.tweetMap.get(followeeId)[nextIdx];
                heapFeed.enqueue([olderTime, olderTweet, followeeId, nextIdx - 1]);
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
        console.log(`User ${followerId} followed User ${followeeId}`);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)){
            this.followMap.get(followerId).delete(followeeId);
            console.log(`User ${followerId} unfollowed User ${followeeId}`);;
        }
        

    }
}
