class Pricetagdoc {
	document:document
	constructor(){
		this.document = getPriceTagDocument()
	}
	get body(){
		return this.document.getBody()
	}
	addNewPriceTags(pricetagList:Pricetag[]){
		this.body.clear()
		this.addPriceTags(pricetagList)
	}
	addPriceTags(pricetagList:Pricetag[]){
		for (let pricetag of pricetagList){
			this.addPriceTag(pricetag)
			this.addDivider()
		}
		this.cleanDoc()
	}
	addPriceTag(pricetag:Pricetag){
		this.addDescription(pricetag.description)
		this.addItemNumber(pricetag.itemNumber)
		this.addRetail(pricetag.retail)
		this.addWholesale(pricetag.wholesale)
		this.addTaxInc(pricetag.taxInc)
	}
	addDescription(description:string){
		this.body.appendParagraph(description.toUpperCase())
		.editAsText()
		.setFontSize(14)
		.setBold(false)
		.setFontFamily("Arial")
	}
	addItemNumber(itemNumber:string){
		itemNumber = `#${itemNumber}`.toUpperCase()
		this.body.appendParagraph(
			itemNumber
		).editAsText()
		.setFontSize(14)
		.setBold(false)
		.setFontFamily("Arial")
	}
	addRetail(retail:number){
		const retailStr = retail.toLocaleString("en-US")
		const retailText = `RTL $${retailStr}`
		this.body.appendParagraph(
			retailText
		).editAsText()
		.setBold(true)
		.setFontSize(0,5,14)
		.setFontSize(4,retailText.length-1,46)
		.setFontFamily("Arial")
	}
	addWholesale(wholesale:number){
		const wholesaleStr = wholesale.toLocaleString("en-US")
		const wholesaleText = `W/S $${wholesaleStr} FOR 3 & UP`
		this.body.appendParagraph(
			wholesaleText
		).editAsText()
		.setBold(true)
		.setFontFamily("Arial")
		.setFontSize(0,5, 14)
		.setFontSize(4, 5 + wholesaleStr.length + 1, 46)
		.setFontSize(5 + wholesaleStr.length + 1, wholesaleText.length-1, 14)
	}
	addTaxInc(taxInc:boolean){
		let taxIncText = ""
		if (taxInc) {
			taxIncText = "VAT INC"
		}
		this.body.appendParagraph(taxIncText).editAsText()
		.setBold(false)
		.setFontSize(14)
		.setFontFamily("Arial")
	}
	addDivider(){
		let dividerText = "- - - - - - - - - - - - - - - - - - - - - - - - -"
		this.body.appendParagraph(dividerText).editAsText()
		.setFontFamily("Arial")
		.setFontSize(30)
		
	}
	cleanDoc(){
		const firstChild = this.body.getChild(0)
		if (firstChild.asText().getText().length < 2){
			this.body.removeChild(firstChild)
		}
	}
}
