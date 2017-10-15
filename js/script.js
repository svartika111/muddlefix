$(window).scroll(function() {
    if($(window).scrollTop()>1){
      $(".__nav").css("height", "50px");
      $(".__nav").css("background", "#fff");
      $(".__nav").css("color", "#1e3c72");
      $(".__nav").css("border-bottom", "1px solid #1e3c72");
    }
    else{
      $(".__nav").css("height", "100px");
      $(".__nav").css("background", "transparent");
      $(".__nav").css("color", "#ffffff");
      $(".__nav").css("border", "transparent");
    }
});