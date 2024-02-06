import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='cr-section'>
            <h3>SOFT</h3>
            <p>Copyright © 2021 Soft by Creative Tim.</p>
        </div>

        <div className='rh-footer'>
            <div className='footer-col'>
            <h4>Company</h4>
                <ul>
                    <li><a href='/index.html'>About Us</a></li>
                    <li><a href='/index.html'>Careers</a></li>
                    <li><a href='/index.html'>Press</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Pages</h4>
                <ul>
                    <li><a href='/index.html'>Login</a></li>
                    <li><a href='/index.html'>Register</a></li>
                    <li><a href='/index.html'>About</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Products</h4>
                <ul>
                    <li><a href='/index.html'>Free</a></li>
                    <li><a href='/index.html'>PRO</a></li>
                    <li><a href='/index.html'>Latest</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer