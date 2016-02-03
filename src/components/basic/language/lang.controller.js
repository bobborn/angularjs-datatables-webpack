/**
 * Created by bobtian on 16/2/3.
 */

export default class LanguageController {
    constructor() {
        this.options = {
            "language": {
                "lengthMenu": "Display _MENU_ records per page",
                "zeroRecords": "Nothing found - sorry",
                "info": "Showing page _PAGE_ of _PAGES_",
                "infoEmpty": "No records available",
                "infoFiltered": "(filtered from _MAX_ total records)"
            }
        };
    }
}


LanguageController.$inject = [];