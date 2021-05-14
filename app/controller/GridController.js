Ext.define('ClearApp.app.controller.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-controller',
    requires: [
        'ClearApp.app.model.GridModel',
        'ClearApp.app.viewmodel.GridViewModel',
        'ClearApp.app.model.TreeModel'
    ],
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    stringReplacing: function (value) {
        let str = value.toString();
        const rep1 = str.replace("-", "");
        const rep2 = rep1.replace(")", "");
        const rep3 = rep2.replace(" ", "");
        const rep4 = rep3.replace("(", "");
        return '<p> ' + rep4 + ' </p>';
    },
    stringAdd: function (value) {
        let str = value.toString();
        const rep1 = str.slice(0, 3);
        const rep2 = str.slice(4, str.length);
        return '<p> ' + '(' + rep1 + ')' + rep2 + ' </p>';

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
                vm.getStore('comboStore').load();
            }
        });
    },

    onSave: function () {
        var vm = this.getViewModel(),
            store = vm.get('comboStore');
        store.save();
    },

    onSave2: function () {
        var vm = this.getViewModel(),
            store = vm.get('comboStore'),
            record = Ext.create('ClearApp.app.model.ComboModel');
        record.set('name', 'newName');
        record.set('description', 'newDescription');
        record.set('another', 'newAnother');
        store.add(record);
        store.save();
    },
    gridRowClick: function (_this, record, element, rowIndex, e, eOpts) {
        var window = Ext.create('Ext.Window', {
            frame: true,
            width: 350,
            modal: true,
            title: 'Information',
            items: [{
                xtype: 'fieldset',
                columnWidth: 0.5,
                title: 'Info',
                defaultType: 'textfield',
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'ИД',
                    readOnly: true,
                    value: record.get('id')
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Имя',
                    readOnly: true,
                    value: record.get('name')
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Фамилия',
                    readOnly: true,
                    value: record.get('surname')
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Телефон',
                    readOnly: true,
                    value: record.get('phone')
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Адрес',
                    readOnly: true,
                    value: record.get('address')
                }]
            }, {
                xtype: 'button',
                handler: function (btn) {
                    btn.up().hide();
                },
                text: "Закрыть"
            }]
        });
        window.show();
    },
});

