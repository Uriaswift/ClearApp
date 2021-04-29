Ext.define('ClearApp.app.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'UserListPaging',
    scrollable: true,
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'ClearApp.app.model.GridModel',
        'ClearApp.app.store.GridStore',
        'ClearApp.app.view.GridView',
        'ClearApp.app.view.GridStudentsView',
        'ClearApp.app.store.GridStudentsStore',
        'ClearApp.app.model.GridStudentsModel',
        'ClearApp.app.viewmodel.GridViewModel',
        'ClearApp.app.view.FormView',
        'ClearApp.app.view.TextAreaForm'

    ],

    controller: 'grid-controller',
    viewModel: {
        type: 'grid-viewmodel'
    },

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Students'
            },
            flex: 0
        },
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },


    items: [
        {
            title: 'First Grid',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            items: [{
            xtype: 'grid-view',
            scrollable: true,
            bind: {
                store: '{gridStore}'
            }
            }]
         }, {
            title: 'Students Grid',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            items: [{
            xtype: 'gridStudentsView',
            scrollable: true,
            bind: {
                store: '{StudentsPagingStore}'
            },
            }]
        }, {
            title: 'Form',
            iconCls: 'x-fa fa-user',
            items: [{
                //xtype: 'textareafield',
            }]
        }]
});