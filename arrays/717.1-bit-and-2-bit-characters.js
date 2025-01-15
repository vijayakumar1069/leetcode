/*
 * @lc app=leetcode id=717 lang=javascript
 *
 * [717] 1-bit and 2-bit Characters
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    const n = bits.length;
    
    // Handle edge cases
    if (n === 1) return true;
    if (n === 2) return bits[0] === 0;
    
    let i = 0;
    
    // Process all characters except the last one
    while (i < n - 1) {
        // If current bit is 1, must be two-bit character
        if (bits[i] === 1) {
            // Skip next bit
            i += 2;
            
            // If we've moved past the array, last char isn't one-bit
            if (i > n - 1) return false;
        } 
        // If current bit is 0, must be one-bit character
        else {
            i++;
        }
    }
    
    // Check if we landed exactly at last position
    return i === n - 1;
};

// @lc code=end

