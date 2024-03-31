/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // check if any value appears at least twice in an array
    // return false if every element is disticint

    var set = new Set()
    let state = false;

    nums.forEach(x => {
       if (!set.has(x)) {
            set.add(x)
            return state;
       } else {
            state = true;
            return state;
       }
    })

    return state;

    

};

console.log(containsDuplicate([1,2,3,1]));