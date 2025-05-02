import React, { useState } from 'react'
import styles from './profileScreen.css'
import Navbar from '../../Navbar/navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/features/userSlices'
import { auth} from '../../firebase'

const SubscriptionPlans = [
  {
    id:1,
    name:'Netflix Mobile',
    description:'Mobile only, 480p SD Streaming',
    pricing:'$ 19.99',
  },
  {
    id:1,
    name:'Netflix SD',
    description:'Two Screens, 480p SD Streaming',
    pricing:'$ 29.99',
  },
  {
    id:1,
    name:'Netflix HD',
    description:'Maximum Five Screens, 1080p HD Streaming',
    pricing:'$ 49.99',
  },
  {
    id:1,
    name:'Netflix Premium',
    description:'Unlimited Screens, 4K UHD Streaming',
    pricing:'$ 99.99',
  },
]

const Profilescreen = () => {
  const user = useSelector(selectUser)
  return (
    <div className='profilescreen'>
    <Navbar />
    <div className='profilescreen_body'>
<div className='profilescreen_info'>
 <div className='profilescreen_avatarinfo'>
 <div className='profilescreen_avatar' >
 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU' alt='avatar_image' />
 </div>
 <h5 className='profilescreen_name'>Hi Jojo!</h5>
 </div>

 <div class="profilescreen_details">
 {/* <h2>{user.email}</h2> */}
 <div className='profilescreen_plans'>
<button 
onClick={() => auth.signOut()}
className='profilescreen_signout'>Sign Out</button>
 </div>
</div>
</div>

    </div>

   <div className='profilescreens' >
   <div className='profilescreen_subcribe'>
     <h2 className='profilescreen_header'>Manage Your Subscription</h2>
    </div>
    <div className='profilescreen_cards_container'>
     {
       SubscriptionPlans.map((plan => (
         <div key={plan.id} 
         className='profilescreen_cards'>
         <h2  className=''>{plan.name}</h2>
         <h5>{plan. description}</h5>
         <p className='profilescreen_price'>{plan.pricing}</p>
         <button className='profilescreen_button'>Activate Now</button>
       </div>
       )))
     }
   
    
    </div>

    <div className='button_container'>
    <button className='profilescreen_button'>
     Cancel Subscription
     </button>
     </div>
   </div>
   </div>
  )
}

export default Profilescreen
