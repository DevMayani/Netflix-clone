import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./navbar.css" 
const Navbar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',transitionNavbar);
    return () => window.removeEventListener('scroll',transitionNavbar)
  }, [])


  return (
    <div className={`nav ${show && 'nav_black'}`}>
<div className='nav_contents'>
<img 
onClick={() => navigate('/')}
    className='nav_logo'
    src='https://loodibee.com/wp-content/uploads/Netflix-logo.png'  alt='netflix_image'/>

   <Link to='/profile'>
   <img 
    onClick={() => navigate('profile')}
    className='nav_avatar'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU' alt='avatar_image' />
   </Link>
</div>


   
    </div>
  )
}

export default Navbar 
