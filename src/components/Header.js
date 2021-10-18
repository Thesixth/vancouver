import React from 'react';
import menuLinksData from './data/menu_links.json'

const Header = () => {
    return (
        <div>
            <header id="intro">
                <article className="fullheight">
                    <div className="hgroup">
                    <h1>Hike Vancouver</h1>
                    <h2>Emmanuel's Tours</h2>
                    <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
                    </div>
                </article>

                <nav id="nav">
                    <div className="navbar">
                    <div className="brand"><a href="#welcome">Vancouver</a></div>
                    <ul>
                        {
                          menuLinksData.map((link, key) => 
                            <li key={key}><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>)  
                        }
                    </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
