Ext.define('ClearApp.app.view.NewGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'widget.NewGridView',
    title: 'Users',

    requires: [
        'ClearApp.app.store.GridStudentsStore',
        'ClearApp.app.controller.GridController'
    ],
    selType: 'rowmodel',
    selModel:
        {
            mode: 'SINGLE'
        },
    viewConfig:
        {
            stripeRows: true
        },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{newStore}'
    },

    columns: [{
        text: "ИД",
        dataIndex: 'id',
        width: 35,
        flex: 1,
    },
        {
            text: "Имя",
            flex: 1,
            dataIndex: 'name'
        },
        {
            text: "Фамилия",
            flex: 1,
            dataIndex: 'surname'
        },
        {
            text: "Телефон",
            flex: 1,
            dataIndex: 'phone'
        },
        {
            text: "Адрес",
            flex: 1,
            dataIndex: 'address'
        },
        {
            text: "Аватар",
            flex: 1,
            dataIndex: 'avatar',
            renderer: 'rendererImage',
        }],
    bbar: [{
        xtype: 'pagingtoolbar',
        bind:{
            store: '{newStore}'
        },
        displayInfo: true,
        displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
        emptyMsg: "No records to display&nbsp;"
    }]

});
