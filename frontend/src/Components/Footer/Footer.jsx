import React from 'react'
import { Nav, Navbar, } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Navbar className='bg-gray-800 px-4 md:px-16 lg:px-28 py-6 mt-10'>
        <Nav>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h2 className='text-lg font-bold mb-4 text-white'>About Us</h2>
                <p className='text-white text-sm font-medium'>We are a team dedicated to provideing the best products and services to our customers and made it our aim to make this dream a reality. Assume you wish to buy land to build a house for you and your family. We provide you with a selection of the most excellent land alternatives in the country, as well as a variety of support services, such as legal and financial assistance, to help you realize your property dreams. In Sri Lanka's highly competitive real estate market, Prime Lands acquired over 300,000 customers, sufficient proof of Prime Lands' capacity and leadership in the real estate industry. </p>
            </div>

            <div>
               <h2 className='text-lg font-bold mb-4 text-white'>Quick Links</h2>
               
                
                    <Nav.Link as={Link} to="/" className='hover:underline text-gray-300 text-white'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/search_filter" className='hover:underline text-gray-300 text-white'>Properties</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className='hover:underline text-gray-300 text-white'>Contact</Nav.Link>
                    <Nav.Link as={Link} to="/about_us" className='hover:underline text-gray-300 text-white'>About</Nav.Link>              
            </div>

            <div>
               <h2 className='text-lg font-bold mb-4 text-white'>About Us</h2>
               <ul className='flex space-x-4 text-white list-none'>
                <li><FaFacebookF className='text-blue-500' /> Facebook</li>
                <li><FaTwitter className='text-blue-500'/> Twitter</li>
                <li><FaInstagram className='text-blue-500'/> Instagram</li>
               </ul>
            </div>

            <div className='border-t-2 border-gray-600 pt-6 text-gray-300 flex text-center mt-6'>
    <p>2024 All Rights Reserved!</p>
</div>


        </div>

        </Nav>
    </Navbar>
  )
}

export default Footer
