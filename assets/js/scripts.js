"use strict";
const buttons = document.querySelectorAll('.button');

var Navbar = function () {
	function dark() {
		$(".navbar").removeClass("navbar-light").addClass("navbar-dark")
	}
	function light() {
		$(".navbar").removeClass("navbar-dark").addClass("navbar-light")
	}

	function scrollMenu() {
		5 < $(window).scrollTop() ? dark() : light()
	}
	scrollMenu(), $(window).on({
		scroll: function () {
			scrollMenu()
		},
	})
}(),

	Dishes = function () {
		var e = $(".carousel");
		e.length && e.each(function () {
			$(this).flickity({
				cellAlign: 'left',
				contain: true
			})
		})
	}()


$(document).ready(function () {
	listaPicaPica();
	apartatCarta();
	galeria();
	
});

function galeria(){
	$('.grid').isotope({
		// options
		itemSelector: '.section_gallery__grid__item',
		//layoutMode: 'fitRows'
	  });
	  var e = $(".section_gallery__grid");
	  e.length && e.each(function () {
		  var e = $(this).isotope({
			  itemSelector: ".section_gallery__grid__item"
		  });
		  e.imagesLoaded().progress(function () {
			  e.isotope("layout")
		  })
	  })
}

function apartatCarta(){
	$(".mybutton").click(function () {
		//alert("The paragraph was clicked.");
		buttons.forEach(button => button.classList.remove('active'));
		this.classList.add('active');
		if ($(this).attr("id") == "picapica") {
			console.log("this is picapica");
			listaPicaPica();
		} else if ($(this).attr("id") == "primers") {
			console.log("this is primers");
			listaPrimers();
		} else if ($(this).attr("id") == "segons") {
			console.log("this is segons");
			listaSegons();
		} else {
			console.log("this is postre");
			listaPostres();
		}
	});

}

function listaPicaPica() {
	$.ajax({
		url: 'assets/carta.json',
		type: 'get',
		datatype: 'json',
		beforeSend: function () {
			$("#contenidos").html("Procesando, espere por favor...");
		},
		success: function (data) {
			//var resposta=JSON.parse(data);
			console.log(data);
			var resposta = data;
			console.log(resposta);
			$("#contenidos").empty();
			$.each(resposta.picapica, function (index, element) {
				$("#contenidos").append('<div class="item"><div class="item__header"><h3 class="item__title">'+ element.titol +'</h3><span class="item__dots"></span><span class="item__price"></span></div></div>');
				//$("#contenidos").append('<p>'+element.titol+'</p>');
			});
		},
		error: function (e) {
			//called when there is an error
			console.log(e.message);
			$("#contenidos").html("Ha habido un error " + e.message);
		}

	});
}

function listaPrimers() {
	$.ajax({
		url: 'assets/carta.json',
		type: 'get',
		datatype: 'json',
		beforeSend: function () {
			$("#contenidos").html("Procesando, espere por favor...");
		},
		success: function (data) {
			//var resposta=JSON.parse(data);
			console.log(data);
			var resposta = data;
			console.log(resposta);
			$("#contenidos").empty();
			$.each(resposta.primers, function (index, element) {
				$("#contenidos").append('<div class="item"><div class="item__header"><h3 class="item__title">' + element.titol + '</h3><span class="item__dots"></span><span class="item__price"></span></div><p class="item__description">' + element.descripcio + '</p></div>');
				//$("#contenidos").append('<p>'+element.titol+'</p>');
			});
		},
		error: function (e) {
			//called when there is an error
			console.log(e.message);
			$("#contenidos").html("Ha habido un error " + e.message);
		}

	});
}

function listaSegons() {
	$.ajax({
		url: 'assets/carta.json',
		type: 'get',
		datatype: 'json',
		beforeSend: function () {
			$("#contenidos").html("Procesando, espere por favor...");
		},
		success: function (data) {
			//var resposta=JSON.parse(data);
			console.log(data);
			var resposta = data;
			console.log(resposta);
			$("#contenidos").empty();
			$.each(resposta.segons, function (index, element) {
				$("#contenidos").append('<div class="item"><div class="item__header"><h3 class="item__title">' + element.titol + '</h3><span class="item__dots"></span><span class="item__price"></span></div><p class="item__description">' + element.descripcio + '</p></div>');
				//$("#contenidos").append('<p>'+element.titol+'</p>');
			});
		},
		error: function (e) {
			//called when there is an error
			console.log(e.message);
			$("#contenidos").html("Ha habido un error " + e.message);
		}

	});
}

function listaPostres() {
	$.ajax({
		url: 'assets/carta.json',
		type: 'get',
		datatype: 'json',
		beforeSend: function () {
			$("#contenidos").html("Procesando, espere por favor...");
		},
		success: function (data) {
			//var resposta=JSON.parse(data);
			console.log(data);
			var resposta = data;
			console.log(resposta);
			$("#contenidos").empty();
			$.each(resposta.postres, function (index, element) {
				$("#contenidos").append('<div class="item"><div class="item__header"><h3 class="item__title">' + element.titol + '</h3><span class="item__dots"></span><span class="item__price"></span></div></div>');
				//$("#contenidos").append('<p>'+element.titol+'</p>');
			});
		},
		error: function (e) {
			//called when there is an error
			console.log(e.message);
			$("#contenidos").html("Ha habido un error " + e.message);
		}

	});
}





