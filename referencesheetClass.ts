class Referencesheet {
	sheetName: string;
	sheet: sheet;

	constructor(){
		this.sheetName = "Reference"
		this.sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)
	}
F
	get header():range{
		return this.sheet.getRange("1:1")
	}

	clear(){
		const headerValues = this.header.getValues()
		this.sheet.clear()
		this.header.setValues(headerValues)
	}
}
