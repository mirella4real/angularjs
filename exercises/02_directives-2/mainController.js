

angular.module('notesApp', [])
.controller('MainCtrl', [function() {
    
    var self = this;
    self.notes = {
        mirella: {
            id: 1,
            label: 'First Note',
            done: false
        },
        Jules: {
            id: 3,
            label: 'Finished Third Note',
            done: true
        },
        ann: {
            id: 2,
            label: 'Second Note',
            done: false
        }
    };
}]);