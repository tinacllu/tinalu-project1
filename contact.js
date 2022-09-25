const formElement = document.querySelector("form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userText = document.querySelector("#textBox");
const submissionResponse = document.querySelector(".submissionResponse");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    if (userName.value && userEmail.value && userText.value) {
        addComment();
        userName.value = "";
        userEmail.value = "";
        userText.value = "";
        submissionResponse.style.display = "block";
    }
})