Ext.define('ClearApp.app.model.TreeModel', {
    extend: 'Ext.data.TreeModel',
    idProperty:'id',
    fields: ['name', 'surname', 'phone']
});