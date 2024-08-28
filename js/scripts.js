// Toggle the navigation menu and the menu button visibility
$('#menuToggle').click(function() {
    $('#navbarNav').toggleClass('show');
    $('#menuToggle').toggleClass('hidden');
});

// Close the navigation menu and show the menu button
$('#menuClose').click(function() {
    $('#navbarNav').removeClass('show');
    $('#menuToggle').removeClass('hidden');
});

// Add or remove hover effect on language buttons
$('.language-button').hover(
    function() {
        $(this).parent().addClass('hovered');
    },
    function() {
        $(this).parent().removeClass('hovered');
    }
);

// Hero switcher

$(document).ready(function() {

    $('#switcherButton').click(function() {
        console.log('Button clicked'); // Debuging test 
        $(this).toggleClass('active');
        $('.hero-switcher').toggleClass('active');
    });
});