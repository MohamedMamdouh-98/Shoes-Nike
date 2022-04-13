const icon = document.getElementById('icon');
const nav = document.getElementById('nav');

icon.onclick = function() {
    nav.classList.toggle('navMedia');
    this.classList.toggle('iconX');
}