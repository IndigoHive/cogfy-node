import { AxiosInstance } from 'axios';
import { UploadFileCommand, UploadFileResult } from './types';

export class FilesClient {
  protected axios: AxiosInstance

  constructor (options: { axios: AxiosInstance }) {
    this.axios = options.axios
  }

  /**
   * Upload file.
   * @param collectionId The collection id to upload the file to.
   * @param data The request body.
   * @returns The response body.
   */
  async upload (
    collectionId: string,
    data: UploadFileCommand
  ): Promise<UploadFileResult> {
    const uploadFileData = {
      fieldId: data.fieldId,
      recordId: data.recordId,
      file: {
        name: data.file.name,
        type: data.file.type,
        size: data.file.size
      }
    }

    const uploadFileResponse = await this.axios.post(`/collections/${collectionId}/files`, uploadFileData)

    const { fields, fileId, signedUrl, recordId } = uploadFileResponse.data
    const s3Data = { ...fields, file: data.file }
    const headers = { 'Content-Type': 'multipart/form-data' }

    await this.axios.post(signedUrl, s3Data, { headers })
    await this.axios.patch(`/collections/${collectionId}/files/${fileId}/complete-upload`)

    return {
      id: fileId,
      recordId
    }
  }
}
