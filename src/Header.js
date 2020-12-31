import React from "react";
import './Header.css'
import {Avatar} from '@material-ui/core';
import {AccessTime, Search, HelpOutline} from '@material-ui/icons';
import {Input} from '@material-ui/core';

function Header() {
  return <div className="header">
    <div className="nav_left">
        <Avatar/>
        <AccessTime/>
        {/* Time icon */}
    </div>
    <div className="nav_search">
        {/* Search icon */}
        <Search/>
        {/* Input */}
        {/* <input type="text" className="nav-input"/> */}
        <input type = 'text' placeholder = 'Search Slack, Channels and more!'/>
    </div>

    <div className="nav_right">
      {/* Help icon */}
      <HelpOutline/>
    </div>
  </div>;
}

export default Header;
