jQuery(document).scroll(function(){
  if (jQuery(this).scrollTop()>=53) {
    jQuery('header').css('background','white');
    jQuery('ul.navbar-nav a').css('color','grey');    
  } else if (jQuery(this).scrollTop()<53) {
    jQuery('header').css('background','transparent');
    jQuery('ul.navbar-nav a').css('color','white');    
  };
})


// jQuery(document).scroll(function() {
//   var dHeight = jQuery(this).height()-jQuery(window).height();
//   if (dHeight >= jQuery(this).scrollTop()) {
//     jQuery('nav').css('background', 'rgba(53,145,204,' + jQuery(this).scrollTop() / dHeight + ')');
//   }
// });