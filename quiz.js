function checkAnswer() {
 // identify the correct answer
    const correctAnswer = "4";
    
// retrieve the user's answer from the input field
const selectedRadio = document.querySelector('input[name="quiz"]:checked');
const userAnswer = selectedRadio.value ? selectedRadio.value : null;   

    
 // compare the user's answer with the correct answer
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}        
 // add event listener to the submit button
    const submitButton = document.getElementById("submit-answer").addEventListener("click", checkAnswer);
    