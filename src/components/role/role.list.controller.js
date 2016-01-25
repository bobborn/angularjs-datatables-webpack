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

RoleListController.$inject = ['Role'];