
// safe-style of Dependency Injection, or declaration.

angular.module('notesApp', [])
.controller('MainCtrl', [function() {
    // controllerAs sytax allows us to define variables on the  controller
    // instance using the this keyword
    var self = this;
    self.message = 'Hello';
    self.changeMessage = function(){
        switch(self.message){ 
            case 'Hello':
                self.message = 'Goodbye';
            break;
            default:
                self.message = 'Hello';
        }
        
    }
}]);