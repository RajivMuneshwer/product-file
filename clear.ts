function clearCurrent(clearableSheet?:clearableSheet){
	if (clearableSheet){
		clearableSheetMaker(clearableSheet).clear()
	}
}
function clearAll(){
	new Referencesheet().clear()
	new Completesheet().clear()
	new Fidelitysheet().clear()
	new Inventorysheet().clear()
}
function clearExcept(clearableSheet?:clearableSheet){
	if (clearableSheet){
		const clearableSheetSet = new Set<clearableSheet>()
		clearableSheetSet.add("Fidelity")
		clearableSheetSet.add("Complete")
		clearableSheetSet.add("Reference")
		clearableSheetSet.add("Inventory")

		clearableSheetSet.delete(clearableSheet)

		clearableSheetSet.forEach(sheet => {
			clearableSheetMaker(sheet).clear()
		})
	}
}
