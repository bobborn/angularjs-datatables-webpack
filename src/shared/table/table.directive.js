/**
 * Created by bob on 2016/1/20.
 */

import angular from 'angular';

export default class TableDirective {
    constructor() {
        this.restrict = 'EA';
        this.replace = true;
        this.scope = {
            options: "="
        };
    }


    link(scope, el, attrs) {
        console.log(scope);
        var dataTable = $(el).dataTable(scope.options);
        scope.$watch('options.dataSource', handleModelUpdates, true);

        function handleModelUpdates(newData) {
            var data = newData || null;
            if (data) {
                dataTable.fnClearTable();
                dataTable.fnAddData(data);
            }
        }
    }
}

TableDirective.$inject = [];