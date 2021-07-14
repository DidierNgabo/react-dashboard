import React from 'react';
import { NotificationsNone,Language,Settings } from '@material-ui/icons';

const Navbar = () => {
  return (<div className="topbar">
      <div className="topbarWrapper">
          <div className="topleft"><span className="logo">Diddy Logo</span></div>
          <div className="topright">
              <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="badge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language/>
                <span className="badge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings/>
              </div>
              <img src="profile.jpg" class="avatar" alt="avatar" />
          </div>
      </div>
  </div>);
};

export default Navbar;
