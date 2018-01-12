$(document).ready(function() {
    $("#kirby-theme").click(function() {
        $("body").addClass("kirby-body");
        $(".panel-body").addClass("kirby-panel-body");
        // $(".panel-heading").addClass("kirby-panel-heading");
        $(".panel-default>.panel-heading").addClass("kirby-panel-heading");
        $("#kirby-theme").hide();
        $("#light-theme").show();
    });
    $("#light-theme").click(function() {
        $("body").removeClass("kirby-body");
        $(".panel-body").removeClass("kirby-panel-body");
        // $(".panel-heading").addClass("kirby-panel-heading");
        $(".panel-default>.panel-heading").removeClass("kirby-panel-heading");
        $("#kirby-theme").show();
        $("#light-theme").hide();
    });
}); 