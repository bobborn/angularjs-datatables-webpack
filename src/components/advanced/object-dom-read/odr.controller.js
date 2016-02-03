/**
 * Created by bobtian on 16/2/3.
 */



export default class ObjectDomReadController {
    constructor() {
        this.options = {
            "columns":[
                { "data": "name" },
                { "data": "position" },
                { "data": "office" },
                { "data": "age" },
                { "data": "start_date" },
                { "data": "salary" }
            ]
        };
    }
}


ObjectDomReadController.$inject = [];