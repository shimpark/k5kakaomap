$(document).ready(function(){

    var modalPopup = $('.modal-popup');
    var modalWrap = $('.modal-wrap');
    var showModal = $('.show-modal');
    var closeModal = $('.close-modal');

    showModal.on('click', function(e) {
        e.preventDefault();
        modalWrap.addClass('active');
        modalPopup.fadeIn(100);
        $('html').addClass('fixed');
    });
    closeModal.on('click', function(e) {
        e.preventDefault();
        modalWrap.removeClass('active');
        // modalWrap.find('iframe').attr('src','');
        modalPopup.fadeOut(100);
        $('html').removeClass('fixed');
    });

    if(modalPopup.length == 1) {
        $(window).bind('click', function(e){
            if (e.target == modalPopup.get(0)) {
                // modalWrap.find('iframe').attr('src','');
                modalPopup.hide();
                $('html').removeClass('fixed');
            }
        });
    }

});