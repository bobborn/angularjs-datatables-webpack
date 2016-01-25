/**
 * Created by bob on 2016/1/20.
 */

export default class RoleListController {
    constructor($http) {
        this.options = {
            "order": [[3, "desc"]],
            serverSide :true
        };
        let thisObj = this;

        this.options.ajax = function(data, callback, settings) {

            $http.get("http://api.yinile.com/api/roles?page=0&size=10")
                .success(function (response) {
                    let dataSource = new Array(response.values.length);
                    for (let i = 0; i < response.values.length; i++) {
                        let valueItem = response.values[i];
                        let tmpArr = [valueItem.name, valueItem.createTime, valueItem.createUser, valueItem.updateTime,
                            valueItem.updateUser, "<a href='javascript:void(0)'>&#x7F16;&#x8F91;</a>"];
                        dataSource[i] = tmpArr;
                    }
                    var jynObj = {
                        "draw": 1,
                        "recordsTotal": 14,
                        "recordsFiltered": 14,
                        "data": dataSource
                    };
                    console.log(jynObj);
                    callback(jynObj);
                });
        };
/*
        this.options.ajax = {
            url: "http://api.yinile.com/api/roles?page=0&size=10",
            dataSrc: function ( json ) {
                console.log(json.values.length);
                let dataSource = new Array(json.values.length);
                for (let i = 0; i < json.values.length; i++) {
                    let valueItem = json.values[i];
                    let tmpArr = [valueItem.name, valueItem.createTime, valueItem.createUser, valueItem.updateTime,
                        valueItem.updateUser, "<a href='javascript:void(0)'>&#x7F16;&#x8F91;</a>"];
                    dataSource[i] = tmpArr;
                }
                return dataSource;
            }
        }; */
/*
        $http.get("http://api.yinile.com/api/roles?page=0&size=10")
            .success(function (response) {
                let dataSource = new Array(response.values.length);
                for (let i = 0; i < response.values.length; i++) {
                    let valueItem = response.values[i];
                    let tmpArr = [valueItem.name, valueItem.createTime, valueItem.createUser, valueItem.updateTime,
                        valueItem.updateUser, "<a href='javascript:void(0)'>&#x7F16;&#x8F91;</a>"];
                    dataSource[i] = tmpArr;
                }
                thisObj.options.dataSource = dataSource;
            });
*/
 /*       this.options.dataSource = [
                [
                    "Tiger Nixonaa2",
                    "System Architect",
                    "Edinburgh",
                    "5421",
                    "2011/04/25",
                    "$320,800"
                ]
        ]; */
    }
}


RoleListController.$inject = ["$http"];
