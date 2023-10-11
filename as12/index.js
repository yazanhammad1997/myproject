function isPalindrome(str) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanStr = str.replace(/[^a-z]/g, '').toLowerCase();

    // Compare the reversed string with the original
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Examples
console.log(isPalindrome("madam"));  // Output: true
console.log(isPalindrome("robot"));  