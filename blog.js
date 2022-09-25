//form
const today = new Date();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentWeekday = weekday[today.getDay()];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentMonth = months[today.getMonth()];
const currentDate = today.getDate();
const currentYear = today.getFullYear();

const getDateSuffix = () => {
    let dateSuffix = ""
    if (currentDate % 10 === 1) {
        dateSuffix = "st";
    } else if (currentDate % 10 === 2) {
        dateSuffix = "nd";
    } else if (currentDate % 10 === 3) {
        dateSuffix = "rd";
    } else {
        dateSuffix = "th";
    }
    return dateSuffix
}

const postTime = `${currentWeekday}, ${currentMonth} ${currentDate}${getDateSuffix()}, ${currentYear}`


const formElement = document.querySelector("form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userText = document.querySelector("#textBox");
const comments = document.querySelectorAll(".comment");
const commentsContainer = document.querySelector(".commentsContainer");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    if (userName.value && userEmail.value && userText.value) {
        addComment();
        userName.value = "";
        userEmail.value = "";
        userText.value = "";
    }
})

// add comment 
const addComment = () => {
    const newComment = document.createElement("div");
    newComment.classList.add(`comment`);
    newComment.classList.add(`comment${comments.length + 1}`);
    newComment.innerHTML = 
        `<div class="imgContainer">
             <img src=http://placekitten.com/>
         </div> 
         <div class="contentContainer">
             <h5>${postTime} by ${userName.value}</h5>
             <p>${userText.value}</p>
         </div>`
    commentsContainer.insertBefore(newComment, formElement);
}