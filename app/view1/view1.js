'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($scope) {
        $scope.showSubjects = false;
        $scope.selectedTopic = {name: null, value: null};
        $scope.selectedSubject = {name: null, value: null};
        $scope.topics = [
            {name: "A", value: "a"},
            {name: "B", value: "b"},
            {name: "C", value: "c"}
        ];
        $scope.subjects = [];
        $scope.topicSubjects = [{"a": [this.topicASubjects], "b": [this.topicBSubjects], "c": [this.topicCSubjects]}]
        $scope.topicASubjects = [
            {name: "breakfast", value: "BK"},
            {name: "lunch", value: "LCH"},
            {name: "dinner", value: "DNR"}
        ];
        $scope.topicBSubjects = [
            {name: "poker", value: "PK"},
            {name: "blackjack", value: "BJ"},
            {name: "bridge", value: "BR"}
        ]
        $scope.topicCSubjects = [
            {name: "running", value: "RN"},
            {name: "basketball", value: "BSK"},
            {name: "football", value: "FB"}
        ]

        $scope.subjectChoice = function (data) {
            console.log(data);
            console.log(this.selectedSubject);
        }
        $scope.selectedRow = function (data) {

            if (data != null || undefined) {
                this.showSubjects = true;
                switch (data) {
                    case "a":
                        this.subjects = this.topicASubjects;
                        break;
                    case "b":
                        this.subjects = this.topicBSubjects;
                        break;
                    case "c":
                        this.subjects = this.topicCSubjects;
                        break;
                }
                console.log(this.subjects);
            } else {
                this.showSubjects = false;
            }
        }
    });
