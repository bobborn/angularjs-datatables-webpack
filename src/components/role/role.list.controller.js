/**
 * Created by bob on 2016/1/20.
 */


export default class RoleListController {
    constructor(Role) {
        this.Role = Role;
        this.options = {
            "columns": [
                {
                    "data": "id"
                },
                {
                    "data": "name"
                },
                {
                    "data": "createUser"
                },
                {
                    "data": "createTime"
                },
                {
                    "data": "updateUser"
                },
                {
                    "data": "updateTime"
                }

            ]
        };


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

        this.getRoles();

    }

    getRoles() {
        var params = {
            page: 0,
            size: 10
        };

        this.Role.pageQuery(params, (res)=> {
            this.options.recordsTotal = res.totalCount;
            this.options.dataSource = res.values;
        }, function (res) {
            console.log(res);
        });
    }
}
RoleListController.$inject = ["$http"];
