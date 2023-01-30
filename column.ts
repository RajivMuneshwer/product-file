class Column{
	name:string;
	number:number;
	sheet:sheet;
	startrow:number;

	constructor(name:string, number:number, sheet:sheet){
		this.name = name
		this.number = number
		this.sheet = sheet
		this.startrow = 2
	}
	getCell(row:number):range{
		return this.sheet.getRange(row, this.number)
	}
	get lastRow():number{
		const storage = new Storage()
		let currentRow:number = storage.get(this.name) ?? this.startrow
		let currentCell:range = this.getCell(currentRow)

		if(isBlank(currentCell)){
			
			let bottom = this.startrow
			let top = currentRow
			let middle = Math.round((bottom + top) / 2)


			while(top-bottom > 1){

				currentCell = this.getCell(middle)
				
				if(isBlank(currentCell)){
					top = middle
				}
				else{
					bottom = middle
				}
				middle = Math.round((bottom + top) / 2)
			}
			storage.set(this.name, bottom)
			return bottom
		}

		else{
			while(!isBlank(currentCell)){
				currentRow += 1
				currentCell = this.getCell(currentRow)
			}

			currentRow -= 1
			storage.set(this.name, currentRow)
			return currentRow
		}
	}
	get length():number{
		return this.lastRow - this.startrow + 1
	}
	get range():range{
		let length = this.length
		return this.sheet.getRange(this.startrow, this.number, (length > 0) ? length : 1) 
	}
	get values():any[]{
		return this.range.getValues().flat()
	}
	clear():void{
		this.range.clear()
		new Storage().set(this.name, this.startrow)
	}
	private clearNoStore():void{
		this.range.clear()
	}
	set(values:any[]):void{
		this.clearNoStore()
		this.sheet.getRange(this.startrow, this.number, values.length)
			.setValues(values.map(value => [value]))
		new Storage().set(this.name, values.length + this.startrow)
	}


}
