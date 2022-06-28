var longestConsecutive = function(nums) {
    nums = Array.from(new Set(nums.sort((a, b) => a - b)));
    let max = 0;
    let temp = 0;
    nums.map((num, i) => {
        if (i === 0 || temp === 0) {
            temp = 1;
        } else if (num === nums[i - 1] + 1) {
            temp += 1;
        } else {
            max = Math.max(temp, max);
            temp = 1;
        }
    });
    max = Math.max(temp, max);
    return max;
};