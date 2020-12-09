let button = document.getElementById("profile_button");
button.addEventListener("click", function (){



    $('.js-modal-open').on('click', function() {
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click', function() {
        $('.js-modal').fadeOut();
        return false;
    });s
})