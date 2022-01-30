import { AxiosPromise } from 'axios'
import client from './client'

export const fetchJwt = (): AxiosPromise<string> => client.get<string>('/jwt')
