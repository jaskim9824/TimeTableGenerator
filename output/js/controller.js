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
this.highlightElement = function(element, category) {
        if (element.classList.contains(category + "-highlighted")) {
            return;
        }
        element.classList.remove(category);
        element.classList.add(category + "-highlighted");
    };
this.unHighlightElement = function(element, category) {
        if (!element.classList.contains(category + "-highlighted")) {
            return;
        }
        element.classList.remove(category + "-highlighted");
        element.classList.add(category);
    };
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
this.TraditionalPlanTerms = 6;
this.AlternatePlanTerms = 7;
this.CoopPlan1Terms = 11;
this.CoopPlan2Terms = 11;
this.CoopPlan3BiomedicalTerms = 11;
this.CoopPlan4Terms = 11;
this.previousPlan = $scope.selectedPlan+$scope.selectedTerm
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
this.disable = function(plan) {
    switch (plan) { 
  case "TraditionalPlanFallTerm3": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlanWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlanFallTerm5": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlanWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlanFallTerm7": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlanWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "AlternatePlanFallTerm3": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    break; 
  case "AlternatePlanWinterTerm4": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    break; 
  case "AlternatePlanSummerTerm5": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    break; 
  case "AlternatePlanFallTerm6": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    break; 
  case "AlternatePlanWinterTerm7": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    break; 
  case "AlternatePlanSummerTerm8": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    break; 
  case "AlternatePlanFallTerm9": 
    for (let i = 0; i < this.AlternatePlanList.length; i++) {
        this.AlternatePlanList[i][0].hide(true);
    }
    break; 
  case "CoopPlan1FallTerm3": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1WinterTerm4": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1SummerCoopTerm1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1FallCoopTerm2": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1WinterTerm5": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1SummerCoopTerm3": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1FallCoopTerm4": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1WinterTerm6": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1SummerTerm7": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1FallCoopTerm5": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan1WinterTerm8": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2FallTerm3": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2WinterCoopTerm1": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2SummerTerm4": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2FallTerm5": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2WinterCoopTerm2": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2SummerCoopTerm3": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2FallTerm6": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2WinterCoopTerm4": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2SummerTerm7": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2FallCoopTerm5": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2WinterTerm8": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalFallTerm3": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalWinterTerm4": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalSummerCoopTerm1": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalFallTerm5": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalWinterCoopTerm2": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalSummerTerm6": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalFallTerm7": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalWinterCoopTerm3": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalSummerCoopTerm4": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalFallTerm8": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalWinterTerm9": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan4FallTerm3": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4WinterTerm4": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4SummerTerm5": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4FallCoopTerm1": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4WinterCoopTerm2": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4SummerTerm6": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4FallCoopTerm3": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4WinterCoopTerm4": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4SummerCoopTerm5": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4FallTerm7": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
  case "CoopPlan4WinterTerm8": 
    for (let i = 0; i < this.CoopPlan4List.length; i++) {
        this.CoopPlan4List[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
this.enable = function(plan) {
  switch(plan) {
    case "TraditionalPlanFallTerm3": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlanClicked[i][1]);
      }
      break; 
    case "TraditionalPlanWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlanClicked[i][1]);
      }
      break; 
    case "TraditionalPlanFallTerm5": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlanClicked[i][1]);
      }
      break; 
    case "TraditionalPlanWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlanClicked[i][1]);
      }
      break; 
    case "TraditionalPlanFallTerm7": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlanClicked[i][1]);
      }
      break; 
    case "TraditionalPlanWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlanClicked[i][1]);
      }
      break; 
    case "AlternatePlanFallTerm3": 
      for (let i = 0; i < this.AlternatePlanList.length; i++) {
          this.AlternatePlanList[i][0].show(true);
      }
      for (let i = 0; i < this.AlternatePlanClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlanClicked[i][0]);
          this.highlightElement(element, this.AlternatePlanClicked[i][1]);
      }
      break; 
    case "AlternatePlanWinterTerm4": 
      for (let i = 0; i < this.AlternatePlanList.length; i++) {
          this.AlternatePlanList[i][0].show(true);
      }
      for (let i = 0; i < this.AlternatePlanClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlanClicked[i][0]);
          this.highlightElement(element, this.AlternatePlanClicked[i][1]);
      }
      break; 
    case "AlternatePlanSummerTerm5": 
      for (let i = 0; i < this.AlternatePlanList.length; i++) {
          this.AlternatePlanList[i][0].show(true);
      }
      for (let i = 0; i < this.AlternatePlanClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlanClicked[i][0]);
          this.highlightElement(element, this.AlternatePlanClicked[i][1]);
      }
      break; 
    case "AlternatePlanFallTerm6": 
      for (let i = 0; i < this.AlternatePlanList.length; i++) {
          this.AlternatePlanList[i][0].show(true);
      }
      for (let i = 0; i < this.AlternatePlanClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlanClicked[i][0]);
          this.highlightElement(element, this.AlternatePlanClicked[i][1]);
      }
      break; 
    case "AlternatePlanWinterTerm7": 
      for (let i = 0; i < this.AlternatePlanList.length; i++) {
          this.AlternatePlanList[i][0].show(true);
      }
      for (let i = 0; i < this.AlternatePlanClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlanClicked[i][0]);
          this.highlightElement(element, this.AlternatePlanClicked[i][1]);
      }
      break; 
    case "AlternatePlanSummerTerm8": 
      for (let i = 0; i < this.AlternatePlanList.length; i++) {
          this.AlternatePlanList[i][0].show(true);
      }
      for (let i = 0; i < this.AlternatePlanClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlanClicked[i][0]);
          this.highlightElement(element, this.AlternatePlanClicked[i][1]);
      }
      break; 
    case "AlternatePlanFallTerm9": 
      for (let i = 0; i < this.AlternatePlanList.length; i++) {
          this.AlternatePlanList[i][0].show(true);
      }
      for (let i = 0; i < this.AlternatePlanClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlanClicked[i][0]);
          this.highlightElement(element, this.AlternatePlanClicked[i][1]);
      }
      break; 
    case "CoopPlan1FallTerm3": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1WinterTerm4": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1SummerCoopTerm1": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1FallCoopTerm2": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1WinterTerm5": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1SummerCoopTerm3": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1FallCoopTerm4": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1WinterTerm6": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1SummerTerm7": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1FallCoopTerm5": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan1WinterTerm8": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      break; 
    case "CoopPlan2FallTerm3": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2WinterCoopTerm1": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2SummerTerm4": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2FallTerm5": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2WinterCoopTerm2": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2SummerCoopTerm3": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2FallTerm6": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2WinterCoopTerm4": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2SummerTerm7": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2FallCoopTerm5": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan2WinterTerm8": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm3": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterTerm4": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalSummerCoopTerm1": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm5": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterCoopTerm2": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalSummerTerm6": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm7": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterCoopTerm3": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalSummerCoopTerm4": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm8": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterTerm9": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan4FallTerm3": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4WinterTerm4": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4SummerTerm5": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4FallCoopTerm1": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4WinterCoopTerm2": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4SummerTerm6": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4FallCoopTerm3": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4WinterCoopTerm4": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4SummerCoopTerm5": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4FallTerm7": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    case "CoopPlan4WinterTerm8": 
      for (let i = 0; i < this.CoopPlan4List.length; i++) {
          this.CoopPlan4List[i][0].show(true);
      }
      for (let i = 0; i < this.CoopPlan4Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan4Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan4Clicked[i][1]);
      }
      break; 
    default:
    console.log("shouldn't be here");
    }
};
this.addLine = function(line) {
switch($scope.selectedPlan+$scope.selectedTerm) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlanList.push([line, 1])
    }
    else {
        this.TraditionalPlanList[index][1]++;
    }
    break;
 case "AlternatePlan":
    var index = this.AlternatePlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.AlternatePlanList.push([line, 1])
    }
    else {
        this.AlternatePlanList[index][1]++;
    }
    break;
 case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan1List.push([line, 1])
    }
    else {
        this.CoopPlan1List[index][1]++;
    }
    break;
 case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan2List.push([line, 1])
    }
    else {
        this.CoopPlan2List[index][1]++;
    }
    break;
 case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan3BiomedicalList.push([line, 1])
    }
    else {
        this.CoopPlan3BiomedicalList[index][1]++;
    }
    break;
 case "CoopPlan4":
    var index = this.CoopPlan4List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan4List.push([line, 1])
    }
    else {
        this.CoopPlan4List[index][1]++;
    }
    break;
    default:
    console.log("shouldn't be here");
    }
};
this.removeLine = function(line) {
switch($scope.selectedPlan+$scope.selectedTerm) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlanList[index][1]--
        if (this.TraditionalPlanList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlanList.splice(index, 1);
        }
    }
    break; case "AlternatePlan":
    var index = this.AlternatePlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.AlternatePlanList[index][1]--
        if (this.AlternatePlanList[index][1] <= 0) {
            line.hide(false);
            this.AlternatePlanList.splice(index, 1);
        }
    }
    break; case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan1List[index][1]--
        if (this.CoopPlan1List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan1List.splice(index, 1);
        }
    }
    break; case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan2List[index][1]--
        if (this.CoopPlan2List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan2List.splice(index, 1);
        }
    }
    break; case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan3BiomedicalList[index][1]--
        if (this.CoopPlan3BiomedicalList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan3BiomedicalList.splice(index, 1);
        }
    }
    break; case "CoopPlan4":
    var index = this.CoopPlan4List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan4List[index][1]--
        if (this.CoopPlan4List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan4List.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.addToClicked = function(element, category) {
switch($scope.selectedPlan+$scope.selectedTerm) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlanClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlanClicked[index][1] = category;
        this.TraditionalPlanClicked[index][2]++;
    }
    this.TraditionalPlanClickedMap.get(element).push(category);
    break; case "AlternatePlan":
    var index = this.AlternatePlanClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.AlternatePlanClicked.push([element, category, 1]);
    }
    else {
        this.AlternatePlanClicked[index][1] = category;
        this.AlternatePlanClicked[index][2]++;
    }
    this.AlternatePlanClickedMap.get(element).push(category);
    break; case "CoopPlan1":
    var index = this.CoopPlan1Clicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan1Clicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan1Clicked[index][1] = category;
        this.CoopPlan1Clicked[index][2]++;
    }
    this.CoopPlan1ClickedMap.get(element).push(category);
    break; case "CoopPlan2":
    var index = this.CoopPlan2Clicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan2Clicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan2Clicked[index][1] = category;
        this.CoopPlan2Clicked[index][2]++;
    }
    this.CoopPlan2ClickedMap.get(element).push(category);
    break; case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan3BiomedicalClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan3BiomedicalClicked[index][1] = category;
        this.CoopPlan3BiomedicalClicked[index][2]++;
    }
    this.CoopPlan3BiomedicalClickedMap.get(element).push(category);
    break; case "CoopPlan4":
    var index = this.CoopPlan4Clicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan4Clicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan4Clicked[index][1] = category;
        this.CoopPlan4Clicked[index][2]++;
    }
    this.CoopPlan4ClickedMap.get(element).push(category);
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element, category) {
switch($scope.selectedPlan+$scope.selectedTerm) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlanClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlanClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlanClicked[index][2]--;
        if (this.TraditionalPlanClicked[index][2] <= 0) {
            this.TraditionalPlanClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlanClickedMap.get(element).length - 1
        return this.TraditionalPlanClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "AlternatePlan":
    var index = this.AlternatePlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.AlternatePlanClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.AlternatePlanClickedMap.get(element).splice(indexMap, 1);
        }
        this.AlternatePlanClicked[index][2]--;
        if (this.AlternatePlanClicked[index][2] <= 0) {
            this.AlternatePlanClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.AlternatePlanClickedMap.get(element).length - 1
        return this.AlternatePlanClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan1":
    var index = this.CoopPlan1Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan1ClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan1ClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan1Clicked[index][2]--;
        if (this.CoopPlan1Clicked[index][2] <= 0) {
            this.CoopPlan1Clicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan1ClickedMap.get(element).length - 1
        return this.CoopPlan1ClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan2":
    var index = this.CoopPlan2Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan2ClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan2ClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan2Clicked[index][2]--;
        if (this.CoopPlan2Clicked[index][2] <= 0) {
            this.CoopPlan2Clicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan2ClickedMap.get(element).length - 1
        return this.CoopPlan2ClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan3Biomedical":
    var index = this.CoopPlan3BiomedicalClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan3BiomedicalClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan3BiomedicalClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan3BiomedicalClicked[index][2]--;
        if (this.CoopPlan3BiomedicalClicked[index][2] <= 0) {
            this.CoopPlan3BiomedicalClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan3BiomedicalClickedMap.get(element).length - 1
        return this.CoopPlan3BiomedicalClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan4":
    var index = this.CoopPlan4Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan4ClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan4ClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan4Clicked[index][2]--;
        if (this.CoopPlan4Clicked[index][2] <= 0) {
            this.CoopPlan4Clicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan4ClickedMap.get(element).length - 1
        return this.CoopPlan4ClickedMap.get(element)[maxIndex];
    }
    return "";
    break;    default:
    console.log("shouldn't be here");
    }
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