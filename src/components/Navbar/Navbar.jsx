import s from './Navbar.module.css'
import { MyLinkButton, NameLesson } from './../../mystyle.jsx'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      {/* <NameLesson /> */}
      <MyLinkButton link='/useEffect'>USEEFFECT</MyLinkButton>
      <MyLinkButton link='/useJsonFetch'>USEJSONFETCH</MyLinkButton>
      <MyLinkButton link='/authentication'>AUTHENTICATION</MyLinkButton>
    </div>
  )
}

export default Navbar 
