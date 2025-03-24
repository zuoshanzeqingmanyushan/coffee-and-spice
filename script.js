document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.innerText = "❤️ Liked!";
        button.style.backgroundColor = "#d9534f";
        button.style.transition = "0.3s";
    });
});
