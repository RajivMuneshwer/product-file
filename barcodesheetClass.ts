class Barcodesheet {
	sheetName:string;
	sheet:sheet;
	barcodeCol:Column;


	constructor(){
		this.sheetName = "Barcodes"
		this.sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)

		let makeCol = columnMaker(this.sheetName, this.sheet)

		this.barcodeCol = makeCol("Barcodes", 1)
	}

}
