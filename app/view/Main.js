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
        'ClearApp.app.store.GridStudentsStore',
        'ClearApp.app.model.GridStudentsModel',
        'ClearApp.app.viewmodel.GridViewModel',
        'ClearApp.app.view.NewGridView'
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
                xtype: 'NewGridView',
                scrollable: true,
                bind: {
                    store: '{newStore}'
                },
            }]
        }, {
            title: 'Form',
            iconCls: 'x-fa fa-user',
            items: [{
                xtype: 'menu',
                width: 100,
                height: 100,
                plain: true,
                floating: false,  // usually you want this set to True (default)
                items: [{
                    text: 'plain item 1'
                }, {
                    text: 'plain item 2'
                }, {
                    text: 'plain item 3'
                }]
            }, {
                xtype: 'toolbar',
                width: 500,
                items: [
                    {
                        // xtype: 'button', // default for Toolbars
                        text: 'Button'
                    },
                    {
                        xtype: 'splitbutton',
                        text: 'Split Button'
                    },
                    // begin using the right-justified button container
                    '->', // same as { xtype: 'tbfill' }
                    {
                        xtype: 'textfield',
                        name: 'field1',
                        emptyText: 'enter search term'
                    },
                    // add a vertical separator bar between toolbar items
                    '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
                    'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
                    {xtype: 'tbspacer'},// same as ' ' to create Ext.toolbar.Spacer
                    'text 2',
                    {xtype: 'tbspacer', width: 50}, // add a 50px space
                    'text 3'
                ]
            }, {
                xtype: 'fieldcontainer',
                fieldLabel: 'Last Three Jobs',
                labelWidth: 100,
                layout: 'hbox',
                items: [{
                    xtype: 'textfield',
                    flex: 1,
                    readOnly: true,
                }, {
                    xtype: 'splitter'
                }, {
                    xtype: 'textfield',
                    flex: 1
                }, {
                    xtype: 'splitter'
                }, {
                    xtype: 'textfield',
                    flex: 1
                }]
            }, {
                xtype: 'fieldset',
                columnWidth: 0.5,
                title: 'Fieldset 1',
                //collapsible: true,
                defaultType: 'textfield',
                defaults: {anchor: '100%'},
                layout: 'anchor',
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Users',
                    labelWidth: 150,
                    editable: false,
                    displayField: 'name',
                    valueField: 'id',
                    bind: {
                        store: '{newStore}',
                        //value: '{fieldId}'
                    }
                }, {
                    fieldLabel: 'Field Id',
                    readOnly: true
                }, {
                    fieldLabel: 'Field Name',
                }, {
                    fieldLabel: 'Field Description',
                }],
            }, {
                buttons: [{
                    text: 'Reset',
                    handler: "onReset"
                }, {
                    text: 'Save',
                    handler: "onSave"
                },
                    {
                        text: 'Save+',
                        handler: "onSave2"
                    }
                ],
            }]
        }]
});