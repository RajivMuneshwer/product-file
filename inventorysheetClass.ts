class Inventorysheet {
	sheetName:string;
	sheet:sheet;

	productcodeCol:Column;
	descriptionCol:Column;
	quantityCol:Column;
	siteCol:Column;
	supplierCol:Column;

	constructor(){
		this.sheetName = "Inventory"
		this.sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)

		let makeCol = columnMaker(this.sheetName, this.sheet)

		this.productcodeCol = makeCol("ProductCode", 1)
		this.descriptionCol = makeCol("Description", 2)
		this.quantityCol = makeCol("Quantity", 3)
		this.siteCol = makeCol("SiteCode", 4)
		this.supplierCol = makeCol("SupplierCode", 5)

	}

	get columnArray():Column[]{
		return [
			this.productcodeCol,
			this.descriptionCol,
			this.quantityCol,
			this.siteCol,
			this.supplierCol,
		]
	}


	clear(){
		this.sheet.clearFormats()
		const columnArray = this.columnArray
		for (let column of columnArray){
			column.clear()
		}
	}
}
