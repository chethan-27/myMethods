function getSecondLargest(nums) {
    let x = -1;
    nums.sort(function (a,b) {return b-a})
    for(let i=0; i<nums.length; i++){
        if (nums[i] ^ nums[i+1]){
            console.log(nums[i],nums[i+1])
            x = nums[i+1]
            break
        }
    }
    return x
}
const arr = [2, 3, 6, 6, 5]
console.log(getSecondLargest(arr))