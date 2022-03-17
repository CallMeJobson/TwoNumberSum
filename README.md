# Two number Sum

Write an function that takes in a non empty array of distant integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum the function should them in an array. If no match is found then an empty array is be returned

## Tips

Sort the array
Have a pointer at the beginning and end of the array  (left = -2 and right = 21) ([-2, -1, 1,3,6,9,21] target sum = 13) 
Slowly walk in the numbers inward.
use the equation Left + Right = target 
-2 + 21 = 19
Because the array is sorted we know that if we change shift the right pointer down one until its smaller than the target sum.


Time: n * log(n)
Space: O(1)
