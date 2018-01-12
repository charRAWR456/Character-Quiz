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
    $("#submit-button").click(function() {
        var sonic = 0;
        var mario = 0;
        var samus = 0;
        var kirby = 0;
        
        if ($("input:radio[name=activity]:checked").val() == "sonic") {
            sonic += 1;
        }
        if ($("input:radio[name=activity]:checked").val() == "mario") {
            mario += 1;
        }
        if ($("input:radio[name=activity]:checked").val() == "samus") {
            samus += 1;
        }
        if ($("input:radio[name=activity]:checked").val() == "kirby") {
            kirby += 1;
        }
        // 
        if ($("input:radio[name=color]:checked").val() == "sonic") {
            sonic += 1;
        }
        if ($("input:radio[name=color]:checked").val() == "mario") {
            mario += 1;
        }
        if ($("input:radio[name=color]:checked").val() == "samus") {
            samus += 1;
        }
        if ($("input:radio[name=color]:checked").val() == "kirby") {
            kirby += 1;
        }
        // 
        if ($("input:radio[name=animal]:checked").val() == "sonic") {
            sonic += 1;
        }
        if ($("input:radio[name=animal]:checked").val() == "mario") {
            mario += 1;
        }
        if ($("input:radio[name=animal]:checked").val() == "samus") {
            samus += 1;
        }
        if ($("input:radio[name=animal]:checked").val() == "kirby") {
            kirby += 1;
        }
        // 
        if ($("input:radio[name=food]:checked").val() == "sonic") {
            sonic += 1;
        }
        if ($("input:radio[name=food]:checked").val() == "mario") {
            mario += 1;
        }
        if ($("input:radio[name=food]:checked").val() == "samus") {
            samus += 1;
        }
        if ($("input:radio[name=food]:checked").val() == "kirby") {
            kirby += 1;
        }
        // 
        if ($("input:radio[name=videoGame]:checked").val() == "sonic") {
            sonic += 1;
        }
        if ($("input:radio[name=videoGame]:checked").val() == "mario") {
            mario += 1;
        }
        if ($("input:radio[name=videoGame]:checked").val() == "samus") {
            samus += 1;
        }
        if ($("input:radio[name=videoGame]:checked").val() == "kirby") {
            kirby += 1;
        }
        
    });
}); 