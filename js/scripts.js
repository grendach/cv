document.addEventListener('DOMContentLoaded', () => {

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute('data-target');
const count = +counter.innerText;
const increment = target / 200;

if (count < target) {

counter.innerText = Math.ceil(count + increment);
setTimeout(updateCounter, 10);

} else {

counter.innerText = target;

}

};

updateCounter();

});

const skillCards = document.querySelectorAll('.skill-card, .lang-card');

skillCards.forEach(card => {

const level = card.getAttribute('data-level');
const bar = card.querySelector('.skill-level');

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

bar.style.width = level + '%';

}

});

});

observer.observe(card);

});

const showMoreBtn = document.getElementById("showMoreBtn");

if (showMoreBtn) {

showMoreBtn.addEventListener("click", () => {

const hidden = document.querySelectorAll(".hidden-exp");

hidden.forEach(job => {

job.style.display = "block";

});

showMoreBtn.style.display = "none";

});

}

});
