import s from './JsonFetch.module.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useJsonFetch } from './UseJsonFetch'

const urlData = 'https://08backend.summer20100.repl.co/data'
const urlLoading = 'https://08backend.summer20100.repl.co/loading'
const urlErr = 'https://08backend.summer20100.repl.co/error'
const opts = 0

const JsonFetch = () => {
  const [data, loading, error] = useJsonFetch(urlErr, opts);

  console.log(data, loading, error)

  return (
    <div className='mainContainer'>

    </div>
  )
}

export default JsonFetch 