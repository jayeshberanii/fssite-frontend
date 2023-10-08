import React from 'react'
import Images from '../../shared/Image'
import logo from '../../../../public/amazon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarMain = () => {
  return (
    <div className='w-full h-[72px] primary-bg px-2 py-3 flex items-center text-white text-[14px] font-bold'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex gap-32 items-center'>
          <div>
            <Images src={logo} height={50} width={100} />
          </div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <p className='text-white text-[14px] font-bold'>Deliver to Mumbai 400020</p>
          </div>
        </div>
        <div className='flex items-center gap-12'>
          <div>
            <input type='text' className='px-10 py-2 rounded-3xl text-black' placeholder='Search Mart' />
          </div>
          <div>
            cart
          </div>
          <div>
            Sign In
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarMain