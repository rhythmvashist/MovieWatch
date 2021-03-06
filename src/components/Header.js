import React, { useState } from "react";
import "./style/Header.css";
import requests from "./requests";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import LiveTvTwoToneIcon from "@material-ui/icons/LiveTvTwoTone";
import WhatshotTwoToneIcon from "@material-ui/icons/WhatshotTwoTone";
import VideoLibraryTwoToneIcon from "@material-ui/icons/VideoLibraryTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";

function Header({ setSelectedOption }) {
  const handleChange = (e) => {
    if (!e.target.value) {
      setSelectedOption(requests.fetchTrending);
    } else {
      setSelectedOption(`${requests.searchMovie}${e.target.value}`);
    }
  };

  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeTwoToneIcon />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <WhatshotTwoToneIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvTwoToneIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryTwoToneIcon />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <AccountCircleTwoToneIcon />
          <p>Account</p>
        </div>
      </div>
      <div className="search_icon">
        <input
          type="text"
          placeholder="Seach for Movie...."
          onChange={handleChange}
        ></input>
        <img
          src="https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb.svg"
          alt="WatchList"
        />
      </div>
    </div>
  );
}

export default Header;
