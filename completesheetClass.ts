class Completesheet {
	sheetName:string;
	sheet:sheet;
	codenumberCol:Column;
	itemnumberCol:Column;
	descriptionCol:Column;
	retailCol:Column;
	wholesaleCol:Column;
	costCol:Column;
	quantityCol:Column;
	uniqueCol:Column;
	
	leaderCol:Column;

	constructor(){
		this.sheetName = "Complete"
		this.sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(this.sheetName)

		let makeCol = columnMaker(this.sheetName, this.sheet)
		this.codenumberCol = makeCol("CodeNumber", 1)
		this.itemnumberCol = makeCol("ItemNumber", 2)
		this.descriptionCol = makeCol("Description", 3)
		this.retailCol = makeCol("Price.1.1", 4)
		this.wholesaleCol = makeCol("Price.2.1", 5)
		this.costCol = makeCol("CostPerUnit", 6)
		this.quantityCol = makeCol("Quantity", 7)
		this.uniqueCol = makeCol("Unique", 8)

		this.leaderCol = this.codenumberCol
	}

	get columnArray():Column[]{
		
		return [
			this.codenumberCol,
			this.itemnumberCol,
			this.descriptionCol,
			this.retailCol,
			this.wholesaleCol,
			this.costCol,
			this.quantityCol,
			this.uniqueCol,
		]
 
	}

	get header():range{
		return this.sheet.getRange('1:1')
	}

	sort(){
		this.sortByColumn(this.leaderCol)
	}

	sortByColumn(column:Column){
		const firstRowValues:any[][] = this.header.getValues()
		this.sheet.deleteRow(1)
		this.sheet.sort(column.number)
		this.sheet.insertRows(1)
		this.header.setValues(firstRowValues)
	}

	clear(){
		this.sheet.clearFormats()
		const columnArray = this.columnArray
		for (let column of columnArray){
			column.clear()
		}
	}
}
