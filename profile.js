const autoTypingTextElement = document.getElementById("auto-typing-text");
const textToType = [
"\"I am Kind, Dicipline, Respectful and Happy\"",
"\"I am Web Developer, Coffee Lover, Explorer of New Technologies\"",
"\"Spreading the positivity and inspiration through coding\""
];
let currentTextIndex = 0;
let currentCharIndex = 0;

function typeNextCharacter() {
if (currentTextIndex < textToType.length) {
    if (currentCharIndex < textToType[currentTextIndex].length) {
        const currentText = autoTypingTextElement.textContent;
        autoTypingTextElement.textContent = currentText + textToType[currentTextIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeNextCharacter, 50); // Adjust typing speed here
    } else {
        setTimeout(eraseText, 5000); // Wait for 1 second before erasing
    }
}
}
function eraseText() {
if (currentCharIndex > 0) {
    const currentText = autoTypingTextElement.textContent;
    autoTypingTextElement.textContent = currentText.slice(0, -1);
    currentCharIndex--;
    setTimeout(eraseText, 30); // Adjust erasing speed here
} else {
    currentTextIndex = (currentTextIndex + 1) % textToType.length;
    setTimeout(typeNextCharacter, 500); // Wait for 0.5 second before typing the next sentence
}
}

// Start the auto typing when the page loads
typeNextCharacter();

const profileImageInner = document.querySelector('.profile-image-inner');
let isFlipped = false;

function toggleProfileImage() {
    if (isFlipped) {
        profileImageInner.style.transform = 'rotateY(0deg)';
     } else {
        profileImageInner.style.transform = 'rotateY(180deg)';
    }
    isFlipped = !isFlipped;
}

setInterval(toggleProfileImage, 3000); // Flip every 1000ms (1 second)

function likeProfile() {
    alert("You liked this profile!");
}

function commentProfile() {
    const comment = prompt("Leave a comment:");
    if (comment) {
        alert("You commented: " + comment);
    }
}

function shareProfile() {
    alert("Profile shared successfully!");
}