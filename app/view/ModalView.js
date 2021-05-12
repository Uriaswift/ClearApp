Ext.define('ClearApp.app.view.ModalView', {
    extend: 'Ext.window.Window',
    requires: [
        'ClearApp.app.controller.GridController'
    ],
    controller: 'ClearApp.app.controller.GridController',
    viewModel: 'ClearApp.app.viewmodel.GridViewModel',
    alias: 'widget.window',

    stateful: true,
    width: 600,
    resizable: true,
    constrain: false,
    modal: true,
    autoShow: false,
    ghost: false,

    items: [
        {
            xtype: 'textfield',
            items: [
            ]
        }
    ]
})