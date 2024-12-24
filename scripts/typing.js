document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("typing-animation");
    const words = ["Hello, I'm Jarren!", "Welcome to My Portfolio!"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentText = isDeleting
            ? currentWord.substring(0, charIndex--)
            : currentWord.substring(0, charIndex++);

        element.textContent = currentText;

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause after typing
            setTimeout(() => (isDeleting = true), 250);
        } else if (isDeleting && charIndex === 0) {
            // Switch to the next word after deleting
            wordIndex = (wordIndex + 1) % words.length;
            isDeleting = false;
        }

        const typingSpeed = isDeleting ? 100 : 150;
        setTimeout(type, typingSpeed);
    }

    type();
});
