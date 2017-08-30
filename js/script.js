$(document).ready(function () {

    $("#owl").owlCarousel({

        // navigation : false, // Show next and prev buttons
        autoPlay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,

        // "singleItem:true" is a shortcut for:
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,

        navigation: true,
        navigationText: [
            "<img src='../images/owl-left.png'>",
            "<img src='../images/owl-right.png'>"
        ]
    });

    //      second

    $("#owl2").owlCarousel({

        loop: true,
        items: 4,
        slideSpeed: 300,
        paginationSpeed: 400,
        itemsDesktop: [1199, 3],
        //itemsDesktopSmall : [980,3],
        itemsTablet: [980, 3],
        //itemsTabletSmall: false,
        itemsMobile: [768, 2],
        navigation: true,
        navigationText: [
            "<img src='../images/owl2_left.png'>",
            "<img src='../images/owl2_right.png'>"
        ]
    });

    $("#owl3").owlCarousel({

        loop: true,
        items: 4,
        slideSpeed: 300,
        paginationSpeed: 400,
        itemsDesktop: [1199, 3],
        //itemsDesktopSmall : [980,3],
        itemsTablet: [600, 3],
        //itemsTabletSmall: false,
        itemsMobile: [360, 2],
        navigation: true,
        navigationText: [
            "<img src='../images/owl2_left.png'>",
            "<img src='../images/owl2_right.png'>"
        ]
    });

    $("#owl4").owlCarousel({

        loop: true,
        items: 4,
        slideSpeed: 300,
        paginationSpeed: 400,
        itemsDesktop: [1199, 3],
        //itemsDesktopSmall : [980,3],
        itemsTablet: [980, 3],
        //itemsTabletSmall: false,
        itemsMobile: [768, 2],
        navigation: true,
        navigationText: [
            "<img src='../images/owl2_left.png'>",
            "<img src='../images/owl2_right.png'>"
        ]
    });

    $("#owl5").owlCarousel({

        loop: true,
        items: 3,
        slideSpeed: 300,
        paginationSpeed: 400,
        itemsDesktop: [1199, 3],
        //itemsDesktopSmall : [980,3],
        itemsTablet: [600, 2],
        //itemsTabletSmall: false,
        navigation: true,
        itemsMobile: [360, 1],
        navigationText: [
            "<img src='../images/owl2_left.png'>",
            "<img src='../images/owl2_right.png'>"
        ]
    });

    //      responsive iframes

    function responsiveIframe() {

        $('.responsive-iframe').each(function () {
            var ratio = 400 / 228;
            var width = $(this).width();

            $(this).css('height', width / ratio);

        });
    }


//    my account dropdown


    $('.open-myaccount').on("click", function () {
        $('.my-account').toggleClass('in');
        $('.open-myaccount').toggleClass('in');
    });

/*    $(function() {
        $(".open-myaccount").on("click", function(e) {
            $(".open-myaccount").addClass("in");
            e.stopPropagation()
        });
        $(document).on("click", function(e) {
            if ($(e.target).is(".open-myaccount") === false) {
                $(".open-myaccount").removeClass("wide");
            }
        });
    });*/

/*
    $('.close-myaccount').on('click', function () {
        $('.my-account').addClass('in');
    });*/


    //      navigation hover opening

    $(".nav-open").hover(
        function () { //mouseover
            $(this).addClass("in");
        },
        function () { //mouseout
            $(this).removeClass("in");
        }
    );


    //      video resizing


    responsiveIframe();
    $(window).resize(function () {
        responsiveIframe();
        setTimeout(paginationAutoMargin(), 300);
    });


//      replacing img on windows resize


    $(window).resize(function () {
        if ($(window).outerWidth() > 980) {
            $("#image1").attr("src", "images/1.jpg");
            $("#image2").attr("src", "images/2.jpg");
            $("#image3").attr("src", "images/3.jpg");
            $("#image4").attr("src", "images/4.jpg");
            $("#image5").attr("src", "images/5.jpg");
        } else if ($(window).outerWidth() < 980 && $(window).outerWidth() > 361) {
            $("#image1").attr("src", "images/md/1.jpg");
            $("#image2").attr("src", "images/md/2.jpg");
            $("#image3").attr("src", "images/md/3.jpg");
            $("#image4").attr("src", "images/md/4.jpg");
            $("#image5").attr("src", "images/md/5.jpg");
        } else if ($(window).outerWidth() < 361) {
            $("#image1").attr("src", "images/sm/s1_sm.jpg");
            $("#image2").attr("src", "images/sm/s2_sm.jpg");
            $("#image3").attr("src", "images/sm/s3_sm.jpg");
            $("#image4").attr("src", "images/sm/s4_sm.jpg");
            $("#image5").attr("src", "images/sm/s5_sm.jpg");
        }
        if ($(window).outerWidth() > 360) {
            $('#sq1').attr('src', 'images/sq1.jpg');
            $('#sq2').attr('src', 'images/sq2.jpg');
            $('#sq3').attr('src', 'images/sq3.jpg');
            $('#sq4a').attr('src', 'images/sq4a.jpg');
            $('#sq4b').attr('src', 'images/sq4b.jpg');
            $('#sq5').attr('src', 'images/sq5.jpg');
        } else {
            $('#sq1').attr('src', 'images/sm/sq1_sm.jpg');
            $('#sq2').attr('src', 'images/sm/sq2_sm.jpg');
            $('#sq3').attr('src', 'images/sm/sq3_sm.jpg');
            $('#sq4a').attr('src', 'images/sm/sq4a_sm.jpg');
            $('#sq4b').attr('src', 'images/sm/sq4b_sm.jpg');
            $('#sq5').attr('src', 'images/sm/sq5_sm.jpg');
        }
    });

    //      replacing squares imgs for mobile view



    // owl pagination margin auto

    function paginationAutoMargin() {

        var $owlPagination = $('.owl-controls');

        $owlPagination.each(function (item) {
            // console.log( this );
            // console.log('counter: ' + $(this).find('.owl-page').length);

            // dotsAmount --> how many .owl-page classes are in one carousel

            var dotsAmount = $(this).find('.owl-page').length;

            // console.log('owl-page items: ' + count);

            //  dotsWidthWithPx --> what is the width of one .owl-page element

            var dotsWidthWithPx = $(this).find('.owl-page').width();
            // console.log('owl-page width: ' + width);

            //  multiplies .owl-page elements' width and its number

            $(this).find('.owl-prev').css('margin-right', dotsWidthWithPx * dotsAmount / 2);

            $(this).find('.owl-next').css('margin-left', dotsWidthWithPx * dotsAmount / 2);

        });
    };

    /*$('.owl-carousel').on("refreshed.owl.carousel", function () {
     console.log('jkj');
     paginationAutoMargin()
     });*/


    //      accordion menu for mobile view


    $(document).ready(function () {
        function close_accordion_section() {
            $('.accordion .accordion-section-title').removeClass('active minus');
            $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
        }

        $('.accordion-section-title').click(function (e) {
            var currentAttrValue = $(this).attr('href');

            if ($(e.target).is('.active')) {
                close_accordion_section();

                console.log(this);
            } else {
                close_accordion_section()
                $(this).addClass('active minus');
                $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
            }
            e.preventDefault();
        });
        paginationAutoMargin()

    })


});