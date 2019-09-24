$(document).ready(function () {
    var imgFondo = $('.bg-login');
    var ingresarSection = $('#ingresar');
    var detalleRegistrate = $('#registrate .right-flex');
    var registrateSection = $('#registrate');
    var irToRegistrate = $('.irToRegistrate');
    var irToLogIn = $('.irToLogIn');

    function isMobile(activeSection, dissabledSection) {
        var width = $(window).width()

        if (width <= 700) {
            console.log("es mobile")
            $(activeSection).css({
                "color": "#38b593",
                "transition": "300ms",
                "font-weight": "800"

            });
            $(dissabledSection).css({
                "color": "gainsboro",
                "background": "transparent",
                "transition": "300ms",
                "font-weight": "400"
            });

        }

    }


    $(irToRegistrate).click(function () {
        moveToRight(imgFondo);
        moveToLeft(detalleRegistrate);
        registrateSection.css("display", "flex");
        setTimeout(displayNoneSection(ingresarSection), 700);
        isMobile(irToRegistrate, irToLogIn)

    })

    $(irToLogIn).click(function () {
        moveToLeft(imgFondo);
        moveToRight(detalleRegistrate);
        ingresarSection.css("display", "flex");
        setTimeout(displayNoneSection(registrateSection), 700);
        isMobile(irToLogIn, irToRegistrate)
    })

    function displayNoneSection(section) {
        section.css('display', 'none');
    }


    function moveToRight(divMover) {
        var screenWidth = $(window).width();
        var divMoverWidth = divMover.width()
        divMover.animate({
            "right": "0",
            "left": screenWidth - divMoverWidth,
        })
    }

    function moveToLeft(divMover) {
        var screenWidth = $(window).width();
        var divMoverWidth = divMover.width()
        divMover.animate({
            "left": "0",
            "right": screenWidth - divMoverWidth,
        })
    }


});

