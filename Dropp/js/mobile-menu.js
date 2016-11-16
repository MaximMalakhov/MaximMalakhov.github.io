/*открытие меню при нажатии на гамбургер*/
$('.menu__hamburger').click(function(){
	if ( $(this).parent().hasClass( "menu_active" ) ) { 
		$(this).parent().removeClass("menu_active")
	} else {
		$(this).parent().addClass("menu_active")
	}
});

/*закрытие меню при нажатии на ссылку*/
$('.menu__link').click(function(){
 if ($(".menu").hasClass( "menu_active")) { 
  $(".menu").removeClass("menu_active");
 } else {
  $(".menu").addClass("menu_active");
 }
});