export enum FileState {
  New = "New",
  Uploading = "Uploading",
  Error = "Error",
  Success = "Success",
}
export interface FileData {
  fileObj: File;
  state: FileState;
  new_name: string | null;
  message: string | undefined;
}

export interface FileHandlerPayload {
  id: number;
  newFileName: string;
}
