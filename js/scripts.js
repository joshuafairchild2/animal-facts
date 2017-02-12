$(function() {
    // $('.turtles').hide();
    // $('.snakes').hide();
    // $('.insects').hide();

    $("input[name=animals-button]:radio").click(function () {
        if ($('input[name=animals-button]:checked').val() == "Turtles") {
            $('#snakes').hide();
            $('#insects').hide();
            $('#turtles').show();

        } else if ($('input[name=animals-button]:checked').val() == "Snakes") {
            $('#turtles').hide();
            $('#insects').hide();
            $('#snakes').show();

        } else if ($('input[name=animals-button]:checked').val() == "Insects") {
            $('#turtles').hide();
            $('#snakes').hide();
            $('#insects').show();

        }
    });
});
