/**
 * Created by bob on 2016/1/20.
 */

import angular from 'angular';

export default class TableDirective {
    constructor() {
        this.restrict = 'EA';
        this.replace = true;
        this.scope = {
            options: "=",
            rowClick: "&"
        };
    }


    link(scope, el, attrs) {
        console.log(scope);
        var dataTable = $(el).DataTable(scope.options);

        //点击行
        $(el).on('click', 'tbody > tr', function () {
            var expressionHandler = scope.rowClick();
            expressionHandler(dataTable.row(this));
        });


        scope.$watch('options.dataSource', handleModelUpdates, true);

        function handleModelUpdates(newData) {
            var data = newData || null;
            if (data) {
                console.log(scope.options.recordsTotal);
                dataTable.clear();
                dataTable.rows.add(data).draw();
                console.log(dataTable);
                // console.log(dataTable.ajax.json());
            }
        }
    }
}

TableDirective.$inject = [];