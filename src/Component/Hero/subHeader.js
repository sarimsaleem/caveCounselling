import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'

function SubHeader() {
  return (
    <div className='sub-header-main'>   
          <div className="container nav-upper-text res-none">
    <p className='nav-header-text'>
      Integrative Counsellor for Children, Young people and Adults. Online, by phone and in-person in Walthamstow, East London
    </p>
    <div className='nav-icon-parent'>
      <a href="tel:+447777966289">
        <FaPhone className='nav-icons-header-phone' />
      </a>|
      <a href="mailto:cavecounselling@outlook.com">
        <IoIosMail className='nav-icons-header-mail' />
      </a>
    </div>
  </div>
  </div>
  )
}

export default SubHeader