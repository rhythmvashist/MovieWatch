import React from 'react'
import "./style/Header.css";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LiveTvTwoToneIcon from '@material-ui/icons/LiveTvTwoTone';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import VideoLibraryTwoToneIcon from '@material-ui/icons/VideoLibraryTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';


function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeTwoToneIcon/>
                    <p>Home</p>
                </div>
                
                <div className="header__icon">
                    <WhatshotTwoToneIcon/>
                    <p>Trending</p>
                </div>

                <div className="header__icon">
                    <LiveTvTwoToneIcon/>
                    <p>Verified</p>
                </div>

                <div className="header__icon">
                    <VideoLibraryTwoToneIcon/>
                    <p>Collections</p>
                </div>

                <div className="header__icon">
                    <SearchTwoToneIcon/>
                    <p>Search</p>
                </div>

                <div className="header__icon">
                    <AccountCircleTwoToneIcon/>
                    <p>Account</p>
                </div>
                
            </div>
            <img src="https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb.svg" alt="WatchList"/>
        </div>
    )
}

export default Header
