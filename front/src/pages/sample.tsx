import { useState, useEffect } from 'react'
import { fetchSamples } from '../api/sample'
import { Sample } from '../interface/sample'

function Samples() {
  const [sampleList, setSampleList] = useState<Sample[]>([])

  const fetchSamplesReq = () =>
    fetchSamples()
      .then((samples) => samples.data)
      .catch((error) => {
        console.log(error)
      })

  useEffect(() => {
    fetchSamplesReq()
      .then((samplesTodo) => {
        if (samplesTodo) {
          setSampleList(samplesTodo)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>Sample List</h1>
      <ul>
        {sampleList && sampleList.map((sample) => <li key={sample.id}>{`${sample.id}: ${sample.title}`}</li>)}
      </ul>
    </>
  )
}

export default Samples
