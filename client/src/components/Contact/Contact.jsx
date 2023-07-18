import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './Contact.scss'

export const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>
                BE IN TOUCH WITH US
            </span>
            <div className="mail">
                <input type="text" placeholder='Enter your email...'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <div className="icon">
                    <TwitterIcon />
                </div>
                <div className="icon">
                    <InstagramIcon />
                </div>
                <div className="icon">
                    <PinterestIcon/>
                </div>
                <div className="icon">
                    <FacebookIcon />
                </div>
                <div className="icon">
                    <YouTubeIcon />
                </div>
            </div>
        </div>
    </div>
  )
}
