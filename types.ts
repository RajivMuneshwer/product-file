type sheet = GoogleAppsScript.Spreadsheet.Sheet
type range = GoogleAppsScript.Spreadsheet.Range
type spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet
type properties = GoogleAppsScript.Properties.Properties
type functionCall = "fidelityUpdate" | "inventoryUpdate"
type clearableSheet = "Fidelity" | "Reference" | "Inventory" | "Complete"
interface clearFormObject {
	clearableSheet:clearableSheet | "All" | null;
}
interface sellerObject {
	sellerID:string;
	functionCall:functionCall;
}
interface eventObject {
	oldValue:string|null;
	value:string;
	source:spreadsheet;
	range:range;
}
