import { AxiosPromise } from 'axios'
import client from './client'
import { getJwt } from '../interface/jwt'

export const fetchJwt = (): AxiosPromise<getJwt> => client.get<getJwt>('/api/jwt')
