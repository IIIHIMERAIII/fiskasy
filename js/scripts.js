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
        console.log('Button clicked'); // Debuging log
        $(this).toggleClass('active');
        $('.hero-switcher').toggleClass('active');
    });
});

// hero switcher label logic

$(document).ready(function() {
    // Toggle state
    let isDefault = true;

    $('#switcherButton').click(function() {
        if (isDefault) {
            // Change text to alternative values
            $('#productName').html('ELZAB Zeta <br/> Online');
            $('#priceValue').text('1990,00 zł');
        } else {
            // Change text back to default values
            $('#productName').html('DATECS WP-50 <br/> Wi-FI Online');
            $('#priceValue').text('1429,00 zł');
        }
        isDefault = !isDefault; // Toggle state
    })
});

//Swipers 


// promotion swiper

$(document).ready(function () {
    var swiper = new Swiper('.promotion-swiper', {
        slidesPerView: 3/0.7, // 3 items per page + calculate with
        centeredSlides: true, // centered items
        loop: true, // swaping loop
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// partners swiper 

$(document).ready(function () {
    var swiper = new Swiper('.partners-swiper', {
        slidesPerView: 3 / 1.4, 
        centeredSlides: true, 
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            transitionStart: function () {
                // dynemic calc translate
                var currentTranslate = this.translate;
                var desiredTranslate = currentTranslate - 110; 
                this.setTranslate(desiredTranslate); // new translate param
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