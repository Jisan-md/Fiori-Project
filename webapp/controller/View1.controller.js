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
            },
            onSearch: function(oEvent) {
                // Get the search query entered by the user
                var sQuery = oEvent.getParameter("query").toLowerCase(); // Convert to lowercase for case-insensitive search
            console.log(sQuery)
                // Get the reference to the table
                var oTable = this.byId("idsmartTable");
            
                // Get the binding context of the table
                var oBinding = oTable.getBinding("items");
            
                // Apply the filter to the binding
                if (sQuery) {
                    var oFilter = new sap.ui.model.Filter("CustomerID", sap.ui.model.FilterOperator.Contains, sQuery);
                    oBinding.filter([oFilter]);
                } else {
                    oBinding.filter([]);
                }
            },
        });
    });
