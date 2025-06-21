const textsToType = [
    "I code cool websites.",
    "I love wordpress.",
    "I develop mobile apps."
];
const typingSpeed = 100;
const delayBetweenTexts = 1000;
const element = document.getElementById('typing-text');

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textsToType[textIndex].length) {
        element.innerHTML += textsToType[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(deleteText, delayBetweenTexts);
    }
}

function deleteText() {
    if (charIndex > 0) {
        element.innerHTML = element.innerHTML.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, typingSpeed);
    } else {
        textIndex = (textIndex + 1) % textsToType.length;
        setTimeout(typeText, typingSpeed);
    }
}

window.onload = typeText;