import express from 'express'

const getToken = (req: express.Request, res: express.Response) => {
  res.json({ csrfToken: req.csrfToken() })
}

export default { getToken }
