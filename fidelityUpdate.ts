function fidelityUpdate(supplierCode:string){
	const fidelitySheet = new Fidelitysheet()
	const completeSheet = new Completesheet()

	fidelitySheet.codenumberCol.set(
		completeSheet.codenumberCol.values
	)
	fidelitySheet.descriptionCol.set(
		(():string[]=>{
		let itemNumbers = completeSheet.itemnumberCol.values
		let descriptions = completeSheet.descriptionCol.values
		return descriptions.map((description, index) =>{
			return `${description} #${itemNumbers[index]}`
		})
		}
		)()
	)
	fidelitySheet.retailCol.set(
		completeSheet.retailCol.values
	)
	fidelitySheet.wholesaleCol.set(
		completeSheet.wholesaleCol.values
	)
	fidelitySheet.costCol.set(
		completeSheet.costCol.values
	)
	
	const onesArray = completeSheet.codenumberCol.values.map(()=>"1")
	
	fidelitySheet.groupCol.set(
		onesArray
	)
	fidelitySheet.majorgroupCol.set(
		onesArray
	)
	fidelitySheet.skuCol.set(
		onesArray
	)
	fidelitySheet.taxcodeCol.set(
		onesArray
	)
	fidelitySheet.stockableCol.set(
		onesArray
		.map(()=>"TRUE")
	)
	fidelitySheet.siteCol.set(
		onesArray
	)
	fidelitySheet.supplierCol.set(
		onesArray
		.map(()=>supplierCode)
	)
}

