// scrollFunctions.js

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Scrollspy initialization
    $('body').scrollspy({
        target: '#scroll-dots',
        offset: 50
    });

    // Smooth scrolling for wheel events
    var isScrolling = false;

    $('body').on('wheel', function (e) {
        e.preventDefault();

        if (!isScrolling) {
            isScrolling = true;

            var delta = e.originalEvent.deltaY;
            var scrollSpeed = 800;
            var currentScrollTop = $(window).scrollTop();

            if (delta < 0) {
                // Scrolling up
                var targetSection = getPreviousSection(currentScrollTop);
            } else {
                // Scrolling down
                var targetSection = getNextSection(currentScrollTop);
            }

            $('html, body').stop().animate({
                scrollTop: targetSection.offset().top
            }, scrollSpeed, function () {
                isScrolling = false;
            });
        }
    });

    // Helper function to get the previous section
    function getPreviousSection(currentScrollTop) {
        var sections = $('section');
        var targetSection = null;

        sections.each(function () {
            if ($(this).offset().top < currentScrollTop) {
                targetSection = $(this);
            }
        });

        return targetSection || $('body');
    }

    // Helper function to get the next section
    function getNextSection(currentScrollTop) {
        var sections = $('section');
        var targetSection = null;

        sections.each(function () {
            if ($(this).offset().top > currentScrollTop) {
                if (!targetSection) {
                    targetSection = $(this);
                }
            }
        });

        return targetSection || $('body');
    }
});
