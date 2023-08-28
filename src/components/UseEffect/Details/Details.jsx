import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
//import s from './UseEffect.module.css'
import data from './../data/8.json'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { GetData } from './../index'

const Details = ({ info, detail }) => {
  let { id, name } = info
  //let {id, name, avatar, details } = detail
  //let {city, company, position} = details

  //console.log(position)
  

  let infoCard = GetData(import.meta.env.VITE_BASE_URL + `${id}.json`)
  console.log('infoCard: ', infoCard)
  let { avatar, details } = infoCard
  //let {city, company, position} = details
  console.log(avatar)

  return (
    <Card sx={{ width: 300, textAlign: 'left' }}>
      <CardMedia
        component="img"
        alt={ infoCard.name }
        height="100%"
        image={ infoCard.avatar }
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          { infoCard.name }
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          City: { infoCard.details.city }
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          Company: { infoCard.details.company }
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          Position: { infoCard.details.position }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Details
