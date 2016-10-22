$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();

    $('.js-anim').on('mouseenter', function(e){
        startAnimation($('#'+this.dataset.target)[0]);
    });

    $('.js-anim').on('mouseleave', function(e){
        stopAnimation($('#'+this.dataset.target)[0]);
    });

    $('.js-citymap').on('mouseenter', function(){
        $('.city-nav').addClass('active');
        $('.city-nav__link').removeClass('active');
        $('.city-nav__' + this.dataset.link).addClass('active');

        if (!$(this).hasClass('current') && !$(this).parent().hasClass('current')){
            startAnimation($('.city-nav__' + this.dataset.link + ' .city-nav__img')[0]);
        }
    });

    $('.js-citymap').on('mouseleave', function(){
        $('.city-nav').removeClass('active');
        $('.city-nav__' + this.dataset.link).removeClass('active');

        if (!$(this).hasClass('current') && !$(this).parent().hasClass('current')){
            stopAnimation($('.city-nav__' + this.dataset.link + ' .city-nav__img')[0]);
        }
    });


    $('.menu-bar').on('mouseenter', function(){
        $(this).addClass('hover');
    });

    $('.menu-bar').on('mouseleave', function(){
        $(this).removeClass('hover');
    });


    citynavOffset = $('.city-nav').offset();

    $('.menu-bar').headroom({
        offset : citynavOffset.top + $('.city-nav').height()*(1/3),
        tolerance : 0,
        classes : {
            top : "menu-bar--disabled",
            notTop : "menu-bar--enabled"
        }
    });


    $('a[href=#top]').on('click', function(e){
        $("html, body").animate({
         scrollTop:0
        },"slow");

        e.preventDefault();
    });

    $('#mail-list-signup').submit(function(e){
        e.preventDefault();
        $(this).closest('.result').removeClass('error').removeClass('success').html('<i class="sprite  sprite--loading"></i>');

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            cache       : false,
            dataType    : 'json',
            error       : function(err) {
                msg = parseSendInBlueSignupError(err.result.result, $('#mail-list-signup .email').val());
                $('#mail-list-signup .result').addClass('error');
                $('#mail-list-signup .result').html(msg);
            },
            success     : function(data) {
                if (data.result.result == 'success'){
                    $('#mail-list-signup .result').removeClass('error').addClass('success');
                    $('#mail-list-signup .result').html('Almost finished...<br>Please check your inbox for a link to confirm your address.');
                }
                else {
                    msg = parseSendInBlueSignupError(data.result.result, $('#mail-list-signup .email').val());
                    $('#mail-list-signup .result').removeClass('success').addClass('error');
                    $('#mail-list-signup .result').html(msg);
                }
            }
        });
    });

    $(document).on('opening', '.js-mail-list-signup', function () {
      $('#mail-list-signup .result').removeClass('success').removeClass('error').html("");
      $('#mail-list-signup .email').val("").focus();
    });


    $('.js-share-this').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("active");
    });

    var $grid = $('.js-shows').imagesLoaded( function() {
        $grid.isotope({
            itemSelector: '.grid__item',
            layoutMode: 'masonry'
        });
    });

    $("[data-share]").on('click', function(e){
        e.preventDefault();
        url = $(this).attr("href");

        window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    });
});

function parseSendInBlueSignupError(originalMsg, email)
{
    msg = '';

    if (originalMsg == 'invalidEmail') {
        msg = "Invalid email address. Please try again.";
    }
    else if (originalMsg == 'emailExist') {
        msg = email + ' is already subscribed.';
    }
    else {
        msg = 'There was an error subscribing this address. Please try again later.';
    }

    return msg;
}

function startAnimation(target)
{
    if (target.dataset.preloaded){
        newSrc = target.src.substr(0, target.src.indexOf('.gif')) + '-anim.gif';
        target.src = newSrc;
    }
}

function stopAnimation(target)
{
    if (target.dataset.preloaded){
        if (target.src.indexOf('-anim.gif') > -1){
            newSrc = target.src.substr(0, target.src.indexOf('-anim.gif')) + '.gif';
            target.src = newSrc;
        }
    }
}
