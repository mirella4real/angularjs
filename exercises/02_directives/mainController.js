
// safe-style of Dependency Injection, or declaration.

angular.module('notesApp', [])
.controller('MainCtrl', [function() {
    // controllerAs sytax allows us to define variables on the  controller
    // instance using the this keyword
    var self = this;
    self.notes = [
        {id: 1, label: 'First Note', done: false, assignee: 'Mirella'},
        {id: 2, label: 'Second Note', done: false},
        {id: 3, label: 'Done Note', done: true},
        {id: 4, label: 'Last Note', done: false, assignee: 'Mary'}
    ];

    self.getNoteClass = function(status){
        return {
            done: status,
            pending: !status
        };
    };
}]);