export interface IGoogleSheetsError {
  [Symbol.iterator](): IterableIterator<{
    message: string;
    domain: string;
    reason: string;
  }>;
}

