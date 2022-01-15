import React from 'react'


const Navbar = () => {
    return (
        <div>
            <section className="nav-bar">
        <div className="nav-header">
            <img src="/images/logo-stackoverflow.png" alt="" className="logo" />
      
        </div>

        <div className="links-container">
            <ul className="links">
                <li>
                    <a className="link" href="">about</a>
                </li>
                <li>
                    <a className="link" href="">products</a>
                </li>
                <li>
                    <a className="link" href="">for teams</a>
                </li>
            </ul>
        </div>

        <div className="search-bar">
            <input type="text" placeholder="Search...   " />
        </div>

        <div className="button-container">
            <div className="buttons">
                <button type="button" className="login-btn">Log in</button>
                <button type="button" className="signup-btn">Sign up</button>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Navbar
