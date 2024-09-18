import React from 'react'

const Footer = ({user, type = 'desktop'}: FooterProps) => {
  return (
    <footer className='footer'>
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>{user?.name[0] || `S`}</p>
        </div>
        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className='text-14 truncate font-normal text-gray-600'>{user?.name || `John Doe`}</h1>
            <p className='text-14 truncate font-normal text-gray-600'>{user?.email || `guest@gmail.com`}</p>
        </div>
    </footer>
  )
}

export default Footer