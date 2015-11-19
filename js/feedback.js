var popup = document.querySelector(".feedback-form");
var btnOpen = document.querySelector(".btn-write-us");
var form = popup.querySelector("form");
var btnClose = popup.querySelector(".close-form");
var btnCancel = popup.querySelector(".feedback-form .cancel-btn");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");


btnOpen.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("show-form");
    if (localStorage.getItem("username") && localStorage.getItem("email")) {
        username.value = localStorage.getItem("username");
        email.value = localStorage.getItem("email");
        letter.focus();
    }
    else {
        username.focus();
    }
});


btnClose.addEventListener ("click", function(event){
	event.preventDefault();
	popup.classList.remove("show-form");
	popup.classList.remove("modal-error");
});
btnCancel.addEventListener ("click", function(event){
		event.preventDefault();
		popup.classList.remove("show-form");
		popup.classList.remove("modal-error");
});
window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("show-form")) {
            popup.classList.remove("show-form");
            popup.classList.remove("modal-error");
          }
        }
    });

form.addEventListener("submit", function(event) {
    if (!username.value || !email.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        if (!username.value) {
            username.focus();
        } else {
            email.focus();
        }
    } 
    else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
    }
});
