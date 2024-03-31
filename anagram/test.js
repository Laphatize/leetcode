/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // annagrams are words formed by rearranging the letters of a diff word or phrase
  

   s = s.split("").sort().join("");
   t = t.split("").sort().join("");

   if (s == t) {
    return true;
   }

   return false;



    
};

console.log(isAnagram("rat", "car"));
console.log(isAnagram("anagram", "nagaram"));
