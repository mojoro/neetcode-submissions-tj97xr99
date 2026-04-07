class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    // Map signature → list of anagrams
    const map = new Map();

    for (const str of strs) {
      // Build a frequency array of 26 letters (assuming lowercase English)
      const counts = new Array(26).fill(0);
      for (const char of str) {
        counts[char.charCodeAt(0) - 97]++;
      }

      // Convert the counts to a string key (e.g. "1#0#0#...") for Map
      const key = counts.join('#');

      // Add to the group
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }

    return Array.from(map.values());
  }
}