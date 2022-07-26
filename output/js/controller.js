var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalPlan";
$scope.selectedTerm = "FallTerm3";
$scope.updateTerm = function(term) {
  $scope.selectedTerm = term;
}
var that = this;
var radios = document.querySelectorAll("input[type=radio][name=planselector]");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () { 
that.setDefaults($scope.selectedPlan);
   });
});
$scope.TraditionalPlanFallTerm3obj = {group2:"2A"};
$scope.TraditionalPlanWinterTerm4obj = {group2:"2A"};
$scope.TraditionalPlanFallTerm5obj = {group3:"3A"};
$scope.TraditionalPlanWinterTerm6obj = {group3:"3A"};
$scope.TraditionalPlanFallTerm7obj = {};
$scope.TraditionalPlanWinterTerm8obj = {};
$scope.AlternatePlanFallTerm3obj = {};
$scope.AlternatePlanWinterTerm4obj = {};
$scope.AlternatePlanSummerTerm5obj = {};
$scope.AlternatePlanFallTerm6obj = {};
$scope.AlternatePlanWinterTerm7obj = {};
$scope.AlternatePlanSummerTerm8obj = {};
$scope.AlternatePlanFallTerm9obj = {};
$scope.CoopPlan1FallTerm3obj = {};
$scope.CoopPlan1WinterTerm4obj = {};
$scope.CoopPlan1SummerCoopTerm1obj = {};
$scope.CoopPlan1FallCoopTerm2obj = {};
$scope.CoopPlan1WinterTerm5obj = {};
$scope.CoopPlan1SummerCoopTerm3obj = {};
$scope.CoopPlan1FallCoopTerm4obj = {};
$scope.CoopPlan1WinterTerm6obj = {};
$scope.CoopPlan1SummerTerm7obj = {};
$scope.CoopPlan1FallCoopTerm5obj = {};
$scope.CoopPlan1WinterTerm8obj = {};
$scope.CoopPlan2FallTerm3obj = {};
$scope.CoopPlan2WinterCoopTerm1obj = {};
$scope.CoopPlan2SummerTerm4obj = {};
$scope.CoopPlan2FallTerm5obj = {};
$scope.CoopPlan2WinterCoopTerm2obj = {};
$scope.CoopPlan2SummerCoopTerm3obj = {};
$scope.CoopPlan2FallTerm6obj = {};
$scope.CoopPlan2WinterCoopTerm4obj = {};
$scope.CoopPlan2SummerTerm7obj = {};
$scope.CoopPlan2FallCoopTerm5obj = {};
$scope.CoopPlan2WinterTerm8obj = {};
$scope.CoopPlan3BiomedicalFallTerm3obj = {};
$scope.CoopPlan3BiomedicalWinterTerm4obj = {};
$scope.CoopPlan3BiomedicalSummerCoopTerm1obj = {};
$scope.CoopPlan3BiomedicalFallTerm5obj = {};
$scope.CoopPlan3BiomedicalWinterCoopTerm2obj = {};
$scope.CoopPlan3BiomedicalSummerTerm6obj = {};
$scope.CoopPlan3BiomedicalFallTerm7obj = {};
$scope.CoopPlan3BiomedicalWinterCoopTerm3obj = {};
$scope.CoopPlan3BiomedicalSummerCoopTerm4obj = {};
$scope.CoopPlan3BiomedicalFallTerm8obj = {};
$scope.CoopPlan3BiomedicalWinterTerm9obj = {};
$scope.CoopPlan4FallTerm3obj = {};
$scope.CoopPlan4WinterTerm4obj = {};
$scope.CoopPlan4SummerTerm5obj = {};
$scope.CoopPlan4FallCoopTerm1obj = {};
$scope.CoopPlan4WinterCoopTerm2obj = {};
$scope.CoopPlan4SummerTerm6obj = {};
$scope.CoopPlan4FallCoopTerm3obj = {};
$scope.CoopPlan4WinterCoopTerm4obj = {};
$scope.CoopPlan4SummerCoopTerm5obj = {};
$scope.CoopPlan4FallTerm7obj = {};
$scope.CoopPlan4WinterTerm8obj = {};
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
            $scope.selectedTerm = "FallTerm3";
          $scope.$apply();
          break;
      case "AlternatePlan": 
            $scope.selectedTerm = "FallTerm3";
          $scope.$apply();
          break;
      case "CoopPlan1": 
            $scope.selectedTerm = "FallTerm3";
          $scope.$apply();
          break;
      case "CoopPlan2": 
            $scope.selectedTerm = "FallTerm3";
          $scope.$apply();
          break;
      case "CoopPlan3Biomedical": 
            $scope.selectedTerm = "FallTerm3";
          $scope.$apply();
          break;
      case "CoopPlan4": 
            $scope.selectedTerm = "FallTerm3";
          $scope.$apply();
          break;
    default:
    console.log("shouldn't be here");
    }
};
$scope.globalSubGroupChange = function () { 
that.render($scope.selectedPlan+$scope.selectedTerm);
};
});
app.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });app.directive('ngChangeRadio', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngChangeRadio);
        element.bind('change', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });