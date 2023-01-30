function clearCurrent(clearableSheet?:clearableSheet){
	let newClearableSheet = clearableSheet ?? <clearableSheet> SpreadsheetApp.getActiveSheet().getName()
	clearableSheetMaker(newClearableSheet).clear()
}
function clearAll(){
	new Referencesheet().clear()
	new Completesheet().clear()
	new Fidelitysheet().clear()
}
