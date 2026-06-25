// Page load animation

window.addEventListener("load", () => {

    const card = document.querySelector(".login-card");

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "all 0.8s ease";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, 100);

});


// Form Validation

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    const username =
    document.querySelector(
    'input[name="username"]'
    ).value.trim();

    const password =
    document.querySelector(
    'input[name="password"]'
    ).value.trim();

    if(username === "" || password === ""){

        e.preventDefault();

        alert(
        "Please enter username and password"
        );

    }

});