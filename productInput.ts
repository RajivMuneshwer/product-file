function selectValue(){
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const userSpreedsheet  = spreadSheet.getSheetByName('Input');
  const invoiceSpreadsheet = SpreadsheetApp.openById('1UFntP36h-MxPoWrXJKSxsiviFvPXifb-skDLCpC2RSU')
  const referenceSpreedsheet = invoiceSpreadsheet.getSheetByName("Reference");
  const completedSpreadsheet =invoiceSpreadsheet.getSheetByName("Complete");
  const referenceRows = referenceSpreedsheet.getDataRange().getValues();

  const activeCell = userSpreedsheet.getActiveCell();
  const currentRow = activeCell.getRow();
  const itemNum = userSpreedsheet.getRange(currentRow, 2).getValue();
  const barcodeNum = userSpreedsheet.getRange(currentRow, 1).getValue();

  if (itemNum != '' && barcodeNum != ''){
    const found_row = getValueRowIndex(itemNum, referenceRows, userSpreedsheet, currentRow);
    const found_range = referenceRows[found_row-1];
    goToCompletedSheet(referenceSpreedsheet,completedSpreadsheet, found_range,found_row, barcodeNum)
  }

}


function getValueRowIndex(value, range, user_spreedsheet, row){
  for (let i= 0; i < range.length; i++){
    if (range[i][0] == value){
      user_spreedsheet.getRange(row, 3).setValue('✓');
      return i + 1;
    }
  }
}

 function goToCompletedSheet(reference_spreadsheet, completed_spreadsheet, row, position, barcode){
   completed_spreadsheet.getRange(position,1).setValue(barcode);
   for (let i = 0; i < row.length; i++){
      completed_spreadsheet.getRange(position,i+2).setValue(row[i]);
   }
   for (let i =0; i < row.length; i++){
     reference_spreadsheet.getRange(position,i+1).setValue('***');
 }
}
