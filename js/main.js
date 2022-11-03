//document.getElementById("btn-one").innerHTML = "";
$(document).ready(function (){
    $(window).resize(function(){
        $(" .my-btns").css("display", "block")
    });

    $("#btn-one").click(function (){
        alert("Doing something");
    });
    
    $("#p-one").click(function (){
        //alert("Doing something - p1");
        //document.getElementById("p-one").innerHTML = "Updated"
        $("#p-one").text("Simulated");
    });
    
    $(".p-two").click(function (){
        $("Doing something - p2");
    });

    $("#img").hover(function (){
        $(this).mouseenter(function(){
            $("#img-span").show();
        });

        $(this).mouseleave(function(){
            $("#img-span").hide();
        });
    });
});

$(selector).userAction(callBack);