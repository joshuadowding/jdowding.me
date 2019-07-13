$(document).ready(function () {
    $("#theme-toggle #dark").hide();
    $("#menu-toggle #close").hide();

    $("#theme-toggle").click(function () {
        if ($("#theme-toggle #dark").is(":hidden")) {
            $(":root").addClass("theme-dark");

            $("#theme-toggle #dark").show();
            $("#theme-toggle #light").hide();
        }
        else {
            $(":root").removeClass("theme-dark");

            $("#theme-toggle #dark").hide();
            $("#theme-toggle #light").show();
        }
    });

    $("#menu-toggle").click(function () {
        if ($("#menu-toggle #close").is(":hidden")) {
            $("#menu-toggle #close").show();
            $("#menu-toggle #open").hide();
        }
        else {
            $("#menu-toggle #close").hide();
            $("#menu-toggle #open").show();
        }
    });
});
