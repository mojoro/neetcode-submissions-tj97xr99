class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  if (strs.length <= 1) return [strs];
  const anagrams = [];
  const maps = [];
  for (const str of strs) {
    const map = {};
    for (const char of str) {
      map[char] = (map[char] || 0) + 1;
    }
    maps.push({ str, map });
  }

  const comparisonQueue = maps;
  const anagramSubgroup = [];
  let i = comparisonQueue.length - 1;
  let j = i - 1;
  while (comparisonQueue.length > 0) {
    // reset j and clear subgroup if it reaches the beginning of the array
    if (j == -1) {
      if (
        anagramSubgroup.filter((x) => x === comparisonQueue[i].str).length <=
        strs.filter((x) => x === comparisonQueue[i].str).length
      ) {
        anagramSubgroup.push(comparisonQueue[i].str);
      }
      comparisonQueue.pop();
      i = comparisonQueue.length - 1;
      j = i - 1;
      anagrams.push([...anagramSubgroup]);
      anagramSubgroup.length = 0;
      continue;
    }
    if (i == 0) {
      anagramSubgroup.push(comparisonQueue[i].str);
      comparisonQueue.pop();
    }
    // skip comparison if string lengths don't match
    if (comparisonQueue[i].str.length != comparisonQueue[j].str.length) {
      j--;
      continue;
    }
    // add string to subgroup if anagram matches
    else if (isAnagram(comparisonQueue[i].map, comparisonQueue[j].map)) {
      anagramSubgroup.push(comparisonQueue[j].str);
      comparisonQueue.splice(j, 1);
      i = comparisonQueue.length - 1;
    }
    j--;
  }
  console.log(JSON.stringify(anagrams));

  return anagrams;
}
}

function isAnagram(sMap, tMap) {
    for (const key in sMap) {
        if (sMap[key] != tMap[key]) return false;
    }

    return true;
}