sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("smartbar.controller.View1", {
            onInit: function () {

            },
            

            handleSelectionChange: function(oEvent){
                console.log("item press ");
                var oContext=oEvent.getParameter('listItem').getBindingContext().getObject();
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("details",{
                    CustomerID: oContext.CustomerID
                });
            }
        });
    });
