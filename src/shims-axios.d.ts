import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig<T> {
    showLoading?: boolean
  }
}
