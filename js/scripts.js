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

    $('.switcher-button').click(function() {
        console.log('Button clicked'); // Debuging log
        $(this).toggleClass('active');
        $('.hero-switcher').toggleClass('active');
        $('.image-wrapper').toggleClass('active');
    });
});

// hero switcher label logic

$(document).ready(function() {
    let isDefault = true;

    $('#rightButton').click(function() {
        if (isDefault) {
            $('#productName').html('ELZAB Zeta Online');
            $('#priceValue').text('1990,00 zł');
            $('.left').removeClass('hidden');  // Show left button
            $('.right').addClass('hidden');    // Hide right button
        } else {
            $('#productName').html('DATECS WP-50 Wi-FI Online');
            $('#priceValue').text('1429,00 zł');
            $('.left').addClass('hidden');     // Hide left button
            $('.right').removeClass('hidden'); // Show right button
        }
        isDefault = !isDefault; // Toggle state
    });

    $('#leftButton').click(function() {
        $('#productName').html('DATECS WP-50 Wi-FI Online');
        $('#priceValue').text('1429,00 zł');
        $('.left').addClass('hidden');     // Hide left button
        $('.right').removeClass('hidden'); // Show right button
        isDefault = true; // Reset state to default
    });
});
//Swipers 


// promotion swiper

$(document).ready(function () {
    var swiper = new Swiper('.promotion-swiper', {
        centeredSlides: true, // centered items
        loop: true, // swaping loop
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3, // 3 items per page + calculate with
            },
            0: {
                slidesPerView: 3, // Value for screens smaller than 1200px
                spaceBetween: 40,
            },
        },  
    });
});

// partners swiper 

$(document).ready(function () {
    var swiper = new Swiper('.partners-swiper', {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 'auto', // 
                centeredSlides: false,
            },
            0: {
                slidesPerView: 3/1.4 // Value for screens smaller than 1200px
            },
        },
    });
});



// catalog logic

$(document).ready(function() {
    $('.catalog-card').each(function() {
      const $card = $(this);
      const index = $card.data('bg');
      
      // Ensure the index is within the range
      if (index >= 1 && index <= 18) { 
        const imageUrl = `./img/cat${index}.png`;
        
        $card.css('background-image', `url(${imageUrl})`);
      }
    });
  });

// media ruls styles 
