let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

//let attempt = 3;

    // function validate() {
    //     var username = document.getElementById("username").value;
    //     var password = document.getElementById("password").value;

    //     if (username && password) {
    //         alert("Login successfully");
    //         window.location = "success.html"; // Redirecting to another page.
    //         return false;
    //     } else {
    //         attempt--;

    //         if (!isNaN(attempt) && attempt > 0) {
    //             alert("You have left " + attempt + " attempts.");
    //         } else {
    //             alert("No attempts left. Please contact support.");
    //             // Optionally, disable fields or perform additional actions here
    //         }

    //         // Disabling fields after 3 attempts.
    //         if (attempt === 0) {
    //             document.getElementById("username").disabled = true;
    //             document.getElementById("password").disabled = true;
    //             document.getElementById("submit").disabled = true;
    //             return false;
    //         }
    //     }
    // }

    // // New function to reset attempts
    // function resetAttempts() {
    //     attempt = 3;
    // }