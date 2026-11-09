
function findLargest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return numbers.reduce((largest, currentNumber) => {
        return currentNumber > largest ? currentNumber : largest;
    });
}

const numbers = [12, 45, 7, 89, 23, 56];

const largestNumber = findLargest(numbers);

console.log("Numbers:", numbers);
console.log("Largest number:", largestNumber);
