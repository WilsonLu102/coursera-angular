(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){
  $scope.ateTooMuchResponse="Please enter data first";
  $scope.userInput="";

  function calculateNumberOfCommasFromText(string){
    var numberOfCommas = 0;
    for(var i=0; i<string.length; i++){
      if (string[i] == ',') {
          numberOfCommas++;
      }
    }
    return numberOfCommas;
  };

  $scope.checkFoodList = function () {
    var numberOfCommas = calculateNumberOfCommasFromText($scope.userInput);
    if ($scope.userInput.length == 0) {
      $scope.ateTooMuchResponse = "Please enter your data first";
    }
    else if (numberOfCommas > 2) {
      $scope.ateTooMuchResponse = "Too much!";
    }
    else $scope.ateTooMuchResponse="Enjoy!"
  };
}
})();
