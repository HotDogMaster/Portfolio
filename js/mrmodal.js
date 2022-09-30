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
    
})