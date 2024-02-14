sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("smartbar.controller.details", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("details").attachPatternMatched(this._onRouteMatch,this);

            },

        _onRouteMatch: function(oEvent){
            var CustomerID=  oEvent.getParameter('arguments').CustomerID;
            console.log("Customer ID is",CustomerID);
            
        }


        });
    });
