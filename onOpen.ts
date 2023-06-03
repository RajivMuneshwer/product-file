function onOpen(){
	SpreadsheetApp.getUi()
	.createMenu("Processes")
	.addItem("Clear","edit")
	.addSeparator()
	.addItem("Barcode Check", "findBarcode")
	.addSeparator()
	.addItem("Fidelity Update", "fidelityUpdateUI")
	.addItem("Inventory Update", "inventoryUpdateUI")
	.addSeparator()
	.addItem("Make PriceTags", "makePriceTags")
	.addSeparator()
	.addToUi()
}
