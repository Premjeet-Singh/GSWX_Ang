var app = angular.module('myapp', ["ngStorage"]);
app.controller('ControllerJS', function($scope) {
	// $scope.appTitle = "GSWX";
	$scope.saved = localStorage.getItem('todojs');
	$scope.todojs = (localStorage.getItem('todojs')!==null) ? JSON.parse($scope.saved) : [ {text: 'https://www.youtube.com/watch?v=6MaOPdQPvow', done: false}, {text: 'https://www.youtube.com/watch?v=fju9ii8YsGs', done: false} ];
	localStorage.setItem('todojs', JSON.stringify($scope.todojs));

	$scope.addJS = function() {
		$scope.todojs.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todojs', JSON.stringify($scope.todojs));
	};
	});

app.controller('ControllerJQ', function($scope) {
	// $scope.appTitle = "GSWX";
	$scope.saved = localStorage.getItem('todojq');
	$scope.todojq = (localStorage.getItem('todojq')!==null) ? JSON.parse($scope.saved) : [ {text: 'https://www.youtube.com/watch?v=Pt49y1gm0jw', done: false}, {text: 'https://www.youtube.com/watch?v=v-RC3kJCL4c', done: false} ];
	localStorage.setItem('todojq', JSON.stringify($scope.todojq));

	$scope.addJQ = function() {
		$scope.todojq.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todojq', JSON.stringify($scope.todojq));
	};
	});
app.controller('ControllerAng', function($scope) {
	// $scope.appTitle = "GSWX";
	$scope.saved = localStorage.getItem('todoAng');
	$scope.todoAng = (localStorage.getItem('todoAng')!==null) ? JSON.parse($scope.saved) : [ {text: 'https://www.youtube.com/watch?v=i9MHigUZKEM', done: false}, {text: 'https://www.youtube.com/watch?v=0kmdjqgO9IY', done: false} ];
	localStorage.setItem('todoAng', JSON.stringify($scope.todoAng));

	$scope.addAng = function() {
		$scope.todoAng.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todoAng', JSON.stringify($scope.todoAng));
	};
	});

app.controller('ControllerNode', function($scope) {
	// $scope.appTitle = "GSWX";
	$scope.saved = localStorage.getItem('todoNode');
	$scope.todoNode = (localStorage.getItem('todoNode')!==null) ? JSON.parse($scope.saved) : [ {text: 'https://www.youtube.com/watch?v=czmulJ9NBP0', done: false}, {text: 'https://www.youtube.com/watch?v=QseHOX-5nJQ', done: false} ];
	localStorage.setItem('todoNode', JSON.stringify($scope.todoNode));

	$scope.addNode = function() {
		$scope.todoNode.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todoNode', JSON.stringify($scope.todoNode));
	};
	});