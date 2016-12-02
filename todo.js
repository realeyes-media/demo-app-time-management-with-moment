angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
$scope.projHrs = 20;
$scope.projMins = 45; 

$scope.projectTime = $scope.projHrs + ' Hours ' + $scope.projMins + ' Minutes '; 
$scope.timeRemaining =  $scope.projectTime; 


$scope.taskList = [{
    name: 'Create list of requirements',
    id:1,
    hours: 1,
    minutes: 0,
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia fermentum ex, at venenatis nisl fringilla in. Phasellus facilisis nulla quis fringilla fringilla. In tempor risus et maximus commodo. Nam semper lacus quis nunc dignissim euismod. Donec ipsum augue, elementum ut elit a, pellentesque tempus ante. Aenean neque dui, imperdiet eget efficitur'
}, {
    name: 'Make wireframes',
    id:2,
    hours: 2,
    minutes: 30,
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia fermentum ex, at venenatis nisl fringilla in. Phasellus facilisis nulla quis fringilla fringilla. In tempor risus et maximus commodo. Nam semper lacus quis nunc dignissim euismod. Donec ipsum augue, elementum ut elit a, pellentesque tempus ante. Aenean neque dui, imperdiet eget efficitur'
}, {
    name: 'Setup development environment',
    id:3,
    hours: 2,
    minutes: 30,
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia fermentum ex, at venenatis nisl fringilla in. Phasellus facilisis nulla quis fringilla fringilla. In tempor risus et maximus commodo. Nam semper lacus quis nunc dignissim euismod. Donec ipsum augue, elementum ut elit a, pellentesque tempus ante. Aenean neque dui, imperdiet eget efficitur'
},
{
    name: 'Develop UI',
    id:4,
    hours: 4,
    minutes: 15,
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia fermentum ex, at venenatis nisl fringilla in. Phasellus facilisis nulla quis fringilla fringilla. In tempor risus et maximus commodo. Nam semper lacus quis nunc dignissim euismod. Donec ipsum augue, elementum ut elit a, pellentesque tempus ante. Aenean neque dui, imperdiet eget efficitur'
},
{
    name: 'Develop functionality',
    id:5,
    hours: 4,
    minutes: 45,
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia fermentum ex, at venenatis nisl fringilla in. Phasellus facilisis nulla quis fringilla fringilla. In tempor risus et maximus commodo. Nam semper lacus quis nunc dignissim euismod. Donec ipsum augue, elementum ut elit a, pellentesque tempus ante. Aenean neque dui, imperdiet eget efficitur'
}
]




$scope.addTime = function(id, hour, minute) {
    if(!hour){hour = 0};
    if(!minute){minute = 0};
    for (i = 0; i < $scope.taskList.length; i++) { 
        if(id = $scope.taskList[i]){
            $scope.taskList[i].hours = $scope.taskList[i].hours + hour;
            $scope.taskList[i].minutes = $scope.taskList[i].minutes + minute;
        }
    }

  $scope.projHrs = $scope.projHrs + hour;
  $scope.projMins = $scope.projMins + minute;
  $scope.projectTime = $scope.projHrs + ' Hours ' + $scope.projMins + ' Minutes ';
}

});

