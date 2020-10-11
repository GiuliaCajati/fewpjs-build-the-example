// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".like-glyph").forEach(heart => (addEvent(heart)))
})

const addEvent = (heart) => {
    heart.addEventListener("click", () => {
        mimicServerCall()
            .then((successMsg) => handleSuccess(heart))
            .catch((errorMsg) => handleError(errorMsg))
    })
}


const handleError = (errorMsg) => {
    let errorModal = document.getElementById("modal")
    errorModal.className = " " //remove class hidden 
    errorModal.innerText = errorMsg
    setTimeout(() => { errorModal.className = "hidden" }, 5000)
}

const handleSuccess = (heart) => {
    if (heart.innerText == FULL_HEART) {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
    } else {
        heart.innerText = FULL_HEART;
        heart.className += " activated-heart";
    }
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

//fetch 
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let isRandomFailure = Math.random() < .2
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}