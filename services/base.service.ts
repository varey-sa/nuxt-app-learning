import { BaseProxy, Validator } from 'vue-api-queries'
import type { AxiosError, AxiosResponse, Method } from 'axios'
import { objectToFormData } from 'vue-api-queries/dist/util/formData'

const validator = Validator
class BaseService extends BaseProxy {
  get(option?: string | any) {
    if (!option) {
      return this.submit('get', `/${this.endpoint}`)
    }

    return this.submit('get', `/${this.endpoint}`)
  }

  submit(this: any, requestType: Method, url: string, form?: any): Promise<any> {
    this.__validateRequestType(requestType)
    this.beforeSubmit()
    return new Promise((resolve, reject) => {
      const data = this.__hasFiles(form) ? objectToFormData(form) : form
      // @ts-ignore
      this.$http[requestType](this.__getParameterString(url), data)
        .then((response: AxiosResponse) => {
          this.onSuccess()
          const { data } = response
          resolve(data)
        })
        .catch((error: AxiosError) => {
          this.errors.processing = false
          validator.processing = false
          const { response } = error
          if (response) {
            const { data, status } = response
            if (status === 422) {
              const errors = {}
              Object.assign(errors, data.message)
              this.onFail(errors)
              validator.fill(errors)
            }
            reject(error)
          } else {
            reject(error)
          }
        })
    })
  }
}

export default BaseService
