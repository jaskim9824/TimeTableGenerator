var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalPlan";
$scope.selectedTerm = "FallTerm1";
var that = this;
this.render = function(plan) {
            this.disable(this.previousPlan);
            this.enable(plan);
            this.previousPlan = plan;
};
var radios = document.querySelectorAll("input[type=radio][name=planselector]");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () { 
that.setDefaults($scope.selectedPlan);
that.render($scope.selectedPlan+$scope.field2.group2+$scope.field3.group3+$scope.field4.group4+$scope.selectedTerm);
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
this.TraditionalPlan2A3A4AList = [];
this.TraditionalPlan2A3A4AClicked = [];
this.TraditionalPlan2A3A4ALegendBtns = [];
this.TraditionalPlan2A3A4ALegendBtnsClicked = [];
this.TraditionalPlan2A3A4AClickedMap = new Map();
this.TraditionalPlan2A3A4ATerms = 8;
this.TraditionalPlan2A3A4AMaxCourses = 0;
this.TraditionalPlan2A3A4BList = [];
this.TraditionalPlan2A3A4BClicked = [];
this.TraditionalPlan2A3A4BLegendBtns = [];
this.TraditionalPlan2A3A4BLegendBtnsClicked = [];
this.TraditionalPlan2A3A4BClickedMap = new Map();
this.TraditionalPlan2A3A4BTerms = 8;
this.TraditionalPlan2A3A4BMaxCourses = 0;
this.TraditionalPlan2A3B4AList = [];
this.TraditionalPlan2A3B4AClicked = [];
this.TraditionalPlan2A3B4ALegendBtns = [];
this.TraditionalPlan2A3B4ALegendBtnsClicked = [];
this.TraditionalPlan2A3B4AClickedMap = new Map();
this.TraditionalPlan2A3B4ATerms = 8;
this.TraditionalPlan2A3B4AMaxCourses = 0;
this.TraditionalPlan2A3B4BList = [];
this.TraditionalPlan2A3B4BClicked = [];
this.TraditionalPlan2A3B4BLegendBtns = [];
this.TraditionalPlan2A3B4BLegendBtnsClicked = [];
this.TraditionalPlan2A3B4BClickedMap = new Map();
this.TraditionalPlan2A3B4BTerms = 8;
this.TraditionalPlan2A3B4BMaxCourses = 0;
this.TraditionalPlan2B3A4AList = [];
this.TraditionalPlan2B3A4AClicked = [];
this.TraditionalPlan2B3A4ALegendBtns = [];
this.TraditionalPlan2B3A4ALegendBtnsClicked = [];
this.TraditionalPlan2B3A4AClickedMap = new Map();
this.TraditionalPlan2B3A4ATerms = 8;
this.TraditionalPlan2B3A4AMaxCourses = 0;
this.TraditionalPlan2B3A4BList = [];
this.TraditionalPlan2B3A4BClicked = [];
this.TraditionalPlan2B3A4BLegendBtns = [];
this.TraditionalPlan2B3A4BLegendBtnsClicked = [];
this.TraditionalPlan2B3A4BClickedMap = new Map();
this.TraditionalPlan2B3A4BTerms = 8;
this.TraditionalPlan2B3A4BMaxCourses = 0;
this.TraditionalPlan2B3B4AList = [];
this.TraditionalPlan2B3B4AClicked = [];
this.TraditionalPlan2B3B4ALegendBtns = [];
this.TraditionalPlan2B3B4ALegendBtnsClicked = [];
this.TraditionalPlan2B3B4AClickedMap = new Map();
this.TraditionalPlan2B3B4ATerms = 8;
this.TraditionalPlan2B3B4AMaxCourses = 0;
this.TraditionalPlan2B3B4BList = [];
this.TraditionalPlan2B3B4BClicked = [];
this.TraditionalPlan2B3B4BLegendBtns = [];
this.TraditionalPlan2B3B4BLegendBtnsClicked = [];
this.TraditionalPlan2B3B4BClickedMap = new Map();
this.TraditionalPlan2B3B4BTerms = 8;
this.TraditionalPlan2B3B4BMaxCourses = 0;
this.AlternatePlan3A4AList = [];
this.AlternatePlan3A4AClicked = [];
this.AlternatePlan3A4ALegendBtns = [];
this.AlternatePlan3A4ALegendBtnsClicked = [];
this.AlternatePlan3A4AClickedMap = new Map();
this.AlternatePlan3A4ATerms = 9;
this.AlternatePlan3A4AMaxCourses = 3;
this.AlternatePlan3A4BList = [];
this.AlternatePlan3A4BClicked = [];
this.AlternatePlan3A4BLegendBtns = [];
this.AlternatePlan3A4BLegendBtnsClicked = [];
this.AlternatePlan3A4BClickedMap = new Map();
this.AlternatePlan3A4BTerms = 9;
this.AlternatePlan3A4BMaxCourses = 3;
this.AlternatePlan3B4AList = [];
this.AlternatePlan3B4AClicked = [];
this.AlternatePlan3B4ALegendBtns = [];
this.AlternatePlan3B4ALegendBtnsClicked = [];
this.AlternatePlan3B4AClickedMap = new Map();
this.AlternatePlan3B4ATerms = 9;
this.AlternatePlan3B4AMaxCourses = 3;
this.AlternatePlan3B4BList = [];
this.AlternatePlan3B4BClicked = [];
this.AlternatePlan3B4BLegendBtns = [];
this.AlternatePlan3B4BLegendBtnsClicked = [];
this.AlternatePlan3B4BClickedMap = new Map();
this.AlternatePlan3B4BTerms = 9;
this.AlternatePlan3B4BMaxCourses = 3;
this.CoopPlan13AList = [];
this.CoopPlan13AClicked = [];
this.CoopPlan13ALegendBtns = [];
this.CoopPlan13ALegendBtnsClicked = [];
this.CoopPlan13AClickedMap = new Map();
this.CoopPlan13ATerms = 13;
this.CoopPlan13AMaxCourses = 3;
this.CoopPlan13BList = [];
this.CoopPlan13BClicked = [];
this.CoopPlan13BLegendBtns = [];
this.CoopPlan13BLegendBtnsClicked = [];
this.CoopPlan13BClickedMap = new Map();
this.CoopPlan13BTerms = 13;
this.CoopPlan13BMaxCourses = 3;
this.CoopPlan23AList = [];
this.CoopPlan23AClicked = [];
this.CoopPlan23ALegendBtns = [];
this.CoopPlan23ALegendBtnsClicked = [];
this.CoopPlan23AClickedMap = new Map();
this.CoopPlan23ATerms = 13;
this.CoopPlan23AMaxCourses = 3;
this.CoopPlan23BList = [];
this.CoopPlan23BClicked = [];
this.CoopPlan23BLegendBtns = [];
this.CoopPlan23BLegendBtnsClicked = [];
this.CoopPlan23BClickedMap = new Map();
this.CoopPlan23BTerms = 13;
this.CoopPlan23BMaxCourses = 3;
this.CoopPlan3BiomedicalList = [];
this.CoopPlan3BiomedicalClicked = [];
this.CoopPlan3BiomedicalLegendBtns = [];
this.CoopPlan3BiomedicalLegendBtnsClicked = [];
this.CoopPlan3BiomedicalClickedMap = new Map();
this.CoopPlan3BiomedicalTerms = 13;
this.CoopPlan3BiomedicalMaxCourses = 5;
this.CoopPlan43AList = [];
this.CoopPlan43AClicked = [];
this.CoopPlan43ALegendBtns = [];
this.CoopPlan43ALegendBtnsClicked = [];
this.CoopPlan43AClickedMap = new Map();
this.CoopPlan43ATerms = 13;
this.CoopPlan43AMaxCourses = 3;
this.CoopPlan43BList = [];
this.CoopPlan43BClicked = [];
this.CoopPlan43BLegendBtns = [];
this.CoopPlan43BLegendBtnsClicked = [];
this.CoopPlan43BClickedMap = new Map();
this.CoopPlan43BTerms = 13;
this.CoopPlan43BMaxCourses = 3;
$scope.field2 = { group2: "2A" };
$scope.field3 = { group3: "3A" };
$scope.field4 = { group4: "4A" };
this.previousPlan = $scope.selectedPlan+$scope.field2.group2+$scope.field3.group3+$scope.field4.group4+$scope.selectedTerm
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
            $scope.field2.group2 ="2A";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="4A";
          $scope.$apply();
          break;
      case "AlternatePlan": 
            $scope.field2.group2 ="";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="4A";
          $scope.$apply();
          break;
      case "CoopPlan1": 
            $scope.field2.group2 ="";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="";
          $scope.$apply();
          break;
      case "CoopPlan2": 
            $scope.field2.group2 ="";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="";
          $scope.$apply();
          break;
      case "CoopPlan3Biomedical": 
            $scope.field2.group2 ="";
            $scope.field3.group3 ="";
            $scope.field4.group4 ="";
          $scope.$apply();
          break;
      case "CoopPlan4": 
            $scope.field2.group2 ="";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="";
          $scope.$apply();
          break;
    default:
    console.log("shouldn't be here");
    }
};
$scope.globalSubGroupChange = function () { 
that.render($scope.selectedPlan+$scope.field2.group2+$scope.field3.group3+$scope.field4.group4+$scope.selectedTerm);
};
this.disable = function(plan) {
    switch (plan) { 
  case "TraditionalPlan2A3A4AFallTerm1": 
    for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
        this.TraditionalPlan2A3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4AWinterTerm2": 
    for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
        this.TraditionalPlan2A3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4AFallTerm3": 
    for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
        this.TraditionalPlan2A3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4AWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
        this.TraditionalPlan2A3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4AFallTerm5": 
    for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
        this.TraditionalPlan2A3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4AWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
        this.TraditionalPlan2A3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4AFallTerm7": 
    for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
        this.TraditionalPlan2A3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4AWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
        this.TraditionalPlan2A3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4BFallTerm1": 
    for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
        this.TraditionalPlan2A3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4BWinterTerm2": 
    for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
        this.TraditionalPlan2A3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4BFallTerm3": 
    for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
        this.TraditionalPlan2A3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4BWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
        this.TraditionalPlan2A3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4BFallTerm5": 
    for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
        this.TraditionalPlan2A3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4BWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
        this.TraditionalPlan2A3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4BFallTerm7": 
    for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
        this.TraditionalPlan2A3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3A4BWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
        this.TraditionalPlan2A3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4AFallTerm1": 
    for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
        this.TraditionalPlan2A3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4AWinterTerm2": 
    for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
        this.TraditionalPlan2A3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4AFallTerm3": 
    for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
        this.TraditionalPlan2A3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4AWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
        this.TraditionalPlan2A3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4AFallTerm5": 
    for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
        this.TraditionalPlan2A3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4AWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
        this.TraditionalPlan2A3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4AFallTerm7": 
    for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
        this.TraditionalPlan2A3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4AWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
        this.TraditionalPlan2A3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4BFallTerm1": 
    for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
        this.TraditionalPlan2A3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4BWinterTerm2": 
    for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
        this.TraditionalPlan2A3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4BFallTerm3": 
    for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
        this.TraditionalPlan2A3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4BWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
        this.TraditionalPlan2A3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4BFallTerm5": 
    for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
        this.TraditionalPlan2A3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4BWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
        this.TraditionalPlan2A3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4BFallTerm7": 
    for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
        this.TraditionalPlan2A3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2A3B4BWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
        this.TraditionalPlan2A3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4AFallTerm1": 
    for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
        this.TraditionalPlan2B3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4AWinterTerm2": 
    for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
        this.TraditionalPlan2B3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4AFallTerm3": 
    for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
        this.TraditionalPlan2B3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4AWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
        this.TraditionalPlan2B3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4AFallTerm5": 
    for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
        this.TraditionalPlan2B3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4AWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
        this.TraditionalPlan2B3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4AFallTerm7": 
    for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
        this.TraditionalPlan2B3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4AWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
        this.TraditionalPlan2B3A4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4BFallTerm1": 
    for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
        this.TraditionalPlan2B3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4BWinterTerm2": 
    for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
        this.TraditionalPlan2B3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4BFallTerm3": 
    for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
        this.TraditionalPlan2B3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4BWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
        this.TraditionalPlan2B3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4BFallTerm5": 
    for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
        this.TraditionalPlan2B3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4BWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
        this.TraditionalPlan2B3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4BFallTerm7": 
    for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
        this.TraditionalPlan2B3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3A4BWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
        this.TraditionalPlan2B3A4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4AFallTerm1": 
    for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
        this.TraditionalPlan2B3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4AWinterTerm2": 
    for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
        this.TraditionalPlan2B3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4AFallTerm3": 
    for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
        this.TraditionalPlan2B3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4AWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
        this.TraditionalPlan2B3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4AFallTerm5": 
    for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
        this.TraditionalPlan2B3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4AWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
        this.TraditionalPlan2B3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4AFallTerm7": 
    for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
        this.TraditionalPlan2B3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4AWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
        this.TraditionalPlan2B3B4AList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4BFallTerm1": 
    for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
        this.TraditionalPlan2B3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4BWinterTerm2": 
    for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
        this.TraditionalPlan2B3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4BFallTerm3": 
    for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
        this.TraditionalPlan2B3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4BWinterTerm4": 
    for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
        this.TraditionalPlan2B3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4BFallTerm5": 
    for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
        this.TraditionalPlan2B3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4BWinterTerm6": 
    for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
        this.TraditionalPlan2B3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4BFallTerm7": 
    for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
        this.TraditionalPlan2B3B4BList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlan2B3B4BWinterTerm8": 
    for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
        this.TraditionalPlan2B3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4AFallTerm1": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4AWinterTerm2": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4AFallTerm3": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4AWinterTerm4": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4ASummerTerm5": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4AFallTerm6": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4AWinterTerm7": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4ASummerTerm8": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4AFallTerm9": 
    for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
        this.AlternatePlan3A4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BFallTerm1": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BWinterTerm2": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BFallTerm3": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BWinterTerm4": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BSummerTerm5": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BFallTerm6": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BWinterTerm7": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BSummerTerm8": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3A4BFallTerm9": 
    for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
        this.AlternatePlan3A4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4AFallTerm1": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4AWinterTerm2": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4AFallTerm3": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4AWinterTerm4": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4ASummerTerm5": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4AFallTerm6": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4AWinterTerm7": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4ASummerTerm8": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4AFallTerm9": 
    for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
        this.AlternatePlan3B4AList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BFallTerm1": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BWinterTerm2": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BFallTerm3": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BWinterTerm4": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BSummerTerm5": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BFallTerm6": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BWinterTerm7": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BSummerTerm8": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "AlternatePlan3B4BFallTerm9": 
    for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
        this.AlternatePlan3B4BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AFallTerm1": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AWinterTerm2": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AFallTerm3": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AWinterTerm4": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13ASummerCoopTerm1": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AFallCoopTerm2": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AWinterTerm5": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13ASummerCoopTerm3": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AFallCoopTerm4": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AWinterTerm6": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13ASummerTerm7": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AFallCoopTerm5": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13AWinterTerm8": 
    for (let i = 0; i < this.CoopPlan13AList.length; i++) {
        this.CoopPlan13AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BFallTerm1": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BWinterTerm2": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BFallTerm3": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BWinterTerm4": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BSummerCoopTerm1": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BFallCoopTerm2": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BWinterTerm5": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BSummerCoopTerm3": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BFallCoopTerm4": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BWinterTerm6": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BSummerTerm7": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BFallCoopTerm5": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan13BWinterTerm8": 
    for (let i = 0; i < this.CoopPlan13BList.length; i++) {
        this.CoopPlan13BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AFallTerm1": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AWinterTerm2": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AFallTerm3": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AWinterCoopTerm1": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23ASummerTerm4": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AFallTerm5": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AWinterCoopTerm2": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23ASummerCoopTerm3": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AFallTerm6": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AWinterCoopTerm4": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23ASummerTerm7": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AFallCoopTerm5": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23AWinterTerm8": 
    for (let i = 0; i < this.CoopPlan23AList.length; i++) {
        this.CoopPlan23AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BFallTerm1": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BWinterTerm2": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BFallTerm3": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BWinterCoopTerm1": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BSummerTerm4": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BFallTerm5": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BWinterCoopTerm2": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BSummerCoopTerm3": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BFallTerm6": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BWinterCoopTerm4": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BSummerTerm7": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BFallCoopTerm5": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan23BWinterTerm8": 
    for (let i = 0; i < this.CoopPlan23BList.length; i++) {
        this.CoopPlan23BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalFallTerm1": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
    }
    break; 
  case "CoopPlan3BiomedicalWinterTerm2": 
    for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
        this.CoopPlan3BiomedicalList[i][0].hide(true);
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
  case "CoopPlan43AFallTerm1": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AWinterTerm2": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AFallTerm3": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AWinterTerm4": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43ASummerTerm5": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AFallCoopTerm1": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AWinterCoopTerm2": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43ASummerTerm6": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AFallCoopTerm3": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AWinterCoopTerm4": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43ASummerCoopTerm5": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AFallTerm7": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43AWinterTerm8": 
    for (let i = 0; i < this.CoopPlan43AList.length; i++) {
        this.CoopPlan43AList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BFallTerm1": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BWinterTerm2": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BFallTerm3": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BWinterTerm4": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BSummerTerm5": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BFallCoopTerm1": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BWinterCoopTerm2": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BSummerTerm6": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BFallCoopTerm3": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BWinterCoopTerm4": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BSummerCoopTerm5": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BFallTerm7": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
  case "CoopPlan43BWinterTerm8": 
    for (let i = 0; i < this.CoopPlan43BList.length; i++) {
        this.CoopPlan43BList[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
this.enable = function(plan) {
  switch(plan) {
    case "TraditionalPlan2A3A4AFallTerm1": 
      for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
          this.TraditionalPlan2A3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4AWinterTerm2": 
      for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
          this.TraditionalPlan2A3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4AFallTerm3": 
      for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
          this.TraditionalPlan2A3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4AWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
          this.TraditionalPlan2A3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4AFallTerm5": 
      for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
          this.TraditionalPlan2A3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4AWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
          this.TraditionalPlan2A3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4AFallTerm7": 
      for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
          this.TraditionalPlan2A3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4AWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlan2A3A4AList.length; i++) {
          this.TraditionalPlan2A3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4BFallTerm1": 
      for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
          this.TraditionalPlan2A3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4BWinterTerm2": 
      for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
          this.TraditionalPlan2A3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4BFallTerm3": 
      for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
          this.TraditionalPlan2A3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4BWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
          this.TraditionalPlan2A3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4BFallTerm5": 
      for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
          this.TraditionalPlan2A3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4BWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
          this.TraditionalPlan2A3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4BFallTerm7": 
      for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
          this.TraditionalPlan2A3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3A4BWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlan2A3A4BList.length; i++) {
          this.TraditionalPlan2A3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4AFallTerm1": 
      for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
          this.TraditionalPlan2A3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4AWinterTerm2": 
      for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
          this.TraditionalPlan2A3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4AFallTerm3": 
      for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
          this.TraditionalPlan2A3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4AWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
          this.TraditionalPlan2A3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4AFallTerm5": 
      for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
          this.TraditionalPlan2A3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4AWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
          this.TraditionalPlan2A3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4AFallTerm7": 
      for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
          this.TraditionalPlan2A3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4AWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlan2A3B4AList.length; i++) {
          this.TraditionalPlan2A3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4BFallTerm1": 
      for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
          this.TraditionalPlan2A3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4BWinterTerm2": 
      for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
          this.TraditionalPlan2A3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4BFallTerm3": 
      for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
          this.TraditionalPlan2A3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4BWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
          this.TraditionalPlan2A3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4BFallTerm5": 
      for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
          this.TraditionalPlan2A3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4BWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
          this.TraditionalPlan2A3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4BFallTerm7": 
      for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
          this.TraditionalPlan2A3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2A3B4BWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlan2A3B4BList.length; i++) {
          this.TraditionalPlan2A3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2A3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2A3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2A3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2A3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2A3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4AFallTerm1": 
      for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
          this.TraditionalPlan2B3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4AWinterTerm2": 
      for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
          this.TraditionalPlan2B3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4AFallTerm3": 
      for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
          this.TraditionalPlan2B3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4AWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
          this.TraditionalPlan2B3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4AFallTerm5": 
      for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
          this.TraditionalPlan2B3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4AWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
          this.TraditionalPlan2B3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4AFallTerm7": 
      for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
          this.TraditionalPlan2B3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4AWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlan2B3A4AList.length; i++) {
          this.TraditionalPlan2B3A4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4BFallTerm1": 
      for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
          this.TraditionalPlan2B3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4BWinterTerm2": 
      for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
          this.TraditionalPlan2B3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4BFallTerm3": 
      for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
          this.TraditionalPlan2B3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4BWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
          this.TraditionalPlan2B3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4BFallTerm5": 
      for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
          this.TraditionalPlan2B3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4BWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
          this.TraditionalPlan2B3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4BFallTerm7": 
      for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
          this.TraditionalPlan2B3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3A4BWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlan2B3A4BList.length; i++) {
          this.TraditionalPlan2B3A4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3A4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3A4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3A4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4AFallTerm1": 
      for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
          this.TraditionalPlan2B3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4AWinterTerm2": 
      for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
          this.TraditionalPlan2B3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4AFallTerm3": 
      for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
          this.TraditionalPlan2B3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4AWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
          this.TraditionalPlan2B3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4AFallTerm5": 
      for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
          this.TraditionalPlan2B3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4AWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
          this.TraditionalPlan2B3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4AFallTerm7": 
      for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
          this.TraditionalPlan2B3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4AWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlan2B3B4AList.length; i++) {
          this.TraditionalPlan2B3B4AList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4AClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4AClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4AClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4BFallTerm1": 
      for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
          this.TraditionalPlan2B3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4BWinterTerm2": 
      for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
          this.TraditionalPlan2B3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4BFallTerm3": 
      for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
          this.TraditionalPlan2B3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4BWinterTerm4": 
      for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
          this.TraditionalPlan2B3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4BFallTerm5": 
      for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
          this.TraditionalPlan2B3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4BWinterTerm6": 
      for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
          this.TraditionalPlan2B3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4BFallTerm7": 
      for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
          this.TraditionalPlan2B3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4BClicked[i][1]);
      }
      break; 
    case "TraditionalPlan2B3B4BWinterTerm8": 
      for (let i = 0; i < this.TraditionalPlan2B3B4BList.length; i++) {
          this.TraditionalPlan2B3B4BList[i][0].show(true);
      }
      width = this.TraditionalPlan2B3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlan2B3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlan2B3B4BClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlan2B3B4BClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlan2B3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4AFallTerm1": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4AWinterTerm2": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4AFallTerm3": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4AWinterTerm4": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4ASummerTerm5": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4AFallTerm6": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4AWinterTerm7": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4ASummerTerm8": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4AFallTerm9": 
      for (let i = 0; i < this.AlternatePlan3A4AList.length; i++) {
          this.AlternatePlan3A4AList[i][0].show(true);
      }
      width = this.AlternatePlan3A4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BFallTerm1": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BWinterTerm2": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BFallTerm3": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BWinterTerm4": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BSummerTerm5": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BFallTerm6": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BWinterTerm7": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BSummerTerm8": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3A4BFallTerm9": 
      for (let i = 0; i < this.AlternatePlan3A4BList.length; i++) {
          this.AlternatePlan3A4BList[i][0].show(true);
      }
      width = this.AlternatePlan3A4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3A4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3A4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3A4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3A4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4AFallTerm1": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4AWinterTerm2": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4AFallTerm3": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4AWinterTerm4": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4ASummerTerm5": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4AFallTerm6": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4AWinterTerm7": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4ASummerTerm8": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4AFallTerm9": 
      for (let i = 0; i < this.AlternatePlan3B4AList.length; i++) {
          this.AlternatePlan3B4AList[i][0].show(true);
      }
      width = this.AlternatePlan3B4ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4AClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4AClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4AClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BFallTerm1": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BWinterTerm2": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BFallTerm3": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BWinterTerm4": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BSummerTerm5": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BFallTerm6": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BWinterTerm7": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BSummerTerm8": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "AlternatePlan3B4BFallTerm9": 
      for (let i = 0; i < this.AlternatePlan3B4BList.length; i++) {
          this.AlternatePlan3B4BList[i][0].show(true);
      }
      width = this.AlternatePlan3B4BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.AlternatePlan3B4BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.AlternatePlan3B4BClicked.length; i++) {
          var element = document.getElementById(this.AlternatePlan3B4BClicked[i][0]);
          this.highlightElement(element, this.AlternatePlan3B4BClicked[i][1]);
      }
      break; 
    case "CoopPlan13AFallTerm1": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AWinterTerm2": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AFallTerm3": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AWinterTerm4": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13ASummerCoopTerm1": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AFallCoopTerm2": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AWinterTerm5": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13ASummerCoopTerm3": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AFallCoopTerm4": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AWinterTerm6": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13ASummerTerm7": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AFallCoopTerm5": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13AWinterTerm8": 
      for (let i = 0; i < this.CoopPlan13AList.length; i++) {
          this.CoopPlan13AList[i][0].show(true);
      }
      width = this.CoopPlan13ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13AClicked[i][1]);
      }
      break; 
    case "CoopPlan13BFallTerm1": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BWinterTerm2": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BFallTerm3": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BWinterTerm4": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BSummerCoopTerm1": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BFallCoopTerm2": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BWinterTerm5": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BSummerCoopTerm3": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BFallCoopTerm4": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BWinterTerm6": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BSummerTerm7": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BFallCoopTerm5": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan13BWinterTerm8": 
      for (let i = 0; i < this.CoopPlan13BList.length; i++) {
          this.CoopPlan13BList[i][0].show(true);
      }
      width = this.CoopPlan13BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan13BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan13BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan13BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan13BClicked[i][1]);
      }
      break; 
    case "CoopPlan23AFallTerm1": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AWinterTerm2": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AFallTerm3": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AWinterCoopTerm1": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23ASummerTerm4": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AFallTerm5": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AWinterCoopTerm2": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23ASummerCoopTerm3": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AFallTerm6": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AWinterCoopTerm4": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23ASummerTerm7": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AFallCoopTerm5": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23AWinterTerm8": 
      for (let i = 0; i < this.CoopPlan23AList.length; i++) {
          this.CoopPlan23AList[i][0].show(true);
      }
      width = this.CoopPlan23ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23AClicked[i][1]);
      }
      break; 
    case "CoopPlan23BFallTerm1": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BWinterTerm2": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BFallTerm3": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BWinterCoopTerm1": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BSummerTerm4": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BFallTerm5": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BWinterCoopTerm2": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BSummerCoopTerm3": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BFallTerm6": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BWinterCoopTerm4": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BSummerTerm7": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BFallCoopTerm5": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan23BWinterTerm8": 
      for (let i = 0; i < this.CoopPlan23BList.length; i++) {
          this.CoopPlan23BList[i][0].show(true);
      }
      width = this.CoopPlan23BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan23BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan23BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan23BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan23BClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm1": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterTerm2": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm3": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterTerm4": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalSummerCoopTerm1": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm5": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterCoopTerm2": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalSummerTerm6": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm7": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterCoopTerm3": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalSummerCoopTerm4": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalFallTerm8": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan3BiomedicalWinterTerm9": 
      for (let i = 0; i < this.CoopPlan3BiomedicalList.length; i++) {
          this.CoopPlan3BiomedicalList[i][0].show(true);
      }
      width = this.CoopPlan3BiomedicalTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan3BiomedicalMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan3BiomedicalClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan3BiomedicalClicked[i][0]);
          this.highlightElement(element, this.CoopPlan3BiomedicalClicked[i][1]);
      }
      break; 
    case "CoopPlan43AFallTerm1": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AWinterTerm2": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AFallTerm3": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AWinterTerm4": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43ASummerTerm5": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AFallCoopTerm1": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AWinterCoopTerm2": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43ASummerTerm6": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AFallCoopTerm3": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AWinterCoopTerm4": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43ASummerCoopTerm5": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AFallTerm7": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43AWinterTerm8": 
      for (let i = 0; i < this.CoopPlan43AList.length; i++) {
          this.CoopPlan43AList[i][0].show(true);
      }
      width = this.CoopPlan43ATerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43AMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43AClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43AClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43AClicked[i][1]);
      }
      break; 
    case "CoopPlan43BFallTerm1": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BWinterTerm2": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BFallTerm3": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BWinterTerm4": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BSummerTerm5": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BFallCoopTerm1": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BWinterCoopTerm2": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BSummerTerm6": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BFallCoopTerm3": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BWinterCoopTerm4": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BSummerCoopTerm5": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BFallTerm7": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    case "CoopPlan43BWinterTerm8": 
      for (let i = 0; i < this.CoopPlan43BList.length; i++) {
          this.CoopPlan43BList[i][0].show(true);
      }
      width = this.CoopPlan43BTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan43BMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan43BClicked.length; i++) {
          var element = document.getElementById(this.CoopPlan43BClicked[i][0]);
          this.highlightElement(element, this.CoopPlan43BClicked[i][1]);
      }
      break; 
    default:
    console.log("shouldn't be here");
    }
};
this.addLine = function(line) {
switch($scope.selectedPlan+$scope.field2.group2+$scope.field3.group3+$scope.field4.group4+$scope.selectedTerm) { 
 case "TraditionalPlan2A3A4A":
    var index = this.TraditionalPlan2A3A4AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlan2A3A4AList.push([line, 1])
    }
    else {
        this.TraditionalPlan2A3A4AList[index][1]++;
    }
    break;
 case "TraditionalPlan2A3A4B":
    var index = this.TraditionalPlan2A3A4BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlan2A3A4BList.push([line, 1])
    }
    else {
        this.TraditionalPlan2A3A4BList[index][1]++;
    }
    break;
 case "TraditionalPlan2A3B4A":
    var index = this.TraditionalPlan2A3B4AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlan2A3B4AList.push([line, 1])
    }
    else {
        this.TraditionalPlan2A3B4AList[index][1]++;
    }
    break;
 case "TraditionalPlan2A3B4B":
    var index = this.TraditionalPlan2A3B4BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlan2A3B4BList.push([line, 1])
    }
    else {
        this.TraditionalPlan2A3B4BList[index][1]++;
    }
    break;
 case "TraditionalPlan2B3A4A":
    var index = this.TraditionalPlan2B3A4AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlan2B3A4AList.push([line, 1])
    }
    else {
        this.TraditionalPlan2B3A4AList[index][1]++;
    }
    break;
 case "TraditionalPlan2B3A4B":
    var index = this.TraditionalPlan2B3A4BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlan2B3A4BList.push([line, 1])
    }
    else {
        this.TraditionalPlan2B3A4BList[index][1]++;
    }
    break;
 case "TraditionalPlan2B3B4A":
    var index = this.TraditionalPlan2B3B4AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlan2B3B4AList.push([line, 1])
    }
    else {
        this.TraditionalPlan2B3B4AList[index][1]++;
    }
    break;
 case "TraditionalPlan2B3B4B":
    var index = this.TraditionalPlan2B3B4BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlan2B3B4BList.push([line, 1])
    }
    else {
        this.TraditionalPlan2B3B4BList[index][1]++;
    }
    break;
 case "AlternatePlan3A4A":
    var index = this.AlternatePlan3A4AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.AlternatePlan3A4AList.push([line, 1])
    }
    else {
        this.AlternatePlan3A4AList[index][1]++;
    }
    break;
 case "AlternatePlan3A4B":
    var index = this.AlternatePlan3A4BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.AlternatePlan3A4BList.push([line, 1])
    }
    else {
        this.AlternatePlan3A4BList[index][1]++;
    }
    break;
 case "AlternatePlan3B4A":
    var index = this.AlternatePlan3B4AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.AlternatePlan3B4AList.push([line, 1])
    }
    else {
        this.AlternatePlan3B4AList[index][1]++;
    }
    break;
 case "AlternatePlan3B4B":
    var index = this.AlternatePlan3B4BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.AlternatePlan3B4BList.push([line, 1])
    }
    else {
        this.AlternatePlan3B4BList[index][1]++;
    }
    break;
 case "CoopPlan13A":
    var index = this.CoopPlan13AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan13AList.push([line, 1])
    }
    else {
        this.CoopPlan13AList[index][1]++;
    }
    break;
 case "CoopPlan13B":
    var index = this.CoopPlan13BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan13BList.push([line, 1])
    }
    else {
        this.CoopPlan13BList[index][1]++;
    }
    break;
 case "CoopPlan23A":
    var index = this.CoopPlan23AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan23AList.push([line, 1])
    }
    else {
        this.CoopPlan23AList[index][1]++;
    }
    break;
 case "CoopPlan23B":
    var index = this.CoopPlan23BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan23BList.push([line, 1])
    }
    else {
        this.CoopPlan23BList[index][1]++;
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
 case "CoopPlan43A":
    var index = this.CoopPlan43AList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan43AList.push([line, 1])
    }
    else {
        this.CoopPlan43AList[index][1]++;
    }
    break;
 case "CoopPlan43B":
    var index = this.CoopPlan43BList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan43BList.push([line, 1])
    }
    else {
        this.CoopPlan43BList[index][1]++;
    }
    break;
    default:
    console.log("shouldn't be here");
    }
};
this.removeLine = function(line) {
switch($scope.selectedPlan+$scope.field2.group2+$scope.field3.group3+$scope.field4.group4+$scope.selectedTerm) { 
 case "TraditionalPlan2A3A4A":
    var index = this.TraditionalPlan2A3A4AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlan2A3A4AList[index][1]--
        if (this.TraditionalPlan2A3A4AList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlan2A3A4AList.splice(index, 1);
        }
    }
    break; case "TraditionalPlan2A3A4B":
    var index = this.TraditionalPlan2A3A4BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlan2A3A4BList[index][1]--
        if (this.TraditionalPlan2A3A4BList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlan2A3A4BList.splice(index, 1);
        }
    }
    break; case "TraditionalPlan2A3B4A":
    var index = this.TraditionalPlan2A3B4AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlan2A3B4AList[index][1]--
        if (this.TraditionalPlan2A3B4AList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlan2A3B4AList.splice(index, 1);
        }
    }
    break; case "TraditionalPlan2A3B4B":
    var index = this.TraditionalPlan2A3B4BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlan2A3B4BList[index][1]--
        if (this.TraditionalPlan2A3B4BList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlan2A3B4BList.splice(index, 1);
        }
    }
    break; case "TraditionalPlan2B3A4A":
    var index = this.TraditionalPlan2B3A4AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlan2B3A4AList[index][1]--
        if (this.TraditionalPlan2B3A4AList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlan2B3A4AList.splice(index, 1);
        }
    }
    break; case "TraditionalPlan2B3A4B":
    var index = this.TraditionalPlan2B3A4BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlan2B3A4BList[index][1]--
        if (this.TraditionalPlan2B3A4BList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlan2B3A4BList.splice(index, 1);
        }
    }
    break; case "TraditionalPlan2B3B4A":
    var index = this.TraditionalPlan2B3B4AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlan2B3B4AList[index][1]--
        if (this.TraditionalPlan2B3B4AList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlan2B3B4AList.splice(index, 1);
        }
    }
    break; case "TraditionalPlan2B3B4B":
    var index = this.TraditionalPlan2B3B4BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlan2B3B4BList[index][1]--
        if (this.TraditionalPlan2B3B4BList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlan2B3B4BList.splice(index, 1);
        }
    }
    break; case "AlternatePlan3A4A":
    var index = this.AlternatePlan3A4AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.AlternatePlan3A4AList[index][1]--
        if (this.AlternatePlan3A4AList[index][1] <= 0) {
            line.hide(false);
            this.AlternatePlan3A4AList.splice(index, 1);
        }
    }
    break; case "AlternatePlan3A4B":
    var index = this.AlternatePlan3A4BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.AlternatePlan3A4BList[index][1]--
        if (this.AlternatePlan3A4BList[index][1] <= 0) {
            line.hide(false);
            this.AlternatePlan3A4BList.splice(index, 1);
        }
    }
    break; case "AlternatePlan3B4A":
    var index = this.AlternatePlan3B4AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.AlternatePlan3B4AList[index][1]--
        if (this.AlternatePlan3B4AList[index][1] <= 0) {
            line.hide(false);
            this.AlternatePlan3B4AList.splice(index, 1);
        }
    }
    break; case "AlternatePlan3B4B":
    var index = this.AlternatePlan3B4BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.AlternatePlan3B4BList[index][1]--
        if (this.AlternatePlan3B4BList[index][1] <= 0) {
            line.hide(false);
            this.AlternatePlan3B4BList.splice(index, 1);
        }
    }
    break; case "CoopPlan13A":
    var index = this.CoopPlan13AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan13AList[index][1]--
        if (this.CoopPlan13AList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan13AList.splice(index, 1);
        }
    }
    break; case "CoopPlan13B":
    var index = this.CoopPlan13BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan13BList[index][1]--
        if (this.CoopPlan13BList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan13BList.splice(index, 1);
        }
    }
    break; case "CoopPlan23A":
    var index = this.CoopPlan23AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan23AList[index][1]--
        if (this.CoopPlan23AList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan23AList.splice(index, 1);
        }
    }
    break; case "CoopPlan23B":
    var index = this.CoopPlan23BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan23BList[index][1]--
        if (this.CoopPlan23BList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan23BList.splice(index, 1);
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
    break; case "CoopPlan43A":
    var index = this.CoopPlan43AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan43AList[index][1]--
        if (this.CoopPlan43AList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan43AList.splice(index, 1);
        }
    }
    break; case "CoopPlan43B":
    var index = this.CoopPlan43BList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan43BList[index][1]--
        if (this.CoopPlan43BList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan43BList.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.addToClicked = function(element, category) {
switch($scope.selectedPlan+$scope.field2.group2+$scope.field3.group3+$scope.field4.group4+$scope.selectedTerm) { 
 case "TraditionalPlan2A3A4A":
    var index = this.TraditionalPlan2A3A4AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlan2A3A4AClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlan2A3A4AClicked[index][1] = category;
        this.TraditionalPlan2A3A4AClicked[index][2]++;
    }
    this.TraditionalPlan2A3A4AClickedMap.get(element).push(category);
    break; case "TraditionalPlan2A3A4B":
    var index = this.TraditionalPlan2A3A4BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlan2A3A4BClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlan2A3A4BClicked[index][1] = category;
        this.TraditionalPlan2A3A4BClicked[index][2]++;
    }
    this.TraditionalPlan2A3A4BClickedMap.get(element).push(category);
    break; case "TraditionalPlan2A3B4A":
    var index = this.TraditionalPlan2A3B4AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlan2A3B4AClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlan2A3B4AClicked[index][1] = category;
        this.TraditionalPlan2A3B4AClicked[index][2]++;
    }
    this.TraditionalPlan2A3B4AClickedMap.get(element).push(category);
    break; case "TraditionalPlan2A3B4B":
    var index = this.TraditionalPlan2A3B4BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlan2A3B4BClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlan2A3B4BClicked[index][1] = category;
        this.TraditionalPlan2A3B4BClicked[index][2]++;
    }
    this.TraditionalPlan2A3B4BClickedMap.get(element).push(category);
    break; case "TraditionalPlan2B3A4A":
    var index = this.TraditionalPlan2B3A4AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlan2B3A4AClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlan2B3A4AClicked[index][1] = category;
        this.TraditionalPlan2B3A4AClicked[index][2]++;
    }
    this.TraditionalPlan2B3A4AClickedMap.get(element).push(category);
    break; case "TraditionalPlan2B3A4B":
    var index = this.TraditionalPlan2B3A4BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlan2B3A4BClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlan2B3A4BClicked[index][1] = category;
        this.TraditionalPlan2B3A4BClicked[index][2]++;
    }
    this.TraditionalPlan2B3A4BClickedMap.get(element).push(category);
    break; case "TraditionalPlan2B3B4A":
    var index = this.TraditionalPlan2B3B4AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlan2B3B4AClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlan2B3B4AClicked[index][1] = category;
        this.TraditionalPlan2B3B4AClicked[index][2]++;
    }
    this.TraditionalPlan2B3B4AClickedMap.get(element).push(category);
    break; case "TraditionalPlan2B3B4B":
    var index = this.TraditionalPlan2B3B4BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlan2B3B4BClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlan2B3B4BClicked[index][1] = category;
        this.TraditionalPlan2B3B4BClicked[index][2]++;
    }
    this.TraditionalPlan2B3B4BClickedMap.get(element).push(category);
    break; case "AlternatePlan3A4A":
    var index = this.AlternatePlan3A4AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.AlternatePlan3A4AClicked.push([element, category, 1]);
    }
    else {
        this.AlternatePlan3A4AClicked[index][1] = category;
        this.AlternatePlan3A4AClicked[index][2]++;
    }
    this.AlternatePlan3A4AClickedMap.get(element).push(category);
    break; case "AlternatePlan3A4B":
    var index = this.AlternatePlan3A4BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.AlternatePlan3A4BClicked.push([element, category, 1]);
    }
    else {
        this.AlternatePlan3A4BClicked[index][1] = category;
        this.AlternatePlan3A4BClicked[index][2]++;
    }
    this.AlternatePlan3A4BClickedMap.get(element).push(category);
    break; case "AlternatePlan3B4A":
    var index = this.AlternatePlan3B4AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.AlternatePlan3B4AClicked.push([element, category, 1]);
    }
    else {
        this.AlternatePlan3B4AClicked[index][1] = category;
        this.AlternatePlan3B4AClicked[index][2]++;
    }
    this.AlternatePlan3B4AClickedMap.get(element).push(category);
    break; case "AlternatePlan3B4B":
    var index = this.AlternatePlan3B4BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.AlternatePlan3B4BClicked.push([element, category, 1]);
    }
    else {
        this.AlternatePlan3B4BClicked[index][1] = category;
        this.AlternatePlan3B4BClicked[index][2]++;
    }
    this.AlternatePlan3B4BClickedMap.get(element).push(category);
    break; case "CoopPlan13A":
    var index = this.CoopPlan13AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan13AClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan13AClicked[index][1] = category;
        this.CoopPlan13AClicked[index][2]++;
    }
    this.CoopPlan13AClickedMap.get(element).push(category);
    break; case "CoopPlan13B":
    var index = this.CoopPlan13BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan13BClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan13BClicked[index][1] = category;
        this.CoopPlan13BClicked[index][2]++;
    }
    this.CoopPlan13BClickedMap.get(element).push(category);
    break; case "CoopPlan23A":
    var index = this.CoopPlan23AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan23AClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan23AClicked[index][1] = category;
        this.CoopPlan23AClicked[index][2]++;
    }
    this.CoopPlan23AClickedMap.get(element).push(category);
    break; case "CoopPlan23B":
    var index = this.CoopPlan23BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan23BClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan23BClicked[index][1] = category;
        this.CoopPlan23BClicked[index][2]++;
    }
    this.CoopPlan23BClickedMap.get(element).push(category);
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
    break; case "CoopPlan43A":
    var index = this.CoopPlan43AClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan43AClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan43AClicked[index][1] = category;
        this.CoopPlan43AClicked[index][2]++;
    }
    this.CoopPlan43AClickedMap.get(element).push(category);
    break; case "CoopPlan43B":
    var index = this.CoopPlan43BClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan43BClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan43BClicked[index][1] = category;
        this.CoopPlan43BClicked[index][2]++;
    }
    this.CoopPlan43BClickedMap.get(element).push(category);
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element, category) {
switch($scope.selectedPlan+$scope.field2.group2+$scope.field3.group3+$scope.field4.group4+$scope.selectedTerm) { 
 case "TraditionalPlan2A3A4A":
    var index = this.TraditionalPlan2A3A4AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlan2A3A4AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlan2A3A4AClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlan2A3A4AClicked[index][2]--;
        if (this.TraditionalPlan2A3A4AClicked[index][2] <= 0) {
            this.TraditionalPlan2A3A4AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlan2A3A4AClickedMap.get(element).length - 1
        return this.TraditionalPlan2A3A4AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "TraditionalPlan2A3A4B":
    var index = this.TraditionalPlan2A3A4BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlan2A3A4BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlan2A3A4BClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlan2A3A4BClicked[index][2]--;
        if (this.TraditionalPlan2A3A4BClicked[index][2] <= 0) {
            this.TraditionalPlan2A3A4BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlan2A3A4BClickedMap.get(element).length - 1
        return this.TraditionalPlan2A3A4BClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "TraditionalPlan2A3B4A":
    var index = this.TraditionalPlan2A3B4AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlan2A3B4AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlan2A3B4AClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlan2A3B4AClicked[index][2]--;
        if (this.TraditionalPlan2A3B4AClicked[index][2] <= 0) {
            this.TraditionalPlan2A3B4AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlan2A3B4AClickedMap.get(element).length - 1
        return this.TraditionalPlan2A3B4AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "TraditionalPlan2A3B4B":
    var index = this.TraditionalPlan2A3B4BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlan2A3B4BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlan2A3B4BClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlan2A3B4BClicked[index][2]--;
        if (this.TraditionalPlan2A3B4BClicked[index][2] <= 0) {
            this.TraditionalPlan2A3B4BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlan2A3B4BClickedMap.get(element).length - 1
        return this.TraditionalPlan2A3B4BClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "TraditionalPlan2B3A4A":
    var index = this.TraditionalPlan2B3A4AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlan2B3A4AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlan2B3A4AClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlan2B3A4AClicked[index][2]--;
        if (this.TraditionalPlan2B3A4AClicked[index][2] <= 0) {
            this.TraditionalPlan2B3A4AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlan2B3A4AClickedMap.get(element).length - 1
        return this.TraditionalPlan2B3A4AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "TraditionalPlan2B3A4B":
    var index = this.TraditionalPlan2B3A4BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlan2B3A4BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlan2B3A4BClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlan2B3A4BClicked[index][2]--;
        if (this.TraditionalPlan2B3A4BClicked[index][2] <= 0) {
            this.TraditionalPlan2B3A4BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlan2B3A4BClickedMap.get(element).length - 1
        return this.TraditionalPlan2B3A4BClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "TraditionalPlan2B3B4A":
    var index = this.TraditionalPlan2B3B4AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlan2B3B4AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlan2B3B4AClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlan2B3B4AClicked[index][2]--;
        if (this.TraditionalPlan2B3B4AClicked[index][2] <= 0) {
            this.TraditionalPlan2B3B4AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlan2B3B4AClickedMap.get(element).length - 1
        return this.TraditionalPlan2B3B4AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "TraditionalPlan2B3B4B":
    var index = this.TraditionalPlan2B3B4BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlan2B3B4BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlan2B3B4BClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlan2B3B4BClicked[index][2]--;
        if (this.TraditionalPlan2B3B4BClicked[index][2] <= 0) {
            this.TraditionalPlan2B3B4BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlan2B3B4BClickedMap.get(element).length - 1
        return this.TraditionalPlan2B3B4BClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "AlternatePlan3A4A":
    var index = this.AlternatePlan3A4AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.AlternatePlan3A4AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.AlternatePlan3A4AClickedMap.get(element).splice(indexMap, 1);
        }
        this.AlternatePlan3A4AClicked[index][2]--;
        if (this.AlternatePlan3A4AClicked[index][2] <= 0) {
            this.AlternatePlan3A4AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.AlternatePlan3A4AClickedMap.get(element).length - 1
        return this.AlternatePlan3A4AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "AlternatePlan3A4B":
    var index = this.AlternatePlan3A4BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.AlternatePlan3A4BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.AlternatePlan3A4BClickedMap.get(element).splice(indexMap, 1);
        }
        this.AlternatePlan3A4BClicked[index][2]--;
        if (this.AlternatePlan3A4BClicked[index][2] <= 0) {
            this.AlternatePlan3A4BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.AlternatePlan3A4BClickedMap.get(element).length - 1
        return this.AlternatePlan3A4BClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "AlternatePlan3B4A":
    var index = this.AlternatePlan3B4AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.AlternatePlan3B4AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.AlternatePlan3B4AClickedMap.get(element).splice(indexMap, 1);
        }
        this.AlternatePlan3B4AClicked[index][2]--;
        if (this.AlternatePlan3B4AClicked[index][2] <= 0) {
            this.AlternatePlan3B4AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.AlternatePlan3B4AClickedMap.get(element).length - 1
        return this.AlternatePlan3B4AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "AlternatePlan3B4B":
    var index = this.AlternatePlan3B4BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.AlternatePlan3B4BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.AlternatePlan3B4BClickedMap.get(element).splice(indexMap, 1);
        }
        this.AlternatePlan3B4BClicked[index][2]--;
        if (this.AlternatePlan3B4BClicked[index][2] <= 0) {
            this.AlternatePlan3B4BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.AlternatePlan3B4BClickedMap.get(element).length - 1
        return this.AlternatePlan3B4BClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan13A":
    var index = this.CoopPlan13AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan13AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan13AClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan13AClicked[index][2]--;
        if (this.CoopPlan13AClicked[index][2] <= 0) {
            this.CoopPlan13AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan13AClickedMap.get(element).length - 1
        return this.CoopPlan13AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan13B":
    var index = this.CoopPlan13BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan13BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan13BClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan13BClicked[index][2]--;
        if (this.CoopPlan13BClicked[index][2] <= 0) {
            this.CoopPlan13BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan13BClickedMap.get(element).length - 1
        return this.CoopPlan13BClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan23A":
    var index = this.CoopPlan23AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan23AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan23AClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan23AClicked[index][2]--;
        if (this.CoopPlan23AClicked[index][2] <= 0) {
            this.CoopPlan23AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan23AClickedMap.get(element).length - 1
        return this.CoopPlan23AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan23B":
    var index = this.CoopPlan23BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan23BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan23BClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan23BClicked[index][2]--;
        if (this.CoopPlan23BClicked[index][2] <= 0) {
            this.CoopPlan23BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan23BClickedMap.get(element).length - 1
        return this.CoopPlan23BClickedMap.get(element)[maxIndex];
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
    break; case "CoopPlan43A":
    var index = this.CoopPlan43AClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan43AClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan43AClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan43AClicked[index][2]--;
        if (this.CoopPlan43AClicked[index][2] <= 0) {
            this.CoopPlan43AClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan43AClickedMap.get(element).length - 1
        return this.CoopPlan43AClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan43B":
    var index = this.CoopPlan43BClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan43BClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan43BClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan43BClicked[index][2]--;
        if (this.CoopPlan43BClicked[index][2] <= 0) {
            this.CoopPlan43BClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan43BClickedMap.get(element).length - 1
        return this.CoopPlan43BClickedMap.get(element)[maxIndex];
    }
    return "";
    break;    default:
    console.log("shouldn't be here");
    }
};
