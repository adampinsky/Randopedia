$(document).ready(function() {

    //------------//
    // SEARCH BAR //
    //------------//
    $('#search-label').on('click', function() {

        $('#search-box').focus();
        return false;
    });
    
    $('#search-label').mouseover(function() {
        $('#search-box').stop().animate({
            width : '500px',
            paddingLeft : '5px',
            borderWidth : '3px',
            borderStyle : 'solid',
            borderColor : '#373A3C'
        }, 'fast');
        $('#search-bar').animate({
            left : '-50px'
        }, 'fast');
    });
    
    $('#search-label').mouseout(function() {
        if(!$('#search-box').is(':focus')) {
            $('#search-box').stop().animate({
                width : '0px',
                border : 'none',
                padding : '0'
            }, 'fast');
            $('#search-bar').animate({
            left : '0'
        }, 'fast');
        }
    });
        
    //---------------//
    // Submit Button //
    //---------------//
    $('#search-submit').on('click', function() {
        var searchTerm = $('#search-box').val();
        
        if(searchTerm.length > 0) {
            var apiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=wikiCallback';
            
            $.ajax({
                url :  apiUrl,
                dataType : 'jsonp',
                success : function(response) {
                    window.open('https://en.wikipedia.org/wiki/' + response[1][0]);
                }
            });
        } else {
            window.open('https://en.wikipedia.org/wiki/Special:Random');
        }
    });
});