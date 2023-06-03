function inventoryUpdateUI(){
	const functionCall:functionCall = "inventoryUpdate"
	askSellerUI(functionCall)
}

function fidelityUpdateUI():void{
	const functionCall:functionCall = "fidelityUpdate"
	askSellerUI(functionCall)
}

function askSellerUI(functionCall:functionCall):void {
	const service = HtmlService.createTemplateFromFile("askSellerHTML")
	service.functionCall = functionCall
	const html = service.evaluate().setWidth(450).setHeight(450)
	SpreadsheetApp.getUi().showModalDialog(html, "Ask Seller")
}

function getSellerID(formObject:sellerObject){
	const { sellerID, functionCall } = formObject
	const functions = {
		"fidelityUpdate":fidelityUpdate,
		"inventoryUpdate":inventoryUpdate
	}
	const func:Function = functions[functionCall]
	func(sellerID)
}
