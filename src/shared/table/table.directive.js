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
            rowClick: "&",
            orderCallback: "&",
            searchCallback: "&",
            pageCallback: "&"
        };
    }


    link(scope, el, attrs) {

        var dataTable = $(el)
            .on('order.dt', function () {

                var handler = scope.orderCallback();
                if (typeof handler === 'function') {
                    handler();
                }
            })
            .on('search.dt', function () {
                var handler = scope.searchCallback();
                if (typeof handler === 'function') {
                    handler();
                }
            })
            .on('page.dt', function () {
                var handler = scope.pageCallback();
                if (typeof handler === 'function') {
                    handler();
                }
            })
            .DataTable(scope.options);


        //点击行
        $(el).on('click', 'tbody > tr', function () {
            var expressionHandler = scope.rowClick();
            if (typeof expressionHandler === 'function') {
                expressionHandler(dataTable.row(this));
            }
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