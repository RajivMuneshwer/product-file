function inventoryUpdateUI(){
	const functionCall:functionCall = "inventoryUpdate"
	const subtitle:string = "Inventory Update"
	askSellerUI(functionCall, subtitle)
}

function fidelityUpdateUI():void{
	const functionCall:functionCall = "fidelityUpdate"
	const subtitle:string = "Fidelity Update"
	askSellerUI(functionCall, subtitle)
}

function askSellerUI(functionCall:functionCall, subtitle:string):void {
	const service = HtmlService.createTemplateFromFile("askSellerHTML")
	service.functionCall = functionCall
	const html = service.evaluate().setWidth(450).setHeight(450)
	SpreadsheetApp.getUi().showModalDialog(html, `Ask Seller (${subtitle})`)
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
