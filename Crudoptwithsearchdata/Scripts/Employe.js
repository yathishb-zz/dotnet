/// <reference path="angular.min.js" />
var app = angular.module("myapp", [])
app.controller("myctrl", function ($scope, $http, $window) {
    $scope.getallstste = function () {
        $http({
            method: "GET",
            url: "/Employe/GetAllstate"
        }).then(function (response) {
            $scope.states = response.data;
        }), function () {
            alert("error occure");
        }
    };
 
    $scope.getallemp = function () {
        $http({
            method: "GET",
            url: "/Employe/GetAllData"
        }).then(function (response) {
            $scope.employes = response.data;
        }), function () {
            alert("error occure");
        }

    };
    

    $scope.insertemp = function () {
        var butclick = document.getElementById("btnSave").getAttribute("value");
        if (butclick == "Submit") {
            $scope.addemploye = {};
            $scope.addemploye.Ename = $scope.EmpName;
            $scope.addemploye.Emiddlename = $scope.EmpMiddle;
            $scope.addemploye.Elastname = $scope.EmpLastname;
            $scope.addemploye.StateId = $scope.statess.StateId;
            $scope.addemploye.IsActive = $scope.status;
            $scope.addemploye.Date = $scope.Empdate;
            $http({
                method: "POST",
                url: "/Employe/insertemp",
                data: JSON.stringify($scope.addemploye)
            }).then(function (response) {
                $scope.employes = response.data;
                $scope.getallemp();
                $scope.EmpName = "";
                $scope.EmpMiddle = "";
                $scope.EmpLastname = "";
                $scope.statess = "";
                $scope.status = "";
                $scope.Empdate = "";
            });
        }
    }
    $scope.deleteemp = function (Eid) {
        $http({
            method: "POST",
            url: "Employe/Deleteemploye",
            datatype: "json",
            data: JSON.stringify(Eid)
        }).then(function (response) {
            $scope.employes = response.data

        }, function () {
            alert("Error Occur");
        })
    }
    $scope.EditItem = {};


    $scope.Edit = function (index) {
        $scope.employes[index].EditMode = true
        $scope.EditItem.Ename = $scope.employes[index].Ename;
        $scope.EditItem.Emiddlename = $scope.employes[index].Emiddlename;
        $scope.EditItem.Elastname = $scope.employes[index].Elastname;
        $scope.EditItem.StateId = $scope.employes[index].StateId;
        $scope.EditItem.IsActive = $scope.employes[index].IsActive;
        $scope.EditItem.Date = $scope.employes[index].Date;

    };
    $scope.Cancel = function (index) {

        $scope.employees[index].Ename = $scope.EditItem.Ename;
        $scope.employees[index].Emiddlename = $scope.EditItem.Emiddlename;
        $scope.employees[index].Elastname = $scope.EditItem.Elastname;
        $scope.employees[index].StateId = $scope.EditItem.StateId;
        $scope.employees[index].IsActive = $scope.EditItem.IsActive;
        $scope.employees[index].Date = $scope.EditItem.Date;
        $scope.employees[index].EditMode = false;
        $scope.EditItem = {};
    };
    $scope.updateemp = function () {
        var emplpoye = $scope.employes[index];
        $scope.updateemploye = {};
        $scope.updateemploye.Ename = $scope.Emp.Ename;
        $scope.updateemploye.Emiddlename = $scope.Emp.Emiddlename;
        $scope.updateemploye.Elastname = $scope.Emp.Elastname;
        $scope.updateemploye.StateId = $scope.Emp.states.StateId;
        $scope.updateemploye.IsActive = $scope.Emp.IsActive;
        $scope.updateemploye.Date = $scope.Emp.Empdate;
        $http({
            method: "POST",
            url: "/Employe/Updateemployee",
            data: JSON.stringify($scope.updateemploye)
        }).then(function (response) {
            $scope.employes = response.data;
            $scope.getallemp();
            $scope.Emp.Ename = "";
            $scope.Emp.Emp.Emiddlename = "";
            $scope.Emp.Elastname = "";
            $scope.Emp.statess = "";
            $scope.Emp.IsActive = "";
            $scope.Emp.Empdate = "";
        });
    }
});