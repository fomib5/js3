$(document).ready(function(){
    search = function(){
        var input = $(".input").val();
        var keyKuruma = $(".key-kuruma").text();
        var keyAozora = $(".key-aozora").text();
        var keyAsagao = $(".key-asagao").text();
        var keyUma = $(".key-uma").text();
        
        if(keyKuruma.indexOf(input) != -1){
            $(".kuruma").removeClass("hidden");
        }
        else{
            $(".kuruma").addClass("hidden");
        }
        if(keyAozora.indexOf(input) != -1){
            $(".aozora").removeClass("hidden");
        }
        else{
            $(".aozora").addClass("hidden");
        }
        if(keyAsagao.indexOf(input) != -1){
            $(".asagao").removeClass("hidden");
        }
        else{
            $(".asagao").addClass("hidden");
        }
        if(keyUma.indexOf(input) != -1){
            $(".uma").removeClass("hidden");
        }
        else{
            $(".uma").addClass("hidden");
        }
    };
    $(".input").on("input",search);
});
