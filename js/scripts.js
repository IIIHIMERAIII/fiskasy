// Burger menu toggle with jQuery
$('#menuToggle').click(function() {
    $('#navbarNav').toggleClass('show');
    $('#menuToggle').toggleClass('hidden');
});

$('#menuClose').click(function() {
    $('#navbarNav').removeClass('show');
    $('#menuToggle').removeClass('hidden');
});

// Language toggler with jQuery
$('.language-button').hover(
    function() {
        $(this).parent().addClass('hovered');
    },
    function() {
        $(this).parent().removeClass('hovered');
    }
);