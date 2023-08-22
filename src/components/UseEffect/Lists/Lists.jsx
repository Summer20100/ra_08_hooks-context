import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
//import s from './UseEffect.module.css'
import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Lists = ({data, onSendInfo}) => {
  
  let setLists = data.map(el => {
    return (
      <>
        <ListItem disablePadding key={el.id}>
          <ListItemButton onClick={() => onSendInfo(el)}>
            <ListItemText primary={ el.name } />
          </ListItemButton>
        </ListItem>
        <Divider />
      </>

    )
  })

  return (
    <Box sx={{ width: 300, bgcolor: 'background.paper', borderRadius: 10}}>
      <nav aria-label="main mailbox folders">
        <List sx={{padding: 0}}>
          { setLists }
        </List>
      </nav>
    </Box>
  )
}

export default Lists
