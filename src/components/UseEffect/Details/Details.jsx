import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
//import s from './UseEffect.module.css'
import data from './../data/8.json'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getData } from './../index'

const Details = ({ info }) => {
  let { id, name } = info

  console.log(info)

  let infoCard = getData(import.meta.env.VITE_BASE_URL + `${id}.json`)

  return (
    <Card sx={{ width: 300, textAlign: 'left' }}>
      <CardMedia
        component="img"
        alt={ data.name }
        height="100%"
        image={ data.avatar }
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          { data.name }
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          City: { data.details.city }
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          Company: { data.details.company }
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          Position: { data.details.position }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Details
