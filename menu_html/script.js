document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const content = document.querySelector('.content');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', function() {
        sideMenu.classList.add('active');
        content.classList.add('shift');
    });

    closeMenu.addEventListener('click', function() {
        sideMenu.classList.remove('active');
        content.classList.remove('shift');
    });
});