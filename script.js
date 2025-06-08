// DOM Elements
const loader = document.getElementById('ftco-loader');
const menuTgl = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const typedTextEl = document.querySelector('.typed-text');
const stars = document.querySelectorAll('.star-rating .fa-star');
const ratingRes = document.getElementById('rating-result');
const avgRatingEl = document.getElementById('averageRating');
const scrollBtn = document.getElementById('scrollToTop');
const yearEl = document.getElementById('year');

// Hide Loader
window.addEventListener('load', () => {
  loader.classList.add('hide');
});

// Responsive Nav Toggle
menuTgl.addEventListener('click', () => {
  menuTgl.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Typing Effect
const textArr = ['Ashish', 'a Video Editor', 'a Motion Designer', 'a Storyteller'];
let txtIdx = 0, chrIdx = 0;
function type() {
  if (chrIdx < textArr[txtIdx].length) {
    typedTextEl.textContent += textArr[txtIdx].charAt(chrIdx++);
    setTimeout(type, 100);
  } else setTimeout(erase, 2000);
}
function erase() {
  if (chrIdx > 0) {
    typedTextEl.textContent = typedTextEl.textContent.slice(0, --chrIdx);
    setTimeout(erase, 50);
  } else {
    txtIdx = (txtIdx + 1) % textArr.length;
    setTimeout(type, 1000);
  }
}
setTimeout(type, 2000);

// AOS Init
AOS.init({ duration: 1200 });

// // Star Rating
// stars.forEach((st, idx) => {
//   st.addEventListener('click', () => {
//     stars.forEach(s => s.classList.remove('selected'));
//     for (let i = 0; i <= idx; i++) stars[i].classList.add('selected');
//     ratingRes.textContent = `You rated this ${idx + 1} star${idx ? 's' : ''}!`;
//     // TODO: send rating to backend → fetch()
//   });
// });

// Scroll‑to‑Top
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Footer Year
yearEl.textContent = new Date().getFullYear();

// Contact Form (Placeholder)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! I will get back to you soon.');
});
