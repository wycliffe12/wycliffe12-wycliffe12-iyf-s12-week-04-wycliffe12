
function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reversedText = cleanedText.split("").reverse().join("");

    return cleanedText === reversedText;
}

console.log("Madam:", isPalindrome("Madam"));

console.log("Level:", isPalindrome("Level"));

console.log("Hello:", isPalindrome("Hello"));

console.log("Racecar:", isPalindrome("Racecar"));
