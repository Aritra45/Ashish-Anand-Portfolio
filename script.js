

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.querySelector(".typed-text");
  const textArray = ["Ashish", "a Video Editor", "a Motion Designer", "a Storyteller"];
  let textIndex = 0, charIndex = 0;

  function type() {
    if (charIndex < textArray[textIndex].length) {
      typedText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, 1000);
    }
  }

  setTimeout(type, 2000);
});


function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 1000);
    }
}

setTimeout(type, 2000);

AOS.init({ duration: 1200 });

