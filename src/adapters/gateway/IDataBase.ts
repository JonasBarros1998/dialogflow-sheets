export interface IDataBase {
  save(): Promise<object>
  list(): Promise<object>
}
