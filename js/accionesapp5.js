// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		});//Cierre del tap de beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);//Va a vibrar 2 segundos.
		});//Cierre del tap de vibrato
	}, false);//Cierre del deviceready
});//Cierre de la función principal