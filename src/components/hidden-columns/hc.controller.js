/**
 * Created by bobtian on 16/2/3.
 */


export default class HiddenColumnsController {
    constructor() {
        this.options = {
            "columnDefs": [
                {
                    "targets": [2],
                    "visible": false,
                    "searchable": false
                },
                {
                    "targets": [3],
                    "visible": false
                }]
        };
    }
}


HiddenColumnsController.$inject = [];