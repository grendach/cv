
function animateSkills() {
  const skills = document.querySelectorAll('.skill-card, .lang-card');
  skills.forEach(skill => {
    const level = skill.getAttribute('data-level');
    const bar = skill.querySelector('.skill-level');
    const rect = skill.getBoundingClientRect();
    if(rect.top < window.innerHeight){
      bar.style.width = level + '%';
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
