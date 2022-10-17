$(function(){
    $(document).ready(function(){
        $(".pc2_des").hide();
        $(".fpc").click(function(){
          $(this).next().stop().slideToggle(300);
          $(".fpc").not(this).next().slideUp(300);
          return false;
        });
        $(".fpc").eq(0).trigger("click");
      });
      $(".fpc1").click(function(){
        $(".pc_video").css('display','none');
        $(".vid1").css('display','block')
      })
      $(".fpc2").click(function(){
        $(".pc_video").css('display','none');
        $(".vid2").css('display','block')
      })
      $(".fpc3").click(function(){
        $(".pc_video").css('display','none');
        $(".vid3").css('display','block')
      })
      $(".pack").click(function(){
        window.open('https://hotdogmaster.github.io/packagep/', 'package', 'top=100, left=400, width=425, height=800, status=no, menubar=no, toolbar=no, resizable=no');
      })
})