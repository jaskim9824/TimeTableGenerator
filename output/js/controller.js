var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalPlan";
$scope.selectedTerm = "FallTerm3";
var that = this;
$scope.render = function(term) {
    if (term != undefined) {
        that.updateTerm(term);
    }
    that.updateObjFields($scope.selectedPlan, $scope.selectedTerm);
    that.checkOverlaps($scope.selectedPlan, $scope.selectedTerm);
    that.setAllCourses($scope.selectedPlan, $scope.selectedTerm);
};
this.updateTerm = function(term) {
    $scope.selectedTerm = term;
};
this.checkOverlaps = function(plan, term) {
    allOverlaps = {};
    for (const [day, dayList] of Object.entries($scope.coursesobj[plan][term])) {
        allOverlaps[day] = [];
        for (const [courseID, courseObj] of Object.entries($scope.coursesobj[plan][term][day])) {
            let overlapsList = [];
            courseObj.width = 321;
            courseObj.left = 0;
            if (courseObj.enabled) {
                let foundOverlap = false;
                for (const [checkID, checkObj] of Object.entries($scope.coursesobj[plan][term][day])) {
                    if ((courseID != checkID) && (checkObj.enabled)) {
                        let courseStart = Number(courseObj.start);
                        let courseEnd = Number(courseObj.end);
                        let checkStart = Number(checkObj.start);
                        let checkEnd = Number(checkObj.end);
                        if (((courseEnd > checkStart) && (courseStart <= checkStart)) || ((checkEnd > courseStart) && (checkStart <= courseStart))) {
                            foundOverlap = true;
                            if (!overlapsList.includes(courseObj)) {
                                overlapsList.push(courseObj);
                            }
                            if (!overlapsList.includes(checkObj)) {
                                overlapsList.push(checkObj);
                            }
                        }
                    }
                }
                if (!foundOverlap) {
                    courseObj.width = 321;
                    courseObj.left = 0;
                }
            }
            if (overlapsList.length > 0) {
                allOverlaps[day].push(overlapsList);
            }
        }
    }

    for (const [dayName, list] of Object.entries(allOverlaps)) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].length > 0) {
                for (const [index, overlapObj] of Object.entries(list[i])) {
                    if (321/list[i].length < overlapObj.width) {
                        overlapObj.width = 321/list[i].length;
                        overlapObj.left = (321/list[i].length)*index;
                    }
                }
            }
        }
    }
};
this.updateObjFields = function(plan, term) {
    for (const [day, dayList] of Object.entries($scope.coursesobj[plan][term])) {
        for (const [courseID, courseObj] of Object.entries($scope.coursesobj[plan][term][day])) {
            let found = false;
            let groupName = "";
            for (const [plainName, fullName] of Object.entries($scope[plan + term + "obj"])) {
                if (!plainName.includes("group")) {
                    if (plainName.includes("__cgoption") && (plainName.slice(-2) == groupName)) {
                        if (fullName == "ALL") {
                            let removeIndex = plainName.indexOf("__cgoption");
                            let strippedName = plainName.substring(0, removeIndex);
                            if (courseID.includes(strippedName)) {
                                found = true;
                            }
                        }
                        else if (courseID.includes(fullName.replace(/ /g, ""))) {
                            found = true;
                        }
                    }
                    else if (!plainName.includes("__cgoption")) {
                        if (fullName == "ALL") {
                            if (courseID.includes(plainName)) {
                                found = true;
                            }
                        }
                        else if (courseID.includes(fullName.replace(/ /g, ""))) {
                            found = true;
                        }
                    }
                }
                else {
                    groupName = fullName;
                }
            }
            courseObj.enabled = found;
        }
    }
};
this.setAllCourses = function(plan, term) {
    for (const [day, dayList] of Object.entries($scope.coursesobj[plan][term])) {
        for (const [courseID, courseObj] of Object.entries($scope.coursesobj[plan][term][day])) {
            document.getElementById(courseObj.courseID.replace("_", "-")).style.width = String(courseObj.width) + "px";
            document.getElementById(courseObj.courseID.replace("_","-")).style.left = String(courseObj.left) + "px";
            if (courseObj.width < 60) {
                if (document.getElementById(courseObj.courseID.replace("_", "-")).classList.contains("course")) {
                    document.getElementById(courseObj.courseID.replace("_", "-")).classList.remove("course");
                    document.getElementById(courseObj.courseID.replace("_", "-")).classList.add("narrowcourse");
                }
            }
            else if (document.getElementById(courseObj.courseID.replace("_", "-")).classList.contains("narrowcourse")) {
                document.getElementById(courseObj.courseID.replace("_", "-")).classList.remove("narrowcourse");
                document.getElementById(courseObj.courseID.replace("_", "-")).classList.add("course");
            }
        }
    }
};
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
