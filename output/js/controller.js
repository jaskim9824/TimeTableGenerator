var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalPlan";
$scope.selectedTerm = "FallTerm1";
$scope.updateTerm = function(term) {
  $scope.selectedTerm = term;
}
$scope.updateField2 = function(field2) {
  $scope.field2.group2 = field2;
}
$scope.updateField3 = function(field3) {
  $scope.field3.group3 = field3;
}
$scope.updateField4 = function(field4) {
  $scope.field4.group4 = field4;
}
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
this.TraditionalPlan2A3A4AMaxCourses = 7;
this.AlternatePlan3A4AList = [];
this.AlternatePlan3A4AClicked = [];
this.AlternatePlan3A4ALegendBtns = [];
this.AlternatePlan3A4ALegendBtnsClicked = [];
this.AlternatePlan3A4AClickedMap = new Map();
this.AlternatePlan3A4ATerms = 9;
this.AlternatePlan3A4AMaxCourses = 6;
this.CoopPlan13AList = [];
this.CoopPlan13AClicked = [];
this.CoopPlan13ALegendBtns = [];
this.CoopPlan13ALegendBtnsClicked = [];
this.CoopPlan13AClickedMap = new Map();
this.CoopPlan13ATerms = 13;
this.CoopPlan13AMaxCourses = 7;
this.CoopPlan23AList = [];
this.CoopPlan23AClicked = [];
this.CoopPlan23ALegendBtns = [];
this.CoopPlan23ALegendBtnsClicked = [];
this.CoopPlan23AClickedMap = new Map();
this.CoopPlan23ATerms = 13;
this.CoopPlan23AMaxCourses = 7;
this.CoopPlan3BiomedicalList = [];
this.CoopPlan3BiomedicalClicked = [];
this.CoopPlan3BiomedicalLegendBtns = [];
this.CoopPlan3BiomedicalLegendBtnsClicked = [];
this.CoopPlan3BiomedicalClickedMap = new Map();
this.CoopPlan3BiomedicalTerms = 13;
this.CoopPlan3BiomedicalMaxCourses = 7;
this.CoopPlan43BList = [];
this.CoopPlan43BClicked = [];
this.CoopPlan43BLegendBtns = [];
this.CoopPlan43BLegendBtnsClicked = [];
this.CoopPlan43BClickedMap = new Map();
this.CoopPlan43BTerms = 13;
this.CoopPlan43BMaxCourses = 7;
$scope.field2 = { group2: "2A" };
$scope.field3 = { group3: "3A" };
$scope.field4 = { group4: "4A" };
this.previousPlan = $scope.selectedPlan+$scope.field2.group2+$scope.field3.group3+$scope.field4.group4+$scope.selectedTerm
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
            $scope.selectedTerm = "FallTerm1";
            $scope.field2.group2 ="2A";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="4A";
          $scope.$apply();
          break;
      case "AlternatePlan": 
            $scope.selectedTerm = "FallTerm1";
            $scope.field2.group2 ="";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="4A";
          $scope.$apply();
          break;
      case "CoopPlan1": 
            $scope.selectedTerm = "FallTerm1";
            $scope.field2.group2 ="";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="";
          $scope.$apply();
          break;
      case "CoopPlan2": 
            $scope.selectedTerm = "FallTerm1";
            $scope.field2.group2 ="";
            $scope.field3.group3 ="3A";
            $scope.field4.group4 ="";
          $scope.$apply();
          break;
      case "CoopPlan3Biomedical": 
            $scope.selectedTerm = "FallTerm1";
            $scope.field2.group2 ="";
            $scope.field3.group3 ="";
            $scope.field4.group4 ="";
          $scope.$apply();
          break;
      case "CoopPlan4": 
            $scope.selectedTerm = "FallTerm1";
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
    break; case "AlternatePlan3A4A":
    var index = this.AlternatePlan3A4AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.AlternatePlan3A4AList[index][1]--
        if (this.AlternatePlan3A4AList[index][1] <= 0) {
            line.hide(false);
            this.AlternatePlan3A4AList.splice(index, 1);
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
    break; case "CoopPlan23A":
    var index = this.CoopPlan23AList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan23AList[index][1]--
        if (this.CoopPlan23AList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan23AList.splice(index, 1);
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