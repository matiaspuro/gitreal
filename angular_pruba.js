


(function(){
	var app = angular.module('modulo1', [ ]);

	app.directive('directivePrueba', function(){
		return {


			restrict: 'A',
			templateUrl: 'directive-prueba.html'







		};
	});


	
	app.controller('controladorPrueba',['$scope',function($scope) {

	$scope.variableInput='hola8';		


		$scope.textoPrueba="texto de prueba modelo";


		this.textoControlador="texto prueba controlador";








	}]);







	




	app.controller('controlador1', ['$http',function($http){

		var co1= this;
	

		co1.valor = arrayLista;

		co1.rArray = function (evento) {


			if (arrayLista[0].texto == "reset valores") {

				arrayLista[0].texto = "hola";


			} else {

				for (var i=0;i < arrayLista.length;i++) {
					arrayLista[i].texto="reset valores";
				}
			}

			

			angular.element(evento.target).off("click");




			//evento.target.onclick = function () { alert('holaaaaaaaa');};


		};

		co1.variableTexto="ingrese un valor"; 

		co1.datos={};

		$http.get('prueba.json').success(function (data){

			co1.datos = data;


		});



		





	}]);





	var arrayLista = [ { texto: "primer valor de la fila"} , { texto: "segundo valor de la fila"},
	{texto: "tercer valor de la fila"}, {texto: "cuarto valor de la fila"}];



 








})();




