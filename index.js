var temp = [];
var flag;

var app = angular.module('myApp',[]);
app.controller('TodoCtrl',function($scope){
	
	//list of tasks - instead of todo.json
	$scope.todoList = [{task : "Learn AngularJS", complete : false, description : "You have to practice more AngularJS"},
					   {task : "Build an app", complete : false, description : "Try building more apps using AngularJS"}];
	
	//add tasks to the list
	$scope.todoAdd = function() {
		for (var i = 0; i < $scope.todoList.length; i++){
			
			//task already exists in the list
			if($scope.todoList[i].task == $scope.todoTask) {
				flag = 1;
				break;
			}
			
			//task does not exist in the list
			else {
				flag = 0;
			}
		}
		
		if (flag == 0) {
			$scope.todoList.push({task : $scope.todoTask, complete : false, description : $scope.todoDescription});
		}
		
		else if(flag == 1) {
			alert("Please enter a different task. The task you have entered is already listed!");
		}
		
		$scope.todoTask = "";
		$scope.todoDescription = "";
	};
	
	//remove tasks from the list
	$scope.remove = function(){
		var oldList = $scope.todoList;
		$scope.todoList = [];
		angular.forEach(oldList,function(x){
			if(!x.complete) $scope.todoList.push(x);
		});
	};
	
	//add tasks to complete tasks list
	$scope.addToList = function(){
		var newList = $scope.todoList;
		$scope.todoList = [];
		$scope.list2 = temp;
		
		angular.forEach(newList,function(todoTask){
			if(!todoTask.complete) {
				$scope.todoList.push(todoTask);
			}
			else if(todoTask.complete){
				temp.push(todoTask);
			}
		});
	};
});