// JavaScript Document
$(document).ready(function(e) {
    //watch id se refiere a actual
	
	var watchID=null;
	document.addEventListener("deviceready".Dispositivo_Listo,false);
	
	//cuando esta listo el dispositivo
	function Dispositivo_Listo(){
		comienza();
	}
	
	//empieza la observacion de la aceleracion
	function Comienza(){
		
		//Actualiza la aceleracion cada 2 segundos
		
		var opciones={frecuency:2000};
		
		watchID=navigator.accelerometer.watchAcceleration(Correcto,Error,opciones);
		navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
	}
	//Detiene la observacion de la aceleracion
	
	function Detente(){
		if(watchID) {
			navigator.accelerometer.clearWatch (watchID);
			watchID=null;
		}
	}
	//correcto:Toma una Captura de la aceleracion
	function Correcto(acceleracion){
		var element=document.getElementById('acelerometro');
		
		element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+
		'Aceleracion en Y:'+acceleration.y+'<br/>'+
		'intervalo:'+acceleration.timestamp+'<br/>';
	}
	
	//error:falla al obtener la aceleracion
	function Error(){
		alert('Error!');
	}
	//exito al localizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='latitud:' +posicion.coords.latitude +'<br/>' +
		'Longitud:' +posicion.coords.longitude +'<br/>' +
		'Precision:' +posicion.coords.accuracy +'<br/>' +
		'Intervalo:' +posicion.timestamp +'<br/>';
	}
	//error en la geolocalizacion
	function ErrorLocalizacion(error){
		alert('codigo:' + error.code +'\n' +
		'mensaje:'+ error.message+ '\n');
	}
});

