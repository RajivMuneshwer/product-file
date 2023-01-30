function findBarcode(){
	const completeSheet:Completesheet = new Completesheet()
	const barcodeSheet:Barcodesheet = new Barcodesheet()
	const barcodeSet:Barcodeset = new Barcodeset(barcodeSheet.barcodeCol.values)

	completeSheet.sort() //gets rid of blank spaces

	const codeNumbers:string[] = completeSheet.codenumberCol.values

	const boolMap:boolean[] = codeNumbers.map(number => {
		if (barcodeSet.has(number)) return true
		barcodeSet.add(number)
		return false
	})

	barcodeSheet.barcodeCol.set(barcodeSet.getArray())

	completeSheet.uniqueCol.set(boolMap.map(bool =>{
		if (bool) return 'x'
		return 'o'
	}))

	const colorArray = boolMap.map(bool => {
		if (bool) return ["red"]
		return ["blue"]
	})

	for (let column of completeSheet.columnArray){
		let range = column.range
		try{
			range.setFontColors(colorArray)
		}
		catch{
			Logger.log('unbalanced column')
		}
	}

	completeSheet.sortByColumn(completeSheet.uniqueCol)
	completeSheet.header.setFontColor("black") //prevents the top row from being discolored
}

