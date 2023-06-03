function askClearUI(clearableSheet:clearableSheet):void{
	const service = HtmlService.createTemplateFromFile('askClearHTML')
	service.currentSheet = `${clearableSheet}`
	const html = service.evaluate().setWidth(450).setHeight(450)
	SpreadsheetApp.getUi().showModalDialog(html, 'Ask Clear')
}

function clearForm(clearFormObject:clearFormObject):void{
	const { clearableSheet } = clearFormObject
	if (!clearableSheet) return
	if (clearableSheet == "All") return clearAll()
	const clearableSheets = <clearableSheet[]>clearableSheet.split(",")
	clearableSheets.forEach(cSheet => {
		clearCurrent(cSheet)
	})
}
