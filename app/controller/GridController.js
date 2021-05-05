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
    renderrerFunction: function (value) {
        const str = value.toString();
        return str;
    },
    mailTofunction: function (value) {
        return '<a href="mailto:' + value.toString() + '">' + value.toString() + '</a>';
    },
    rendererImage: function (value) {
        return '<img src="' + value.toString() + '"/>';
    },

    onReset: function () {
        var vm = this.getViewModel();
        Ext.Msg.confirm('Подтверждение', 'Обновить данные?', function (btn) {
            if (btn === 'yes') {
                vm.getStore('ComboStore').load();
            }
        });
    },

    onSave: function () {
        var vm = this.getViewModel();
        vm.get('RestStore').getData().items[0].set('name', "newName");

        vm.get('RestStore').save();
    },
    onSave2: function () {
        var vm = this.getViewModel();

        var store = vm.get('RestStore');
        var record = Ext.create('ClearApp.app.model.ComboModel', {
            id: 34, name: 'Eugene'
        });
        store.add(record);

        // 'ClearApp.app.model.ComboModel'
        //vm.get('RestStore').getData().add({id: 11, name: "drugoe"});
        //vm.get('RestStore').getData().items[0].set('name', "newName");

        store.save();
    }
});