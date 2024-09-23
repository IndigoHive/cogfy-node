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

    const { fields, id, signedUrl, recordId } = uploadFileResponse.data
    const headers = { 'Content-Type': 'multipart/form-data' }
    const formData = new FormData()

    Object.entries(fields).forEach(([field, value]) => formData.append(field, value as string))
    formData.append('file', data.file)

    await this.axios.post(signedUrl, formData, { headers })
    await this.axios.patch(`/collections/${collectionId}/files/${id}/complete-upload`)

    return {
      id,
      recordId
    }
  }
}
