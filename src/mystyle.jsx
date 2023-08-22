import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material';
import { name } from './../package.json'
import { createTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react'


let url = './../README.md'

export function Readme(url) {
  const [md, setMd] = useState('')
  function getMd(url) {
    fetch(url)
      .then(response => {
        return response.text()
      })
      .then(text => {
        setMd(text)
      })
  }
    useEffect(() => {
      getMd(url)
      return
    }, [])
  console.log(md)
}


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export function MyLinkButton({link, children}) {
  return (
    <NavLink to={ link }>
      <Button variant="contained" size='large' sx={{ bgcolor: `primary.dark`, fontSize: 20 }} >
        { children }
      </Button>
    </NavLink>
  )
}

export function NameLesson() {
  return (
    <div className='exersize'>
      LESSON:<br/> { name }
    </div>
  )
}
