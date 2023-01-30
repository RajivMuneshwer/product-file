function isBlank(cell:range){
	const value:string = String(cell.getValue())
	if (value.trim().length === 0) return true
	return false
}
const columnMaker = (sheetName:string, sheet:sheet) => {
	return (name:string, number:number) => new Column(`${sheetName}-${name}`, number, sheet)
}
const clearableSheetMaker = (clearableSheetName:clearableSheet) => {
	switch(clearableSheetName){
		case "Fidelity":
			return new Fidelitysheet()
		case "Complete":
			return new Completesheet()
		case "Reference":
			return new Referencesheet()
		case "Inventory":
			return new Inventorysheet()
	}

}
