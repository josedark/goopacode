
var app = angular.module( 'appcontrol',['ngRoute']);


app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

$scope.setActive = function(Opcion){

		$scope.mIntroduccion   = "";
		$scope.mParametros     = "";
    $scope.mAlgoritmo      = "";
    $scope.mEjemplos       = "";
		$scope.mAplicación     = "";
		$scope.mBibliografia   = "";
		$scope[Opcion] = "active";
    console.log("joa");
   
}
  



}]);



app.config( function( $routeProvider ){

$routeProvider
   
  .when('/',{
  	    templateUrl: '/parciales/introduccion.html',
        controller: 'introduccionCtrl'
     })
 
  .when('/parametro',{
        templateUrl: '/parciales/parametro.html',
        controller: 'parametroCtrl'
    })
   .when('/ejemplo',{
        templateUrl: '/parciales/ejemplo.html',
        controller: 'ejemploCtrl'
    })
   .when('/bibliografia',{
        templateUrl: '/parciales/bibliografia.html',
        controller: 'bibliografiaCtrl'
    })
   .when('/aplicacion',{
        templateUrl: '/parciales/aplicacion.html',
        controller: 'aplicacionCtrl'
    })
   .when('/algoritmo',{
        templateUrl: '/parciales/algoritmo.html',
        controller: 'algoritmoCtrl'
    });

   


});





































app.controller('usuarioCtrL',function($scope){

$scope.profesor = profesorData;
	$scope.editando = {};


	$scope.EditarProfesor = function(){

		angular.copy( $scope.profesor, $scope.editando );

	}

	$scope.GuardarCambios = function(){
		angular.copy( $scope.editando, $scope.profesor );
	}

	$scope.CancelarCambios = function(){

		$scope.editando = {};

	}









});


var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "/img/avatar.png"
}













