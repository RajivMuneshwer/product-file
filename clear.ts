function clearCurrent(clearableSheet?:clearableSheet){
	if (clearableSheet){
		clearableSheetMaker(clearableSheet).clear()
	}
}
function clearAll(){
	new Referencesheet().clear()
	new Completesheet().clear()
	new Fidelitysheet().clear()
}
