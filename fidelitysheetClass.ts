class Fidelitysheet{
	sheetName:string;
	sheet:sheet;

	codenumberCol:Column;
	descriptionCol:Column;
	retailCol:Column;
	wholesaleCol:Column;
	costCol:Column;
	groupCol:Column;
	majorgroupCol:Column;
	skuCol:Column;
	taxcodeCol:Column;
	stockableCol:Column;
	siteCol:Column;
	supplierCol:Column;

	constructor(){
		this.sheetName = "Fidelity"
		this.sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)

		let makeCol = columnMaker(this.sheetName, this.sheet)

		this.codenumberCol = makeCol("CodeNumber", 1)
		this.descriptionCol = makeCol("Description", 2)
		this.retailCol = makeCol("Price.1.1", 3)
		this.wholesaleCol = makeCol("Price.2.1" , 4)
		this.costCol = makeCol("CostPerUnit", 5)
		this.groupCol = makeCol("Group.Code", 6)
		this.majorgroupCol = makeCol("MajorGroup.Code", 7)
		this.skuCol = makeCol("SKU.Code", 8)
		this.taxcodeCol = makeCol("Tax.Code", 9)
		this.stockableCol = makeCol("Stockable", 10)
		this.siteCol = makeCol("SiteCode", 11)
		this.supplierCol = makeCol("SupplierCode", 12)
	}

	get columnArray():Column[]{
		return [
			this.codenumberCol,
			this.descriptionCol,
			this.retailCol,
			this.wholesaleCol,
			this.costCol,
			this.groupCol,
			this.majorgroupCol,
			this.skuCol,
			this.taxcodeCol,
			this.stockableCol,
			this.siteCol,
			this.supplierCol,
		]
	}

	clear(){
		this.sheet.clearFormats()
		let columnArray = this.columnArray
		for (let column of columnArray){
			column.clear()
		}
	}
}
