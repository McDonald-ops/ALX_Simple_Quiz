function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return number1 / number2;
}
// event litener for the add button
document.getElementById("add").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0; // Default to 0 if number1 is empty
    const number2 = parseFloat(document.getElementById("number2").value) || 0; // Default to 0 if number2 is empty
    const result = add(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});
// event listener for the subtract button
document.getElementById("subtract").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0; // Default to 0 if number1 is empty
    const number2 = parseFloat(document.getElementById("number2").value) || 0; // Default to 0 if number2 is empty
    const result = subtract(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});
// event listener for the multiply button
document.getElementById("multiply").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0; // Default to 0 if number1 is empty
    const number2 = parseFloat(document.getElementById("number2").value) || 0; // Default to 0 if number2 is empty
    const result = multiply(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});
// event listener for the divide button
document.getElementById("divide").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0; // Default to 0 if number1 is empty
    const number2 = parseFloat(document.getElementById("number2").value) || 0; // Default to 0 if number2 is empty
    try {
        const result = divide(number1, number2);
        document.getElementById("calculation-result").textContent = result;
    } catch (error) {
        document.getElementById("calculation-result").textContent = error.message;
    }
});