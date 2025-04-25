import React, {useState,useEffect} from 'react'
import "./navbar.css" 
const Navbar = () => {
  const [show, handleShow] = useState(false);

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
    className='nav_logo'
    src='https://loodibee.com/wp-content/uploads/Netflix-logo.png'  alt='netflix_image'/>

    <img 
    className='nav_avatar'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU' alt='avatar_image' />
</div>


   
    </div>
  )
}

export default Navbar 
