import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import Lists from './Lists/Lists'
import Details from './Details/Details'
import s from './UseEffect.module.css'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { GetData } from './index'

const UseEffect = () => {
  const [id, setId] = useState()
  
  let data = GetData(import.meta.env.VITE_BASE_URL + `users.json`)

  const [info, setInfo] = useState(false)

  const detail = GetData(import.meta.env.VITE_BASE_URL + `${id}.json`)
  //console.log(detail)

   

  const onSendInfo = ({name, id}) => {
    setId(id)
    setInfo({
      ...info, 
      id,
      name
    })

    //setInfo(details)
  }

  //console.log(info)

  

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width: 300
  }));

  return (
    <Routes>
      <Route path='*' element={
        <div className="mainContainer">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <Lists data={ data } onSendInfo={onSendInfo} />
              </Item>
            </Grid>
            <Grid item xs={6}>
              {info && <Item>
                <Details info={ info } detail={detail}/>
              </Item> }
            </Grid> 
          </Grid>
        </div>
      } />
    </Routes>
  )
}


export default UseEffect

