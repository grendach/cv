document.addEventListener("DOMContentLoaded", () => {

const skills = document.querySelectorAll(".skill-card,.lang-card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const level = entry.target.dataset.level;
const bar = entry.target.querySelector(".skill-level");

if(bar){
bar.style.width = level + "%";
}

}

});

},{threshold:0.5});

skills.forEach(skill => observer.observe(skill));

/* counters */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const update = () => {

const target = +counter.dataset.target;
const current = +counter.innerText;

const inc = target / 60;

if(current < target){

counter.innerText = Math.ceil(current + inc);
setTimeout(update,30);

}else{

counter.innerText = target;

}

};

update();

});

});
