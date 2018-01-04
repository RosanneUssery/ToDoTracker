angular.module('appModule')
	.component('todoList', {
		templateUrl : 'app/appModule/todoList/todoList.component.html',
		controller : function (todoService) {
			var vm = this;
			vm.todo = []
			
			vm.todo = todoService.index();
			
			vm.create = false;
			
			vm.selected = null;
			
			vm.displayTodo = function(todo) {
				vm.selected = todo;
			}
			
			vm.displayTable = function() {
				vm.selected = null;
			}
			
			vm.addTodo = function(todo) {
				todoService.create(todo);
				vm.todo = todoService.index();
			}
			
			vm.setEditTodo = function() {
				vm.editTodo = angular.copy(vm.selected);
			}
			
			vm.editTodo = null;
			
			vm.updateTodo = function(todo) {
				todoService.update(todo);
				vm.todo = todoService.index();
				vm.selected = null;
			}
			
			vm.destroyTodo = function(todo) {
				todoService.destroy(todo);
				vm.todo = todoService.index();
			}
			
			var generateId = function() {
				  return vm.todo[vm.todo.length-1].id + 1;
			}
			
			
			
			vm.getTodoNumber = function() {
		        return vm.todo.length;
		      }
		},
		controllerAs : "vm"
	})