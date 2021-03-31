interface IDatasGoogleSheets {
  range: string;
  spreadsheetId: string;
  valueInputOption: string;
  requestBody: {
    majorDimension: string;
    values: Array<string[]>;
  };
}

export {IDatasGoogleSheets};
