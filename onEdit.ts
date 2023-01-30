function edit(){
	const currentSheet = SpreadsheetApp.getActiveSheet()
	if (!currentSheet.getCurrentCell().isBlank()) return
	const sheetName = <clearableSheet> currentSheet.getName()

	const clearableSheets:clearableSheet[] = ["Fidelity", "Complete", "Inventory", "Reference"]

	if (! clearableSheets.includes(sheetName) ) return
	askClearUI(sheetName)

}
