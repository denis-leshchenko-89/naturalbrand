jQuery(document).ready(function($) {

    sliderSlick();
    social();
    jQueryFormStyler();
    MaxHeightBlocksSlider();
    MaxHeightBlocksCatalog();
    mobileTabsFooter();
    mobileTabsCategory();
    mobileLeftNav();
    maskeInput();
    raidoButton();
    filter();
    desktopCategorySidebar();
    desktopBrandSidebar();
    customScrollbar();
    smartSearch();
    responsiveTabs();
    magnificPopup()

    headerPopUp();




    function headerPopUp()

    {

        $('#header .office').hover(function() {
            $('.pop-up-enter-and-registering-wrapper').fadeIn();
        }, function() {
            $('.pop-up-enter-and-registering-wrapper').fadeOut();
        });

        $('#header .basket').hover(function() {
            $('.pop-up-total-product-in-basket-wrapper').fadeIn();
        }, function() {
            $('.pop-up-total-product-in-basket-wrapper').fadeOut();
        });

        $('.tabs-discounts-news .tab-discounts-wrapper a').click(function() {
            event.preventDefault();
            $('.pop-up-enter-and-registering-wrapper-mobile').fadeToggle();
        });

    }





    function magnificPopup() {
        $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true,
        });
    }

    function responsiveTabs() {
        $('#card-product-page .tabs').responsiveTabs({
            startCollapsed: 'accordion'
        });

        $('#card-product-delivery-in-regions .tabs').responsiveTabs({
            startCollapsed: 'accordion'
        });
    }


    function smartSearch() {
        $(".smart-search input[type='search']").focus(function(event) {
            $(this).closest('.smart-search').addClass('open');
            $(this).closest('.smart-search').find('.smart-search-bottom').css('display', 'flex');
        });
        $(".smart-search input[type='search']").blur(function(event) {
            $(this).closest('.smart-search').removeClass('open');
            $(this).closest('.smart-search').find('.smart-search-bottom').css('display', 'none');
        });
    }


    function customScrollbar() {
        $(".smart-search-bottom .smart-search-bottom-left").mCustomScrollbar({
            setHeight: 368,
            theme: "minimal-dark",
        });

        $(".smart-search-bottom .smart-search-bottom-right").mCustomScrollbar({
            setHeight: 368,
            theme: "minimal-dark",

        });



        $(".similar-result-list").mCustomScrollbar({
            setHeight: 597,
            theme: "minimal-dark",


        });

        $(".smart-search-bottom .smart-search-bottom-left").mCustomScrollbar("disable");
        $(".smart-search-bottom .smart-search-bottom-left").mCustomScrollbar("disable");

        if ($(window).width() > 800) {
            $(".smart-search-bottom .smart-search-bottom-left").mCustomScrollbar("update");
            $(".smart-search-bottom .smart-search-bottom-right").mCustomScrollbar("update");
        } else {
            $(".smart-search-bottom .smart-search-bottom-left").mCustomScrollbar("disable");
            $(".smart-search-bottom .smart-search-bottom-right").mCustomScrollbar("disable");
        }
        $(window).resize(function(event) {
            if ($(window).width() > 800) {
                $(".smart-search-bottom .smart-search-bottom-left").mCustomScrollbar("update");
                $(".smart-search-bottom .smart-search-bottom-right").mCustomScrollbar("update");

            } else {
                $(".smart-search-bottom .smart-search-bottom-left").mCustomScrollbar("disable");

                $(".smart-search-bottom .smart-search-bottom-right").mCustomScrollbar("disable");
            }
        });
    }

    function desktopCategorySidebar() {
        $(".tabs-category-brands .tab-category").click(function(event) {
            if ($(window).width() > 800) {
                event.preventDefault();
                $(".tabs-category-brands a").removeClass('active');
                $(this).addClass('active');
                $("#sidebar .brand-sidebar").hide();
                $("#sidebar .category-sidebar").show();
            }
        });

        $('#sidebar .category-sidebar .category-list .category li a').click(function(event) {
            event.preventDefault();
            $(this).parent().find(">ul").slideToggle("slow");
            $(this).toggleClass('arrow-move');
        });

    }

    function desktopBrandSidebar() {
        $(".tabs-category-brands .tab-brand").click(function(event) {
            event.preventDefault();
            if ($(window).width() > 800) {
                $(".tabs-category-brands a").removeClass('active');
                $(this).addClass('active');
                $("#sidebar .category-sidebar").hide();
                $("#sidebar .brand-sidebar").show();
            }
        });
        $('#sidebar .brand-sidebar  .brand-list .list .show-more').click(function(event) {
            event.preventDefault();
            if (!$(this).parent().find("ul").hasClass('open')) {
                $(this).parent().find("ul").stop().animate({ "max-height": "1000px" }, 500).addClass('open');
                $(this).find("a>span").text("Свертнуть");
                $(this).find("i").removeClass('fa-angle-down');
                $(this).find("i").addClass('fa-angle-up');
            } else {
                $(this).parent().find("ul").stop().animate({ "max-height": "90px" }, 500).removeClass('open');
                $(this).find("a>span").text("Показать еще");
                $(this).find("i").removeClass('fa-angle-up');
                $(this).find("i").addClass('fa-angle-down');
            }
        });
    }

    function mobileLeftNav() {
        $(".tabs-category-brands a").click(function(event) {
            event.preventDefault();
            if ($(window).width() < 800) {
                if ($(this).hasClass('tab-category')) {
                    if ($(this).parent().find('a').hasClass('selected') && !$(this).hasClass('selected')) {
                        $(".menu-brand").hide();
                        $(".menu-category").show();
                        $(".tabs-category-brands a").removeClass('selected')
                        $('.tabs-category-brands .tab-category').addClass('selected')

                    } else {
                        $(".menu-brand").hide();
                        $(".menu-category").show();
                        $(".tabs-category-brands .tab-category").addClass('selected')
                        if ($("#page-right").css("left") == "0px") {
                            $("#page-right").stop().animate({ "left": "250px" }, 500, function() {
                                $(this).addClass('open');

                            });
                            $("#nav-mobile-left-back-button").css({ "color": "#3c3c3c" });

                        } else {
                            $("#page-right").stop().animate({ "left": "0px" }, 500, function() {
                                $(this).removeClass('open');
                                $(".tabs-category-brands .tab-category").removeClass('selected')
                            });
                            $("#nav-mobile-left-back-button").css({ "color": "transparent" });
                        }

                    }
                } else if ($(this).hasClass('tab-brand')) {
                    if ($(this).parent().find('a').hasClass('selected') && !$(this).hasClass('selected')) {
                        $(".menu-brand").show();
                        $(".menu-category").hide();
                        $(".tabs-category-brands a").removeClass('selected')
                        $('.tabs-category-brands .tab-brand').addClass('selected')
                    } else {
                        $(".menu-brand").show();
                        $(".menu-category").hide();
                        $(".tabs-category-brands .tab-brand").addClass('selected')
                        if ($("#page-right").css("left") == "0px") {
                            $("#page-right").stop().animate({ "left": "250px" }, 500, function() {
                                $(this).addClass('open');

                            });
                            $("#nav-mobile-left-back-button").css({ "color": "#3c3c3c" });

                        } else {
                            $("#page-right").stop().animate({ "left": "0px" }, 500, function() {
                                $(this).removeClass('open');
                                $(".tabs-category-brands .tab-brand").removeClass('selected')
                            });
                            $("#nav-mobile-left-back-button").css({ "color": "transparent" });
                        }
                    }
                }
            }
        });

        var c = 0;
        var moveRightCategory = 0;
        $("#nav-mobile-left .menu-category li a").click(function(event) {
            event.preventDefault();
            var close = $(this);
            if ($(this).parent().find('.sub-menu').length && !$(this).hasClass('open')) {

                $(this).addClass('open')

                c++;
                moveRightCategory = -250 * c;
                $(this).parent().find('.sub-menu').show();

                $(this).closest('.menu-category').stop().animate({ 'left': moveRightCategory }, 500, function() {

                    close.removeClass('open');

                });
            }
            var close = $(this);
            if ($(this).parent().find('.sub-menu').length && !$(this).hasClass('open')) {

                $(this).addClass('open')

                c++;
                moveRightCategory = -250 * c;
                $(this).parent().find('.sub-menu').show();

                $(this).closest('.menu-category').stop().animate({ 'left': moveRightCategory }, 500, function() {

                    close.removeClass('open');

                });
            }

        });

        var b = 0;
        var moveRightBrand = 0;
        $("#nav-mobile-left .menu-brand li a").click(function(event) {
            event.preventDefault();
            var close = $(this);
            if ($(this).parent().find('.sub-menu').length && !$(this).hasClass('open')) {

                $(this).addClass('open')

                b++;
                moveRightBrand = -250 * b;
                $(this).parent().find('.sub-menu').show();

                $(this).closest('.menu-brand').stop().animate({ 'left': moveRightBrand }, 500, function() {

                    close.removeClass('open');

                });
            }
            var close = $(this);
            if ($(this).parent().find('.sub-menu').length && !$(this).hasClass('open')) {

                $(this).addClass('open')

                b++;
                moveRightBrand = -250 * b;
                $(this).parent().find('.sub-menu').show();

                $(this).closest('.menu-brand').stop().animate({ 'left': moveRightBrand }, 500, function() {

                    close.removeClass('open');

                });
            }

        });
        $("#nav-mobile-left-back-button").click(function(event) {
            event.preventDefault();
            if ($(".tabs-category-brands .tab-category").hasClass('selected')) {
                if (c != 0) {
                    c--;
                    moveRightCategory = moveRightCategory + 250;
                    var string = "";
                    for (var subMenu = 0; subMenu < c + 1; subMenu++) {
                        string = string + ">.sub-menu";
                    }

                    $("#nav-mobile-left").find('.menu-category').stop().animate({ 'left': moveRightCategory }, 500, function() {
                        $("#nav-mobile-left .menu-category li" + string).hide();
                    });
                } else {

                    $("#nav-mobile-left-back-button").css({ "color": "transparent" });
                    if (c == 0) {
                        $("#page-right").stop().animate({ 'left': '0px' }, 500);
                        $(".tabs-category-brands .tab-category").removeClass('selected')
                    }
                }



            } else if ($(".tabs-category-brands .tab-brand").hasClass('selected')) {


                if (b != 0) {
                    b--;
                    moveRightBrand = moveRightBrand + 250;
                    var string = "";
                    for (var subMenu = 0; subMenu < b + 1; subMenu++) {
                        string = string + ">.sub-menu";
                    }

                    $("#nav-mobile-left").find('.menu-brand').stop().animate({ 'left': moveRightBrand }, 500, function() {
                        $("#nav-mobile-left .menu-brand li" + string).hide();
                    });
                } else {

                    $("#nav-mobile-left-back-button").css({ "color": "transparent" });
                    if (b == 0) {
                        $("#page-right").stop().animate({ 'left': '0px' }, 500);
                        $(".tabs-category-brands .tab-brand").removeClass('selected')
                    }
                }
            }

        });
    }

    function filter() {
        $(".filter-select-list a").click(function(event) {
            event.preventDefault();
            $(this).parent().find("ul").slideToggle();
        });

    }

    function raidoButton() {
        $('label').click(function(event) {
            $('label').each(function(index, el) {
                if ($(this).find('.jq-radio').hasClass('checked')) {
                    $(this).closest('label').addClass('checked');
                } else {
                    $(this).closest('label').removeClass('checked');
                }
            });

        });
        $('.select').click(function(event) {
            $('.select').each(function(index, el) {
                if ($(this).find('.jq-selectbox').hasClass('opened')) {
                    $(this).closest('.select').addClass('opened');
                } else {
                    $(this).closest('.select').removeClass('opened');
                }
            });

        });

    }

    function maskeInput() {
        $("input[type='tel']").mask("+7 (999) 999-99-99");
    }

    function mobileTabsCategory() {
        $("#category ul li a").click(function(event) {
            if ($(window).width() < 800) {
                event.preventDefault();
                if ($(this).next().length) {
                    $(this).next().slideToggle().parent().siblings().children('ul').filter(':visible').slideToggle();
                }
            }
        });

        $(window).resize(function(event) {
            if ($(window).width() > 800) {
                $("#category .list li ul").hide();
            }
        });

    }

    function mobileTabsFooter() {
        $('#footer #footer-bottom .footer-bottom-lists .footer-bootom-item .list h3.title').click(function(event) {
            $('#footer #footer-bottom .footer-bottom-lists .footer-bootom-item .list ul').slideUp('slow');

            if ($(this).closest(".footer-bootom-item").find("ul").is(':hidden')) {
                $(this).closest(".footer-bootom-item").find("ul").slideDown('slow');
            } else {
                $(this).closest(".footer-bootom-item").find("ul").slideUp('slow');
            }
            $(window).resize(function(event) {
                if ($(window).width() > 800) {
                    $('#footer #footer-bottom .footer-bottom-lists .footer-bootom-item .list ul').show();
                } else {
                    $('#footer #footer-bottom .footer-bottom-lists .footer-bootom-item .list ul').hide();

                }
            });
        });
    }

    function jQueryFormStyler() {
        $("input, select").styler();
    }

    function social() {
        $(".social-likes__widget").wrap('<div class="social-widget"></div>')
    }

    function MaxHeightBlocksSlider() {
        $(document).ready(function($) {
            setTimeout(function() {
                var Max_Height = 0;
                $(".products-slider .slider .slide .product-item").each(function(index, el) {
                    if ($(this).innerHeight() > Max_Height) {
                        Max_Height = $(this).innerHeight();
                    }
                });
                $(".products-slider .slider .slide .product-item").innerHeight(Max_Height + 100);
            }, 1000);
        });
    }

    function MaxHeightBlocksCatalog() {
        $(document).ready(function($) {
            setTimeout(function() {
                var Max_Height = 0;
                $(".products-catalog .products-catalog-items .product-item").each(function(index, el) {
                    if ($(this).innerHeight() > Max_Height) {
                        Max_Height = $(this).innerHeight();
                    }
                });
                $(".products-catalog .products-catalog-items .product-item").innerHeight(Max_Height + 100);
            }, 1000);
        });
    }

    function sliderSlick() {
        $("#main-slider .slider").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 10000,
            autoplay: true,
            arrows: true,
        });

        $("#question-slider .slider").slick({
            dots: false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1026,
                settings: {
                    arrows: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });

        $(".products-slider .slider").slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });

        $("#recently-watched-slider .slider").slick({
            dots: false,
            infinite: false,
            slidesToShow: 10,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 790,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });

        $("#brands-slider .slider").slick({
            dots: false,
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 790,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });

        $('.product-single .thumbnail-main .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            responsive: [{
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1026,
                settings: {
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
        $('.product-single .thumbnail-pagination .slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            responsive: [{
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1026,
                settings: {
                    arrows: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });

    }
});
