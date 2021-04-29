interface IGoogleSheets {
  values: Array<string[]>;
  range: string;
  spreadsheetId: string;
  majorDimension: string;
  valueInputOption: string;
}

export {IGoogleSheets};
