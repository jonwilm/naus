(function () {
	/*Animates WOW*/
	new WOW().init();
})();

(function () {
	/*Scroll*/
	smoothScroll.init({
		selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
		selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
		speed: 1500, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		offset: 66, // Integer. How far to offset the scrolling anchor location in pixels
		callback: function (anchor, toggle) {} // Function to run after scrolling
	});
})();

(function () {
	/*Hide navbar onClick*/
	$(".navbar-nav li a").click(function (event) {
		if (!$(this).parent().hasClass('dropdown'))
			$(".navbar-collapse").collapse('hide');
	});
	$(".navbar-brand").click(function (event) {
		if (!$(this).parent().hasClass('dropdown'))
			$(".navbar-collapse").collapse('hide');
	});
})();

(function () {
	/*Height Home*/
	$(document).ready(function ($) {
		var ventana_alto = $(window).height();
		$('#home').css("height", ventana_alto - 65);
		$(window).resize(function () {
			var ventana_alto = $(window).height();
			$('#home').css("height", ventana_alto - 65);
		});
	});
})();

(function () {
	/**/
	$(document).ready(function ($) {
		var content_home = $('#content-home').height();
		$('#carousel-inner-home').css("height", content_home);
		$(window).resize(function () {
			var content_home = $('#content-home').height();
			$('#carousel-inner-home').css("height", content_home);
		});
	});
})();

(function () {
	/*Button Go Top*/
	$(document).ready(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#go-top').fadeIn('slow');
			} else {
				$('#go-top').fadeOut('slow');
			}
		});
	});
})();

(function () {
	/*Popovers*/
	$(function () {
		$("#chat-popover").popover({
			html: true,
			placement: "left",
			trigger: "click",
			content: function () {
				return $("#chat-popover-content").html();
			}
		});
		$("#testimonio-popover").popover({
			html: true,
			placement: "left",
			trigger: "click",
			content: function () {
				return $("#testimonio-popover-content").html();
			}
		});
	});
})();

(function () {
	/*Testimonios y Chat*/
	$(document).ready(main);
	var contadorTest = 'TestClose';
	var contadorChat = 'ChatClose';

	function main() {
		$('#btn-testimonio').click(function () {
			if (contadorTest == 'TestClose') {
				$('#testimonio').animate({
					right: '26px'
				}, 1000);
				$('#icontestimonio').removeClass('fa-plus');
				$('#icontestimonio').addClass('fa-minus');
				contadorTest = 'TestOpen';
				//  				contadorChat = 'ChatClose';
				//  				$('#chat').animate({
				//  					right: '-100%'
				//  				}, 1000);
			} else if (contadorTest == 'TestOpen') {
				$('#testimonio').animate({
					right: '-100%'
				}, 1000);
				$('#icontestimonio').removeClass('fa-minus');
				$('#icontestimonio').addClass('fa-plus');
				contadorTest = 'TestClose';
			}
		});
		//  		$('#btn-chat').click(function () {
		//  			if (contadorChat == 'ChatClose') {
		//  				$('#chat').animate({
		//  					right: '26px'
		//  				}, 1000);
		//  				contadorChat = 'ChatOpen';
		//  				contadorTest = 'TestClose';
		//  				$('#testimonio').animate({
		//  					right: '-100%'
		//  				}, 1000);
		//  			} else {
		//  				contadorChat = 'ChatClose';
		//  				$('#chat').animate({
		//  					right: '-100%'
		//  				}, 1000);
		//  			}
		//  		});
	};
})();

(function () {
	/*Carousel*/
	$('.carousel').carousel()
})();

(function () {
	/*Enviar Formulario*/
	$('#formcontact').submit(function (e) {
		e.preventDefault();
		$('#modalmail').find('*').removeClass();
		$('#modalmailcss').addClass('resultmailcss');
		$('#modalmailcss').children('p').addClass('loadingmail').html('Enviando Correo');
		$('#modalmailcss').children('div').addClass('loader');
		$('#modalmail').show(700);
		var formData = new FormData(document.getElementById("formcontact"));
		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: formData,
			dataType: "JSON",
			cache: false,
			contentType: false,
			processData: false,
			success: function (data) {
				console.log(data)
				if (data.file == "nopdf") {
					// Formato invalido
					$('#modalmail').hide(700);
					setTimeout(function () {
						$('#modalmail').find('*').removeClass();
						$('#modalmailcss').addClass('mailnopdfcss');
						$('#modalmailcss').children('p').addClass('loadingmail').html(data.message);
						$('#modalmailcss').children('div').addClass('iconmail');
						$('#modalmailcss').find('span').addClass('fa fa-3x fa-check-circle-o');
						$('#modalmail').show(700);
					}, 2000)
					setTimeout(function () {
						$('#modalmail').hide(700);
					}, 8000)
				} else {
					if (data.status == 'true') {
						// Correo Enviado
						$('#modalmail').hide(700);
						setTimeout(function () {
							$('#modalmail').find('*').removeClass();
							$('#modalmailcss').addClass('mailsendcss');
							$('#modalmailcss').children('p').addClass('loadingmail').html(data.message);
							$('#modalmailcss').children('div').addClass('iconmail');
							$('#modalmailcss').find('span').addClass('fa fa-3x fa-check-circle-o');
							$('#modalmail').show(700);
						}, 2000)
						setTimeout(function () {
							$('#modalmail').hide(700);
						}, 6000)
						document.getElementById('formcontact').reset();
					} else if (data.status == "false") {
						// Correo NO Enviado
						$('#modalmail').hide(700);
						setTimeout(function () {
							$('#modalmail').find('*').removeClass();
							$('#modalmailcss').addClass('mailnosendcss');
							$('#modalmailcss').children('p').addClass('loadingmail').html(data.message);
							$('#modalmailcss').children('div').addClass('iconmail');
							$('#modalmailcss').find('span').addClass('fa fa-3x fa-times-circle-o');
							$('#modalmail').show(700);
						}, 2000)
						setTimeout(function () {
							$('#modalmail').hide(700);
						}, 6000)
						document.getElementById('formcontact').reset();
					}
				}
			},
			error: function (result) {
				$('#modalmail').hide(700);
				setTimeout(function () {
					$('#modalmail').find('*').removeClass();
					$('#modalmailcss').addClass('mailerrorcss');
					$('#modalmailcss').html('<p></p><div><i></i></div><span id="closeerrormail" class="fa fa-times"></span>');
					$('#modalmailcss').children('p').addClass('loadingmail').html('Ha ocurrido un error, por favor comunicate con nosotros <br> <a href="mailto: naustec@gmail.com">naustec@gmail.com</a>');
					$('#modalmailcss').children('div').addClass('iconmail');
					$('#modalmailcss').find('i').addClass('fa fa-2x fa-exclamation-triangle');
					$('#modalmail').show(700);
				}, 2000)
				document.getElementById('formcontact').reset();
				$('#modalmailcss').on('click', 'span#closeerrormail', function () {
					$('#modalmail').hide(700);
				})
			}
		})
		return false;
	});
})();


(function () {
	(function ($, window, undefined) {
		// Load Google Fonts Asynchronously with two sample fonts (Roboto Condensed and Lato)
		window.WebFontConfig = {
			google: {
				families: ['Roboto+Slab:400,700:latin', 'Ubuntu:400,700:latin']
			}
		};
		(function () {
			var wf = document.createElement('script');
			wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				'://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		})();
	})(jQuery, window);
})();
