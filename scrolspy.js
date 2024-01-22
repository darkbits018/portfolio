// $(document).ready(function () {
//     var dots = $('.dot');

//     dots.on('click', function () {
//         var target = $(this).data('target');
//         $('html, body').animate({
//             scrollTop: $(target).offset().top
//         }, 500);
//     });

//     dots.hover(
//         function () {
//             var dot = $(this);
//             var sectionName = dot.data('text');

//             dots.removeClass('active-dot');
//             dot.addClass('active-dot');

//             // Show section name if available
//             if (sectionName) {
//                 console.log("Section: " + sectionName);
//             }
//         },
//         function () {
//             var dot = $(this);
//             dot.removeClass('active-dot');
//         }
//     );
// });

$(document).ready(function () {
    var dots = $('.dot');
    var sections = $('section');

    dots.on('click', function () {
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);

        // Add class to the clicked dot when the corresponding section is in view
        dots.removeClass('hover-dot active-dot');
        $(this).addClass('active-dot');
    });

    dots.hover(
        function () {
            var dot = $(this);
            var sectionName = dot.data('text');

            dots.removeClass('hover-dot');
            dot.addClass('hover-dot');

            // Show section name if available
            if (sectionName) {
                console.log("Section: " + sectionName);
            }
        },
        function () {
            // Remove hover-dot class when cursor moves away from the dot
            var dot = $(this);
            if (!dot.hasClass('active-dot')) {
                dot.removeClass('hover-dot');
            }
        }
    );

    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();

        sections.each(function () {
            var section = $(this);
            var sectionTop = section.offset().top;
            var sectionBottom = sectionTop + section.outerHeight();
            var dot = $('[data-target="#' + section.attr('id') + '"]');

            if (scrolled >= sectionTop && scrolled <= sectionBottom) {
                // Add class to the dot when the corresponding section is in view
                dots.removeClass('hover-dot active-dot');
                dot.addClass('active-dot');
            }
        });
    });
});


// $(document).ready(function () {
//     var dots = $('.dot');
//     var sections = $('section');

//     dots.on('click', function () {
//         var target = $(this).data('target');
//         $('html, body').animate({
//             scrollTop: $(target).offset().top
//         }, 500);
//     });

//     dots.hover(
//         function () {
//             var dot = $(this);
//             var sectionName = dot.data('text');

//             dots.removeClass('active-dot');
//             dot.addClass('active-dot');

//             // Show section name if available
//             if (sectionName) {
//                 console.log("Section: " + sectionName);
//             }
//         },
//         function () {
//             var dot = $(this);
//             dot.removeClass('active-dot');
//         }
//     );

//     $(window).on('scroll', function () {
//         sections.each(function () {
//             var section = $(this);
//             var sectionTop = section.offset().top;
//             var sectionBottom = sectionTop + section.outerHeight();
//             var dot = $('[data-target="#' + section.attr('id') + '"]');

//             if ($(window).scrollTop() >= sectionTop && $(window).scrollTop() <= sectionBottom) {
//                 dot.addClass('active-dot');
//                 // Store active-dot state in local storage
//                 localStorage.setItem('activeDot', section.attr('id'));
//             } else {
//                 dot.removeClass('active-dot');
//             }
//         });
//     });

//     // Retrieve active-dot state from local storage on page load
//     var activeDotId = localStorage.getItem('activeDot');
//     if (activeDotId) {
//         $('[data-target="#' + activeDotId + '"]').addClass('active-dot');
//     }
// });
