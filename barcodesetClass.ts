class Barcodeset {
	set: Set<string>;

	constructor(barcodeArray:string[]){
		this.set = new Set<string>(barcodeArray)
	}

	add(value:string){
		this.set.add(value)
	}

	has(value:string):boolean{
		return this.set.has(value)
	}

	getArray():string[]{
		return Array.from<string>(this.set)
	}
}
