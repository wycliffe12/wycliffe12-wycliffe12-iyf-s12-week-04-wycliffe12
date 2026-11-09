
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

const originalNumbers = [1, 2, 3, 2, 4, 3, 5, 1];

const uniqueNumbers = removeDuplicates(originalNumbers);

console.log("Original array:", originalNumbers);
console.log("Without duplicates:", uniqueNumbers);
