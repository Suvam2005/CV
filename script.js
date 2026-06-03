const textsToType = [
    { words: ["I code cool", "websites."], colors: ["#ffffff", "#4bffa5"] },
    { words: ["I love", "wordpress."], colors: ["#ffffff", "#4bffa5"] },
    { words: ["I develop", "mobile apps."], colors: ["#ffffff", "#4bffa5"] }
];

const typingSpeed = 100;
const delayBetweenTexts = 1000;
const element = document.getElementById('typing-text');

let textIndex = 0;
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentItem = textsToType[textIndex];

    if (typeof currentItem === "string") {
        // Normal string typing
        if (!isDeleting && charIndex < currentItem.length) {
            element.innerHTML += currentItem.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            element.innerHTML = element.innerHTML.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, typingSpeed);
        } else {
            if (!isDeleting) {
                setTimeout(() => { isDeleting = true; typeEffect(); }, delayBetweenTexts);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % textsToType.length;
                charIndex = 0;
                setTimeout(typeEffect, typingSpeed);
            }
        }
    } else {
        // Object with words + colors
        if (!isDeleting) {
            if (charIndex === 0) {
                element.innerHTML += `<span style="color:${currentItem.colors[wordIndex]}"></span>`;
            }
            let spans = element.querySelectorAll("span");
            let currentSpan = spans[spans.length - 1];
            let currentWord = currentItem.words[wordIndex];

            if (charIndex < currentWord.length) {
                currentSpan.textContent += currentWord.charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, typingSpeed);
            } else {
                currentSpan.textContent += " ";
                charIndex = 0;
                wordIndex++;
                if (wordIndex < currentItem.words.length) {
                    setTimeout(typeEffect, typingSpeed);
                } else {
                    setTimeout(() => { isDeleting = true; typeEffect(); }, delayBetweenTexts);
                }
            }
        } else {
            let spans = element.querySelectorAll("span");
            let currentSpan = spans[spans.length - 1];
            if (currentSpan && currentSpan.textContent.length > 0) {
                currentSpan.textContent = currentSpan.textContent.slice(0, -1);
                setTimeout(typeEffect, typingSpeed);
            } else {
                if (currentSpan) currentSpan.remove();
                wordIndex--;
                if (wordIndex >= 0) {
                    charIndex = currentItem.words[wordIndex].length + 1;
                    setTimeout(typeEffect, typingSpeed);
                } else {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % textsToType.length;
                    wordIndex = 0;
                    charIndex = 0;
                    setTimeout(typeEffect, typingSpeed);
                }
            }
        }
    }
}

window.onload = typeEffect;
