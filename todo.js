angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
$scope.deadlineDate = "2017-12-25 12:30:17";
$scope.stillHaveTime = true;

$scope.deadline = moment($scope.deadlineDate).format('DD / MM / YYYY  HH: mm a');


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
    minutes: 10,
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
    minutes: 5,
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia fermentum ex, at venenatis nisl fringilla in. Phasellus facilisis nulla quis fringilla fringilla. In tempor risus et maximus commodo. Nam semper lacus quis nunc dignissim euismod. Donec ipsum augue, elementum ut elit a, pellentesque tempus ante. Aenean neque dui, imperdiet eget efficitur'
},
{
    name: 'Develop functionality',
    id:5,
    hours: 4,
    minutes: 0,
    discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia fermentum ex, at venenatis nisl fringilla in. Phasellus facilisis nulla quis fringilla fringilla. In tempor risus et maximus commodo. Nam semper lacus quis nunc dignissim euismod. Donec ipsum augue, elementum ut elit a, pellentesque tempus ante. Aenean neque dui, imperdiet eget efficitur'
}
]


$scope.projHrs = 0;
$scope.projMins =0;
currentProjectTime();

$scope.projectTime = $scope.projHrs + ' Hours ' + $scope.projMins + ' Minutes '; 
$scope.timeRemaining =  $scope.projectTime; 



$scope.addTime = function(id, hour, minute) {
    if(!hour){hour = 0};
    if(!minute){minute = 0};
    for (i = 0; i < $scope.taskList.length; i++) { 
        if(id = $scope.taskList[i]){
            $scope.taskList[i].hours = $scope.taskList[i].hours + hour;
            $scope.taskList[i].minutes = $scope.taskList[i].minutes + minute;
        }

        updateTimes(hour, minute);
    }

  $scope.projHrs = $scope.projHrs + hour;
  updateTimes(hour, minute);

}

function currentProjectTime(){
    for (i = 0; i < $scope.taskList.length; i++) {
        $scope.projHrs = $scope.taskList[i].hours + $scope.projHrs;
        $scope.projMins = $scope.taskList[i].minutes + $scope.projMins;
    }
      
    $scope.timeTillDeadline = moment().add($scope.projHrs, 'h').add($scope.projMins, 'm').format('DD / MM / YYYY  HH: mm a');
    enoughTime();
      
    setInterval(function(){
      var startNow = new Date();
      $scope.timeTillDeadline = moment().add($scope.projHrs, 'h').add($scope.projMins, 'm').format('DD / MM / YYYY  HH: mm a');
      enoughTime();
     }, 60000);
  
}

function updateTimes(hour, minute){
  $scope.projHrs = $scope.projHrs + hour;
  $scope.projMins = $scope.projMins + minute;
  $scope.projectTime = $scope.projHrs + ' Hours ' + $scope.projMins + ' Minutes ';
  
  $scope.timeTillDeadline = moment().add($scope.projHrs, 'h').add($scope.projMins, 'm').format('DD / MM / YYYY  HH: mm a');
  enoughTime();
}

function enoughTime(){
  $scope.stillHaveTime = moment( $scope.timeTillDeadline).isBefore($scope.deadlineDate);
}

});







