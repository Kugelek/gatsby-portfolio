import React from 'react';
import Logo from '../../images/logo.png';
import './TopNavBar.modules.scss';

const TopNavBar = () => {
    return (  
        <section className="topbar">
            <div className="topbar__logobox">
                <img className="topbar__logo" src={Logo} alt="poblocki dev logo"/>
            </div>
            <nav className="topbar__nav">

            </nav>
        </section>
    );
}
 
export default TopNavBar;