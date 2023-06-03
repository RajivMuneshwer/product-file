function edit(){
	const currentSheet = SpreadsheetApp.getActiveSheet()
	const sheetName = <clearableSheet> currentSheet.getName()
	const clearableSheetsSet = new Set<clearableSheet>()
	clearableSheetsSet.add("Fidelity")
	clearableSheetsSet.add("Inventory")
	clearableSheetsSet.add("Reference")

	if (!clearableSheetsSet.has(sheetName)) return
	askClearUI(sheetName)
}
