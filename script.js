// Adding paragraph
document.getElementById('change-text-btn').addEventListener('click', function () {
    const container = document.getElementById('new-paragraph-container');
    const existingParagraph = container.querySelector('p');

    if (existingParagraph) {
        container.removeChild(existingParagraph); // Remove if exists
    } else {
        const newText = document.createElement('p');
        newText.textContent = "Every click helps us protect Aberdare! More people are joining the cause—let's make a difference together!";
        newText.style.color = "black";
        newText.style.fontWeight = "bold";
        newText.style.marginTop = "10px";
        newText.style.fontSize = "1.1em";
        container.appendChild(newText);
    }
});

// Change text
document.getElementById('inspire-btn').addEventListener('click', function () {
    const heading = document.getElementById('why-heading');

    
    if (heading.textContent === "Why Protect Aberdare Forest?") {
        heading.textContent = "Because Nature Needs Us 🌿";
        heading.style.color = "#4caf50";
        heading.style.textShadow = "1px 1px 2px #ccc";
    } else {
        heading.textContent = "Why Protect Aberdare Forest?";
        heading.style.color = "";
        heading.style.textShadow = "";
    }
});
