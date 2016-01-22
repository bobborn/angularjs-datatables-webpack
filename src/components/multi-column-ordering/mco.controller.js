/**
 * Created by bob on 2016/1/22.
 */

export default class MultiColumnOrderingController {
    constructor() {
        this.options = {
            columnDefs: [ {
                targets: [ 0 ],
                orderData: [ 0, 1 ]
            }, {
                targets: [ 1 ],
                orderData: [ 1, 0 ]
            }, {
                targets: [ 4 ],
                orderData: [ 4, 0 ]
            } ]
        };
    }
}


MultiColumnOrderingController.$inject = [];