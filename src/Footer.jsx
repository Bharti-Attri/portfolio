import React from 'react'
const linkStyle = {
    height: '20px',
}
const listStyle = {
    display:'flex',
    gap:'2rem',
    listStyle: 'none',
    padding: '2rem', 
    justifyContent: 'center',
    alignItems: 'center',
    
}
const Footer = () => {
  return (
    <footer style={{textAlign: 'center',padding: '2rem'}} >
      <ul style={listStyle}>
        <li><a href="https://github.com/Bharti-Attri"><img style={linkStyle} src="./github.png" alt="" /></a></li>
        <li><a href="https://www.linkedin.com/in/bharti-attri-353710350/"><img style={linkStyle} src="./linkedin.png" alt="" /></a></li>
        <li><a href="mailto:bhartiattri06@gmail.com"><img style={linkStyle} src="./mail.png" alt="" /></a></li>
      </ul>
      <span style={{fontSize: '1.25rem'}}>Designed and Developed By - Bharti</span>
    </footer>
  )
}

export default Footer;
