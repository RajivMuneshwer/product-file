class Storage {
	private properties:properties

	constructor(){
		this.properties = PropertiesService.getDocumentProperties()
	}
	get(key:string){
		return JSON.parse(this.properties.getProperty(key))
	}
	set(key:string, value:any){
		this.properties.setProperty(key, JSON.stringify(value))
	}
}
