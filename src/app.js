/**
 * Created by bob on 2016/1/19.
 */

import $ from 'jquery';
import 'datatables';
import angular from 'angular';
import 'angular-resource';
//var Math=require("exports?Math!./math.js");
//var Math=require('exports?Math!math');
//var Math = require('math');

angular.module('app', ['ngResource'])
    .controller('MainController', ['$scope', 'Role', function ($scope, Role) {
        $scope.options = {};

        $scope.getRoles = function () {
            var params = {
                page: 0,
                size: 100
            };

            Role.pageQuery(params, function (res) {
                $scope.totalCount = res.totalCount;
                $scope.options.dataSource = res.values;
            }, function (res) {
                console.log(res);
            });
        }
    }])
    .factory('Role', ['$resource', function ($resource) {
        return $resource('', {}, {
            pageQuery: {
                method: 'GET',
                url: 'https://api.yinile.com/api/roles?page=:page&size=:size',
                params: {page: '@page', size: '@size'}
            }
        });
    }])
    .directive('myTable', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                options: '='
            },
            link: function (scope, el, attrs) {
                // el.dataTable();
                // $("#testTable").dataTable();
                var dataTable = $(el).dataTable(scope.options);
                console.log(scope);

                scope.$watch('options.dataSource', handleModelUpdates, true);

                function handleModelUpdates(newData) {
                    console.log(newData);
                    var data = newData || null;
                    if (data) {
                        dataTable.fnClearTable();
                        dataTable.fnAddData(data);
                    }
                }
            }
        }
    });