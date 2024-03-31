/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let valid = "abcdefghijklmnopqrstuvwxyz0123456789"
    let sanitized = ""
    s = s.toLowerCase();

    s.split("").forEach(char => {
            if (valid.split("").includes(char)) {
                sanitized = sanitized + char;
            }
    })


    if (sanitized.split("").reverse().join("") == sanitized) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));