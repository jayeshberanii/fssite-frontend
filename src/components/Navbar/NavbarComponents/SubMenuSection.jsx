import React from 'react'

const SubMenuSection = () => {
  return (
    <div className='conatiner mx-auto secondary-bg h-[40px] px-12 text-white text-[14px] font-bold'>
        <nav className='flex items-center h-full'>
            <ul className='flex items-center justify-center gap-12'>
                <li>Groceries</li>
                <li>Electronics</li>
                <li>Premium</li>
                <li>Fashion</li>
                <li>Beauty</li>
            </ul>
        </nav>
    </div>
  )
}

export default SubMenuSection