$(document).ready(function() {
    $('#search').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.song').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
