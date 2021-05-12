Ext.define('ClearApp.app.view.WindowView', {
    extend: 'Ext.window.Window',
    xtype: 'window',

    requires: [

    ],
    //controller: '...',

    title: 'title',
    width: '95%',
    height: '95%',
    modal: true,
    items:[{
        xtype: 'fieldset',
        margin: 5,
        items:[{
            xtype: 'textfield',
            text: 'Результаты поиска'
        }, {
            xtype: 'textfield',
            margin: '0 20 0 0'
        }]
    }]
});