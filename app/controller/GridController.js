Ext.define('ClearApp.app.controller.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-controller',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    stringReplacing: function(value) {
        let str = value.toString();
        const rep1 = str.replace("-", "");
        const rep2 = rep1.replace(")", "");
        const rep3 = rep2.replace(" ", "");
        const rep4 = rep3.replace("(", "");
        return '<p> ' + rep4 + ' </p>';
    },

});