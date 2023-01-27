export enum FileState {
  New,
  Uploading,
  Error,
}
export interface FileData {
  fileObj: File;
  state: FileState;
  new_name: string | null;
  message: string | undefined;
}
