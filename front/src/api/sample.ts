import { AxiosPromise } from 'axios'
import client from './client'
import { Sample } from '../interface/sample'

export const fetchSamples = (): AxiosPromise<Sample[]> => client.get<Sample[]>('/')
