//variables

//windows onload / document ready
// los eventos se definen al cargar la página


//--------------------------



//$(function() {
		
//	$("button").click(function(){
//	alert("hola");
//	}
//	);
	
//	});


//------------------------

var nnoticias=1;
var maxnoticias=2;


//con JSON:
// dentro de windows onload

//Intento del Scroll:
$(function(){

$(window).scroll(function(){
		
		console.log("ScrollTop: "+ $(window).scrollTop()+
			50 + $(window).height() +
		50 + $(document).height() + 50);

		if($(window).scrollTop() + $(window).height() + 50 >= $(document).height()){
		//alert("bottom!");
			if (nnoticias <= maxnoticias){
			$.getJSON("https://rawgit.com/Bohdan0913/Proyecto_final_pagina_noticias/master/data/data"+nnoticias+".json", function( nombres ){
				nnoticias++;
				mostrarNombres( nombres );
			});
		}else{
			//MENSAJE
		};
			
			
		};
	});
	
	
	function mostrarNombres(nombres){
	
	$.each(nombres, function( i, nombre){
		$("#noticias").append('<div class="col-sm-4 col1 arreglo"><div class="titulo"><h3><u>'+nombre.titulo+'</u></h3></div><div class="descripcion"><p>'+nombre.descripcion+'</p></div><div class="imagen"><img id="imghorizontal" src="img/'+nombre.imagen+'" alt="imagen 2" class="img-responsive center-block"></div><div class="fecha">'+nombre.fecha+'</div></div>');
	});
	
}	

});
	
	
	







$(function(){
	$("button").click(function(){
		if (nnoticias <= maxnoticias){
			//alert("aleerta");
			//$("#contenedor").append("<p>hola?</p>"); });
			$.getJSON("https://rawgit.com/Bohdan0913/Proyecto_final_pagina_noticias/master/data/data"+nnoticias+".json", function( nombres ){
				nnoticias++;
				mostrarNombres( nombres );
			});
		}else{
			//MENSAJE
		};
		
	});

	
// funciones

function mostrarNombres(nombres){
	
	$.each(nombres, function( i, nombre){
		$("#noticias").append('<div class="col-sm-4 col1 arreglo"><div class="titulo"><h3><u>'+nombre.titulo+'</u></h3></div><div class="descripcion"><p>'+nombre.descripcion+'</p></div><div class="imagen"><img id="imghorizontal" src="img/'+nombre.imagen+'" alt="imagen 2" class="img-responsive center-block"></div><div class="fecha">'+nombre.fecha+'</div></div>');
	});
	
}	
	
	
//	$.each( jsonObject, function( i, empleado ) {
	//	$("div").append( "<li id'" + i + " '> " + empleado.firstName+" "+empleado.lastName+"<br>") //mete todo lo que hay en .append dentro del "div"
		//$("div").append(empleado.firstName+"<br>")
		//$("div").append(empleado.lastName)
	});
//}

var contador=1;
var temporizador = setInterval(myTimer, 3000);

var c=[];
c[0]="img/publid1.jpg";
c[1]="img/publid2.jpg";
c[2]="img/publid3.jpg";

function myTimer(){
	contador++;
	$("#publi img").attr('src',c[contador-1]);;
	if (contador==3) contador=0;
};;


var contador1=1;
var temporizador1 = setInterval(myTimer1, 3000);

var d=[];
d[0]="img/publim1.jpg";
d[1]="img/publim2.jpg";
d[2]="img/publim3.jpg";

function myTimer1(){
	contador1++;
	$("#publi1 img").attr('src',d[contador1-1]);;
	if (contador1==3) contador1=0;
};;







var contador2=1;
var temporizador1 = setInterval(myTimer2, 7000);

var a=[];
a[0]="img/fondo6.jpg";
a[1]="img/fondo12.jpg";
a[2]="img/fondo10.jpg";
a[3]="img/fondo11.jpg";

function myTimer2(){
	contador2++;
	$(".jumbotron img").attr('src',a[contador2-1]);;
	if (contador2==4) contador2=0;
}