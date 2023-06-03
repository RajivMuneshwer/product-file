function isBlank(cell:range){
	const value:string = String(cell.getValue())
	if (value.trim().length === 0) return true
	return false
}
const columnMaker = (sheetName:string, sheet:sheet) => {
	return (name:string, number:number) => new Column(`${sheetName}-${name}`, number, sheet)
}
const clearableSheetMaker = (clearableSheetName:clearableSheet) => {
	const clearableSheets = {
		"Fidelity":()=>{return new Fidelitysheet()},
		"Complete":()=>{return new Completesheet()},
		"Reference":()=>{return new Referencesheet()},
		"Inventory":()=>{return new Inventorysheet()}
	}
	return clearableSheets[clearableSheetName]()
}

const getPriceTagDocument = ():document => {
	return DocumentApp.openById("10mn3qNnYo090CSC5nSNg_a0CwPCej-BCNIH_zTmPSnc")
}
