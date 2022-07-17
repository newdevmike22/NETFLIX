import { useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const [isScrolling, setIsScolling] = useState(false);

    window.onscroll = () => {
        setIsScolling(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolling ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="netflix logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className='icon' />
                    <span>KID</span>
                    <NotificationsIcon  className='icon' />
                    <img src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/zi4gt0jumkiwhwq8jmfa.jpg?v=1629415980&width=1946" alt='profile pic' />
                    <div className='profile'> 
                        <ArrowDropDownIcon className='icon' />
                        <div className='options'>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;