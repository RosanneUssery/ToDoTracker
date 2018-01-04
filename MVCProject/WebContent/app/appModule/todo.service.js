angular.module('appModule')
.factory('todoService', function() {
  var service = {};

  var todos = [
      {
          id : 1,
          task : 'Buy cat food',
          description : '',
          completed : false
        },
        {
          id : 2,
          task : 'Dump Sebastian',
          description : '',
          completed : false
        },
        {
          id : 3,
          task : 'Take over the world',
          description : '',
          completed :  false
        }
      ];
    
  service.index = function() {
    return todos;
  };

  service.create = function(todo) {
		todo.description = '';
		todo.completed = false;

    todos.push(todo);
  };
  
  service.update = function(todo) {
	  todos.forEach(function (t, i, a){
			if (t.id=== todo.id) {
				a.splice(i, 1, todo);
			}
			
		}) 
  }
  
  service.destroy = function(todo) {
	  todos.forEach(function (t, i, a) {
		  if (t.id === todo.id) {
			  a.splice(i, 1);
		  }
	  })
  }

  return service;
})