
function reverseString(text) {
    return text.split("").reverse().join("");
}

const originalText = "JavaScript";

const reversedText = reverseString(originalText);

console.log("Original:", originalText);
console.log("Reversed:", reversedText);
