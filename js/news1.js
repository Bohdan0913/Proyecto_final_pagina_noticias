
var contador=1;
var temporizador = setInterval(myTimer, 1000);

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
var temporizador1 = setInterval(myTimer1, 1000);

var d=[];
d[0]="img/publim1.jpg";
d[1]="img/publim2.jpg";
d[2]="img/publim3.jpg";

function myTimer1(){
	contador1++;
	$("#publi1 img").attr('src',d[contador1-1]);;
	if (contador1==3) contador1=0;
}