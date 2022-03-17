function twoNumberSum(array, targetSum) {
    // Sort array
	array.sort((a, b) => a - b);
    //left and right pointer
	let left = 0
	let right = array.length -1
	while(left < right){
		const currentSum = array[left] + array[right]
		if(currentSum === targetSum){
			return [array[left], array[right]]
		}else if(currentSum < targetSum ){
			left++;
		}else if (currentSum > targetSum) {
			right--;
		}
	}
	return [];
}