interface IDatasGoogleSheets {
  values: Array<string[]>;
  range: string;
  spreadsheetId: string;
  majorDimension: string;
  valueInputOption: string;
}

export {IDatasGoogleSheets};
