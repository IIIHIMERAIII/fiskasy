
// burger menu

document.getElementById('menuToggle').addEventListener('click', function() {
    const navbarNav = document.getElementById('navbarNav');
    const navbarToggler = document.getElementById('menuToggle');
    
    // Toggle the class to show or hide the menu
    navbarNav.classList.toggle('show');
    
    // Toggle the visibility of the hamburger button
    navbarToggler.classList.toggle('hidden');
});

document.getElementById('menuClose').addEventListener('click', function() {
    const navbarNav = document.getElementById('navbarNav');
    const navbarToggler = document.getElementById('menuToggle');
    
    // Close the menu
    navbarNav.classList.remove('show');
    
    // Show the hamburger button
    navbarToggler.classList.remove('hidden');
});


// language toggler 

const buttons = document.querySelectorAll('.language-button');
const items = document.querySelectorAll('.language-item');

buttons.forEach((button, index) => {
    const item = items[index]; // use index .language-item for .language-button

    button.addEventListener('mouseover', () => {
        item.classList.add('hovered');
    });

    button.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
    });
});