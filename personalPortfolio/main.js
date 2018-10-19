$(document).ready(function() {
    var web_window = $(window);

    //Navbar changing colour as scrolling off main header
    web_window.on("scroll", function() {
        var win = web_window.scrollTop();

        //If scrolled past header, change bg colour of navbar
        if (win > 200) {
            $("#navbar").css("background", "#363138");
            $("#navbar").css("transition", "background-color 0.5s ease 0s");
        } else {
            $("#navbar").css("background", "transparent");
        }

        if (checkIfInView("#welcome-section") == true) {
            $(".nav").removeClass('active');
            $("#welcome-link").addClass('active');
        }

        if (checkIfInView("#project-section") == true) {
            $(".nav").removeClass('active');
            $("#project-link").addClass('active');
        }

        if (checkIfInView("#contact-section") == true) {
            $(".nav").removeClass('active');
            $("#contact-link").addClass('active');
        }

    });

    function checkIfInView(element) {
        var element_top = $(element).offset().top;
        var element_bottom = element_top + $(element).outerHeight();
        var screen_top = $(window).scrollTop();
        var screen_bottom = screen_top + window.innerHeight;

        if ((element_top < screen_bottom) && (element_bottom > screen_top)) {
            return true;
        } else {
            return false;
        }
    };

});