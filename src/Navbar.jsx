import React from 'react'
const Navbar = () => {
    return (
        <>
            <style jsx='true'>{`
                .navbar{
                    border-bottom: 1px solid black;
                    position: sticky;
                    top: 0;
                    background-color: #ffffff;
                }
                .navbar ul{
                    display: flex;
                    justify-content: space-between;
                    width: 240px;
                    margin: auto;
                    list-style: none;
                    padding: 15px;
                }
                .nav-link{
                    color: black;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 14px;
                }
            
        `}</style>
            <nav id='navbar' className='navbar'>
                <ul>
                    <li><a className='nav-link' href="#home">HOME</a></li>
                    <li><a className='nav-link' href="#about">ABOUT</a></li>
                    <li><a className='nav-link' href="#portfolio">PORTFOLIO</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
