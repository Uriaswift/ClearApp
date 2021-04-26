Ext.define('ClearApp.app.model.GridModel', {
    extend: 'Ext.data.Model',
    idProperty:'id',
    fields: ['id', 'name', 'email', 'phone', 'avatar']
});