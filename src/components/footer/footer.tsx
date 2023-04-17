import React from 'react'
import FlexBetween from '../flexBetween/flexBetween'
import location from '../../assets/icon_address.webp'
import email from '../../assets/icon_email.webp'
import phone from '../../assets/icon_contact.webp'

export const Footer = () => {
    const handleLocationClick = () => {
        console.log("Location icon has been clicked.")
    }

    const handleEmailClick = () => {
        console.log("Email icon has been clicked.")
    }

    const handlePhoneClick = () => {
        console.log("Phone icon has been clicked.")
    }

    return (
        <FlexBetween className='footer footer-icons'>
            <img src={location} alt='location' className='footer-icon' onClick={handleLocationClick} />
            <img src={email} alt='email' className='footer-icon' onClick={handleEmailClick} />
            <img src={phone} alt='phone' className='footer-icon' onClick={handlePhoneClick} />
        </FlexBetween>
    )
}
