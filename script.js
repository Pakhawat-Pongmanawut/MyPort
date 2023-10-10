window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("desktop-nav");
    form.onclick = toggleMenu();
}
function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".sandvich-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}