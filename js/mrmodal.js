$(function(){
    $("#myBtn").on("click", function(){
        $("#overlay").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(".close").on("click", function(){
        $("#overlay").css({ visibility:"hidden", 
                                   opacity:0 });
    });

    $(document).on("click", function(e){  
      if( $("#overlay").is(e.target)) {
       $("#overlay").css({ visibility:"hidden", 
                                   opacity:0 });
    }
    });
    $(".ban1").on("click", function(){
        $("#banner1").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(".ban2").on("click", function(){
        $("#banner2").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(".ban3").on("click", function(){
        $("#banner3").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(".ban4").on("click", function(){
        $("#banner4").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(".ban5").on("click", function(){
        $("#banner5").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(".ban6").on("click", function(){
        $("#banner6").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(".ban7").on("click", function(){
        $("#banner7").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(".ban8").on("click", function(){
        $("#banner8").css({ visibility:"visible", 
                                   opacity:1 });
    });
    $(document).on("click", function(e){  
        if( $(".banner_modals").is(e.target)) {
         $(".banner_modals").css({ visibility:"hidden", 
                                     opacity:0 });
      }
      });
})