/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let start = ["(", "{", "["];
    let end = [")", "}", "]"];

    let detectedStarters = [];
    let detectedEnders = [];

    s.split("").forEach(char => {
        if (start.includes(char)) {
            detectedStarters.push(char);
        }

        if (end.includes(char)) {
            detectedEnders.push(char)
        }

    })

}; 


console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("()[]{}"));
