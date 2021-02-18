$(function() {
	$('.owl-carousel').owlCarousel({
		loop:4,	//Бесконечный цыкл слайдов
		margin:10, //Margin справа в пикс
		nav:true,	//Кнопки переключения
		navText:['&#10132;','&#10132;'],	
		dots:true, //Точки для слайдов
		responsive:{
            0:{
                items:1
            },
            600:{
                items:2.5
            },
            1000:{
                items:2.5
            }
        } //Адаптив отображение количествo слайдов
	});
});
