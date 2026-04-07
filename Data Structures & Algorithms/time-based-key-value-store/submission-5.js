class TimeMap {
    constructor() {
        this.keyStore = new Map();
        this.timestamps = [];
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.get(timestamp)) this.keyStore.get(timestamp)[key] = value;
        else{
            const entry = {};
            entry[key] = value;
            this.keyStore.set(timestamp, entry);
            this.timestamps.push(timestamp);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (this.keyStore.get(timestamp) && this.keyStore.get(timestamp)[key]) return this.keyStore.get(timestamp)[key];
        else {
            let left = 0, right = this.timestamps.length - 1;
            let mostRecentTimestamp = 0;
            while (left <= right) {
                const mid = Math.floor((left+right) / 2);
                const entry = this.keyStore.get(this.timestamps[mid]);
                if (this.timestamps[mid] > timestamp) {
                    right = mid - 1;
                } else if (this.timestamps[mid] < timestamp) {
                    if (this.keyStore.get(this.timestamps[left])[key]) mostRecentTimestamp = Math.max(this.timestamps[left], mostRecentTimestamp)
                    if (entry[key]) mostRecentTimestamp = Math.max(this.timestamps[mid], mostRecentTimestamp)
                    if (this.timestamps[right] < timestamp && this.keyStore.get(this.timestamps[right])[key]) mostRecentTimestamp = Math.max(this.timestamps[right], mostRecentTimestamp)
                    left = mid + 1;
                } 
            }
            if (!mostRecentTimestamp) return ""
            else return this.keyStore.get(mostRecentTimestamp)[key];
        }
    }
}
