$(document).ready(function() {
    function revealSearchBox() {
        $('#search-box').animate({width: '60%'});
        $('#search-submit').animate({});
    }

    function hideSearchBox() {
        $('#search-box').animate({width: '0'});
    }

    $('#search-label').mouseenter(revealSearchBox);
    $('#search-label').mouseleave(hideSearchBox);
});