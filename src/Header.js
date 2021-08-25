import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <nav className="header">
            <img className="header__logo" src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?fit=636%2C193&ssl=1" alt="logo" />
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                {/*1st Link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, Users</span>
                        <span className="header__optionLineTwo">Sign In </span>
                    </div>
                </Link>
                {/*2nd Link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders </span>
                    </div>
                </Link>
                {/*3rd Link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime </span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" classname="header__link">
                <div className="header__optionbasket">
                
                </div>            
            </Link>
        </nav>
    )
}

export default Header;