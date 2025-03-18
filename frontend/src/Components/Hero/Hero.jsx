import { Dropdown } from 'bootstrap'
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion'

import './Hero.css'


const Hero = ({ placeholder, onSearch}) => {


  const [query, setQuery] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Trigger search action when user submits (Enter key press)
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSearch(query); // Trigger the search action passed from parent
  };
  
  return (
    <div className="hero">
    <div className='hero-section' style={{margin:'5rem 5rem 5rem 8rem'}}>
      <div className="first-content">
        <h1>Modern Living <br></br> for Everyone</h1>
        <p style={{paddingBottom:'1rem 0 2rem 0'}}>We Provide a complete service for the sale,purchase<br></br> or rental of Real Estate. We have been Operating in <br>
        </br>Sri Lanka for 15 Years.</p>
      </div>

      <div className="second-content">
  <form onSubmit={handleSearch} className="search-bar" style={{display: 'flex', }}>
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder={"Search Here.."}
      className="search-input"
      style={{height: '40px',width:'350px',border:'1px solid #001f3f'}} // flex: 1 makes input take up available space
    />
    <Button 
      type="submit" 
      style={{ 
        backgroundColor: "#001f3f", 
        borderColor: "#001f3f", 
        marginLeft: '10px', 
        height: '40px' // matching the height of the input
      }}
    >
      Search
    </Button>
  </form>
</div>
    </div>
  </div>
  )
}

export default Hero
