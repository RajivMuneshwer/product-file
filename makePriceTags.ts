function makePriceTags(){
	const completesheet = new Completesheet()
	const descriptionList:string[] = completesheet.descriptionCol.values
	const itemNumberList:string[] = completesheet.itemnumberCol.values
	const retailList:number[] = completesheet.retailCol.values.map(value => parseInt(value))
	const wholesaleList:number[] = completesheet.wholesaleCol.values.map(value => parseInt(value))
	const taxIncList:boolean[] = descriptionList.map(() => true)

	const pricetagList:Pricetag[] = []

	for (let i = 0; i < descriptionList.length; i++){
		let priceTag = new Pricetag()
		priceTag.description = descriptionList[i]
		priceTag.itemNumber = itemNumberList[i]
		priceTag.retail = retailList[i]
		priceTag.wholesale = wholesaleList[i]
		priceTag.taxInc = taxIncList[i]

		pricetagList.push(priceTag)
	}

	new Pricetagdoc().addNewPriceTags(pricetagList)
}
