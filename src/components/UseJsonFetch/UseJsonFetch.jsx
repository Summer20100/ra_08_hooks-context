import { useState, useEffect } from 'react'


export function useJsonFetch(url, opts) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
    function getApi(url) {
        fetch(url)
        .then((response) => {
            if (!response.ok || response.status !== 200 || response.json.name !== 'json') {
              setLoading(false)
              setError(true)
            } else {
              setLoading(true)
              setError(false)
            }
            return response.json()
        })
        .then((data) => {
          setData(data)
        })
        .catch((err) => {
          setLoading(false)
          setError(true)
        })
    }
    useEffect(() => {
        getApi(url)
    }, [])

  return [data, loading, error]
}