import express from 'express'
import sampleJson from '../data/sample.json'

const index = (req: express.Request, res: express.Response) => {
  res.json(sampleJson)
}

export default { index }
