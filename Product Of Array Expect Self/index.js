var productExceptSelf = function(nums) {
    let zero = 0;
    let product = 1;
    nums.map((num) => {
       if (num === 0) {
           zero += 1;
       } else {
           product *= num;
       }
    });
    if (zero === 0) {
        return nums.map((num) => product / num);
    } else if (zero === 1) {
        return nums.map((num) => num === 0 ? product : 0);
    }
    return nums.map(() => 0);
};