function inventoryUpdate(supplierCode:string){
	const inventorySheet = new Inventorysheet()
	const completeSheet = new Completesheet()

	const codeNumberArray:string[] = completeSheet.codenumberCol.values

	inventorySheet.productcodeCol.set(
		codeNumberArray
	)
	inventorySheet.descriptionCol.set(
		(()=>{
			let itemNumbers = completeSheet.itemnumberCol.values
			let descriptions = completeSheet.descriptionCol.values
			return descriptions.map((description, index) => {
				return `${description} #${itemNumbers[index]}`
			})
		})()
	)
	inventorySheet.quantityCol.set(
		completeSheet.quantityCol.values
	)
	inventorySheet.siteCol.set(
		codeNumberArray.map(()=>"1")
	)
	inventorySheet.supplierCol.set(
		codeNumberArray.map(()=>supplierCode)
	)

}
